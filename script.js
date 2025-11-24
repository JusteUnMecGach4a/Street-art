document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mettre à jour l'année dans le footer
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Interaction : "Le saviez-vous ?"
    const btnReveal = document.getElementById('reveal-fact');
    const funFactText = document.getElementById('fun-fact');

    if(btnReveal && funFactText) {
        btnReveal.addEventListener('click', () => {
            funFactText.classList.remove('hidden');
            funFactText.classList.add('visible');
            btnReveal.style.display = 'none'; 
        });
    }

    // 3. Système de filtres Galerie
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artCards = document.querySelectorAll('.art-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset des boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-filter');

            // Tri des cartes
            artCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    // Reset de l'animation pour la rejouer
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. Scroll doux pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});