function toggleNav() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

function openModal(imgSrc, title, issuer, desc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalIssuer = document.getElementById('modalIssuer');
    const modalDesc = document.getElementById('modalDesc');
    
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalIssuer.textContent = issuer;
    modalDesc.innerHTML = desc || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('active');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();