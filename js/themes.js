<script>
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // sets the initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    }

    // adds an event listener for theme toggle button
    themeToggle.addEventListener('click', toggleTheme);

    // adds an event listener for system theme changes
    prefersDarkScheme.addListener((e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
    });
</script>
