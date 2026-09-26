// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Subtle Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var windowHeight = window.innerHeight;
    
    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightboxBtn = document.querySelector('.close-lightbox');
const portfolioTriggers = document.querySelectorAll('.lightbox-trigger img');

if (lightbox && lightboxImg) {
    portfolioTriggers.forEach(img => {
        img.addEventListener('click', (e) => {
            lightbox.classList.add('active');
            lightboxImg.src = e.target.src;
            if (lightboxCaption) {
                lightboxCaption.textContent = e.target.getAttribute('data-caption') || '';
            }
            document.body.style.overflow = 'hidden';
        });
    });

    closeLightboxBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Interactive Hover Glow for Glass Cards (Optional subtle JS effect)
const cards = document.querySelectorAll('.card-hover');
cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Trigger reveal once on load
document.addEventListener('DOMContentLoaded', () => {
    reveal(); 
});
