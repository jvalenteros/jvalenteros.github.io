document.addEventListener('DOMContentLoaded', function() {
  initProjectDetails();
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
        setTimeout(() => {
          detailsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
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
      githubIcon.style.color = '';
    });
  });
  
}