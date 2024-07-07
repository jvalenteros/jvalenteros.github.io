/* rewrite 7/6/2024 11:36 PM CST */
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');

    // toggles theme menu and hamburger icon
    themeToggle.addEventListener('click', () => {
        themeMenu.classList.toggle('show');
        themeToggle.classList.toggle('active');
    });

    // closes theme menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!themeToggle.contains(event.target) && !themeMenu.contains(event.target)) {
            themeMenu.classList.remove('show');
            themeToggle.classList.remove('active');
        }
    });

    // applies selected theme
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedTheme = option.getAttribute('data-theme');
            document.body.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('theme', selectedTheme);
            themeMenu.classList.remove('show');
            themeToggle.classList.remove('active');
            updateActiveThemeOption(selectedTheme);
        });
    });

    // applies saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateActiveThemeOption(savedTheme);

    // function to update the active theme option
    function updateActiveThemeOption(theme) {
        themeOptions.forEach(option => {
            if (option.getAttribute('data-theme') === theme) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
});
