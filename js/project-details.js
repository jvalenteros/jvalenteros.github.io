document.addEventListener('DOMContentLoaded', function() {
  initProjectDetails();
  initProjectTabs();
});

function initProjectDetails() {
  const detailsToggles = document.querySelectorAll('.details-toggle');

  detailsToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const detailsId = this.getAttribute('aria-controls');
      const detailsElement = document.getElementById(detailsId);

      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);

      const toggleText = this.querySelector('.toggle-text');
      toggleText.textContent = isExpanded ? 'View Details' : 'Hide Details';

      detailsElement.classList.toggle('expanded');

      // Scrolls into view if expanding
      if (!isExpanded) {
        setTimeout(() => {
          const tabsExist = detailsElement.querySelector('.details-tabs');

          const elementToScroll = tabsExist ? detailsElement.closest('.project-card') || detailsElement : detailsElement;

          elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300); // Delay matches CSS transition
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

function initProjectTabs() {
  const tabButtons = document.querySelectorAll('.details-tab');

  tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', function() {
      const targetPanelId = this.dataset.target;

      const projectDetailsContainer = this.closest('.project-details');
      if (!projectDetailsContainer) {
          console.error('Could not find parent .project-details for tab', this);
          return;
      }

      const detailsTabsContainer = this.closest('.details-tabs'); 
      const detailsContent = projectDetailsContainer.querySelector('.details-content'); 

      if (!detailsContent || !detailsTabsContainer) {
        console.error('Could not find .details-tabs or .details-content within .project-details for', this);
        return;
      }
      console.log('Found containers:', { detailsTabsContainer, detailsContent });

      detailsTabsContainer.querySelectorAll('.details-tab').forEach(tab => {
        tab.classList.remove('active');
      });

      detailsContent.querySelectorAll('.details-panel').forEach(panel => {
        panel.classList.remove('active');
      });

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