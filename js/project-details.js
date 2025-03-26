document.addEventListener('DOMContentLoaded', function() {
  initProjectDetails();
  initProjectTabs(); // Initialize tab functionality
});

function initProjectDetails() {
  const detailsToggles = document.querySelectorAll('.details-toggle');

  detailsToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const detailsId = this.getAttribute('aria-controls');
      const detailsElement = document.getElementById(detailsId);

      // Toggle expanded state
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);

      // Update toggle text
      const toggleText = this.querySelector('.toggle-text');
      toggleText.textContent = isExpanded ? 'View Details' : 'Hide Details';

      // Toggles the expanded class on the details element
      detailsElement.classList.toggle('expanded');

      // Scrolls into view if expanding
      if (!isExpanded) {
        // Ensure the scroll happens after the expansion animation starts
        setTimeout(() => {
          // Check if tabs exist within this details element
          const tabsExist = detailsElement.querySelector('.details-tabs');
          // If tabs exist, scroll the container; otherwise, scroll the element itself
          const elementToScroll = tabsExist ? detailsElement.closest('.project-card') || detailsElement : detailsElement;
          elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300); // Delay matches CSS transition roughly
      }
    });
  });

  // Adds hover effect for GitHub links
  const githubLinks = document.querySelectorAll('.github-link');

  githubLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      const projectCard = this.closest('.project-card');
      const projectTitle = projectCard.querySelector('.project-title');
      const color = projectTitle.getAttribute('data-color');

      if (color) {
        const colorValue = getComputedStyle(document.documentElement)
          .getPropertyValue(`--color-${color}`);

        const githubIcon = this.querySelector('.github-icon');
        githubIcon.style.color = colorValue;
      }
    });

    link.addEventListener('mouseleave', function() {
      const githubIcon = this.querySelector('.github-icon');
      githubIcon.style.color = ''; // Reset color
    });
  });
}

// --- New Function for Tab Handling ---
function initProjectTabs() {
  const tabButtons = document.querySelectorAll('.details-tab');

  tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', function() {
      const targetPanelId = this.dataset.target; // e.g., 'gamma-react'

      // Find the common parent container for this project's details section
      const projectDetailsContainer = this.closest('.project-details');
      if (!projectDetailsContainer) {
          console.error('Could not find parent .project-details for tab', this);
          return;
      }

      // Find the tabs and content containers within this specific project's details
      const detailsTabsContainer = this.closest('.details-tabs'); // Button is inside this
      const detailsContent = projectDetailsContainer.querySelector('.details-content'); // Content is inside the parent

      if (!detailsContent || !detailsTabsContainer) {
        // Updated error message for clarity
        console.error('Could not find .details-tabs or .details-content within .project-details for', this);
        return; // Safety check
      }
      console.log('Found containers:', { detailsTabsContainer, detailsContent }); // Keep log for verification

      // Deactivate all tabs within this specific group
      detailsTabsContainer.querySelectorAll('.details-tab').forEach(tab => {
        tab.classList.remove('active');
      });

      // Deactivate all panels within this specific group
      detailsContent.querySelectorAll('.details-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      // Activate the clicked tab
      this.classList.add('active');
      console.log('Clicked tab:', this, 'Target ID:', targetPanelId); // <-- ADDED LOG

      // Activate the corresponding panel
      const targetPanel = detailsContent.querySelector(`#${targetPanelId}`);
      if (targetPanel) {
        console.log('Found target panel:', targetPanel); // <-- ADDED LOG
        targetPanel.classList.add('active');
        console.log('Added active class to panel:', targetPanel); // <-- ADDED LOG
      } else {
        console.error('Could not find target panel with ID:', targetPanelId);
      }
    });
  });
}