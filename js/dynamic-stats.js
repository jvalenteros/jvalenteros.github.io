document.addEventListener('DOMContentLoaded', () => {
    const username = 'jvalenteros';
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const repoCount = data.length;
            const projectCount = data.filter(repo => repo.homepage).length;
            
            // Note: GitHub API v3 doesn't directly provide a total contribution count.
            // This would require a more complex query or a different API (like GraphQL).
            // For now, we'll leave contributions as a static number or use a placeholder.
            // We will update the repositories and projects count.

            const repoStatElement = document.querySelector('.stat-box[data-color="blue"] .stat-number');
            const projectStatElement = document.querySelector('.stat-box[data-color="green"] .stat-number');

            if (repoStatElement) {
                repoStatElement.textContent = repoCount;
            }
            if (projectStatElement) {
                projectStatElement.textContent = projectCount;
            }
        })
        .catch(error => {
            console.error('Error fetching GitHub data:', error);
        });
});
