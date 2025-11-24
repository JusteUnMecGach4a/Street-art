// --- 1. LES DONNÉES (C'est ici que tu modifies ton contenu) ---

const dataPignon = {
    titre: "Ernest Pignon-Ernest",
    desc: "Bien avant que le Street Art ne soit à la mode, <strong>Ernest Pignon-Ernest</strong> collait déjà ses dessins grandeur nature sur les murs des villes. Depuis 1966, il fait de la rue son lieu d'exposition.<br><br>Son œuvre phare, <strong>Arthur Rimbaud</strong>, collée à Paris et Charleville, est devenue une icône.",
    funFact: "Il dessine d'abord au fusain et à la pierre noire, puis ses œuvres sont reproduites sur du papier journal très fragile qui disparaît avec le temps.",
    img: "https://images.unsplash.com/photo-1583431272380-140414734424?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
};

const dataBanksy = {
    titre: "Banksy : L'Héritier Rebelle",
    desc: "Originaire de Bristol, <strong>Banksy</strong> cultive l'anonymat comme une arme. Contrairement aux collages de Pignon, Banksy utilise le <strong>pochoir</strong> pour une exécution rapide.",
    citation: "L'art doit réconforter ceux qui sont troublés et troubler ceux qui sont confortables.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg/800px-Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg"
};

const galerieImages = [
    {
        artiste: 'pignon',
        titre: 'Rimbaud',
        desc: 'Le poète vagabond',
        img: 'https://images.unsplash.com/photo-1580130712368-4b8a6663073a?auto=format&fit=crop&w=500&q=80'
    },
    {
        artiste: 'pignon',
        titre: 'Pasolini',
        desc: 'Pietà moderne',
        img: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=500&q=80'
    },
    {
        artiste: 'pignon',
        titre: 'Naples',
        desc: 'Fusion avec le mur',
        img: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=500&q=80'
    },
    {
        artiste: 'banksy',
        titre: 'Girl with Balloon',
        desc: "L'espoir s'envole",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg/640px-Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg'
    },
    {
        artiste: 'banksy',
        titre: 'Flower Thrower',
        desc: 'La violence des fleurs',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Banksys_flower-throwing_protester._%2817801207806%29.jpg/640px-Banksys_flower-throwing_protester._%2817801207806%29.jpg'
    },
    {
        artiste: 'banksy',
        titre: 'Mild Mild West',
        desc: 'Culture Pop détournée',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Mild_Mild_West_-_geograph.org.uk_-_1463778.jpg/640px-The_Mild_Mild_West_-_geograph.org.uk_-_1463778.jpg'
    }
];


// --- 2. LE MOTEUR (Génération automatique du HTML) ---

document.addEventListener('DOMContentLoaded', () => {
    
    // A. Générer la section Pignon
    const pignonSection = document.getElementById('pignon');
    if(pignonSection) {
        pignonSection.innerHTML = `
            <h2>${dataPignon.titre}</h2>
            <div class="bio-content">
                <div class="text">
                    <p>${dataPignon.desc}</p>
                    <button id="reveal-fact" class="btn-secondary">Le saviez-vous ?</button>
                    <p id="fun-fact" class="hidden">${dataPignon.funFact}</p>
                </div>
                <div class="img-highlight">
                    <img src="${dataPignon.img}" alt="${dataPignon.titre}">
                </div>
            </div>
        `;
        
        // Réattacher l'événement du bouton "Le saviez-vous" car on vient de le créer
        const btnReveal = document.getElementById('reveal-fact');
        const funFactText = document.getElementById('fun-fact');
        if(btnReveal) {
            btnReveal.addEventListener('click', () => {
                funFactText.classList.remove('hidden');
                funFactText.classList.add('visible');
                btnReveal.style.display = 'none';
            });
        }
    }

    // B. Générer la section Banksy
    const banksySection = document.getElementById('banksy');
    if(banksySection) {
        banksySection.innerHTML = `
            <h2>${dataBanksy.titre}</h2>
            <div class="bio-content reverse">
                <div class="text">
                    <p>${dataBanksy.desc}</p>
                    <blockquote class="quote-box">"${dataBanksy.citation}"</blockquote>
                </div>
                <div class="img-highlight">
                    <img src="${dataBanksy.img}" alt="${dataBanksy.titre}">
                </div>
            </div>
        `;
    }

    // C. Générer la Galerie (La Boucle)
    const galleryGrid = document.getElementById('gallery-grid');
    if(galleryGrid) {
        galerieImages.forEach(item => {
            const card = document.createElement('div');
            card.className = 'art-card';
            card.setAttribute('data-category', item.artiste);
            card.innerHTML = `
                <div class="img-container">
                    <img src="${item.img}" alt="${item.titre}">
                </div>
                <h3>${item.titre}</h3>
                <p>${item.desc}</p>
            `;
            galleryGrid.appendChild(card);
        });
    }

    // D. Système de filtres (Même logique qu'avant)
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Note: on doit sélectionner les cartes MAINTENANT car elles viennent d'être créées
    const artCards = document.querySelectorAll('.art-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-filter');

            artCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'none';
                    card.offsetHeight; 
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // E. Année Footer
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});