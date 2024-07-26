const contactButton = document.getElementById('contactButton');
    const defaultImage = document.querySelector('.default-show');
    const hoverImage = document.querySelector('.hover-show');

    contactButton.addEventListener('mouseenter', () => {
        defaultImage.classList.add('hidden');
        hoverImage.classList.remove('hidden');
    });

    contactButton.addEventListener('mouseleave', () => {
        defaultImage.classList.remove('hidden');
        hoverImage.classList.add('hidden');
    });