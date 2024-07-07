document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');

    // toggles the theme menu
    themeToggle.addEventListener('click', () => {
        themeMenu.classList.toggle('show');
    });

    // closes theme menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!themeToggle.contains(event.target) && !themeMenu.contains(event.target)) {
            themeMenu.classList.remove('show');
        }
    });

    // applies the selected theme
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedTheme = option.getAttribute('data-theme');
            document.body.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('theme', selectedTheme);
            themeMenu.classList.remove('show');
        });
    });

    // applies saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
});
