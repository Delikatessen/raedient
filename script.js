document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        // Close menu when clicking a link inside it (optional, good UX)
        navMenu.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                navMenu.classList.remove('show');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = event.target.closest('nav');
            const isClickOnToggle = event.target.closest('.mobile-menu-toggle');

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    }

    // Optional: Close dropdown when clicking outside on mobile/tablet
    // This might need adjustment depending on the exact mobile nav behavior desired
    document.addEventListener('click', function(event) {
        const openDropdown = document.querySelector('.dropdown-content.show-mobile'); // Assuming a class is added
        if (openDropdown && !event.target.closest('.dropdown')) {
             openDropdown.classList.remove('show-mobile');
        }
    });
}); 