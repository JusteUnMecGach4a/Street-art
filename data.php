<?php
// Configuration générale
$site_title = "Street Art | Pignon & Banksy";
$current_year = date('Y');

// Données de la section Pignon
$pignon = [
    'titre' => "Ernest Pignon-Ernest",
    'description' => "Bien avant que le Street Art ne soit à la mode, Ernest Pignon-Ernest collait déjà ses dessins grandeur nature sur les murs des villes. Depuis 1966, il fait de la rue son lieu d'exposition.",
    'image_biographie' => "https://images.unsplash.com/photo-1583431272380-140414734424?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    'fun_fact' => "Il dessine d'abord au fusain et à la pierre noire, puis ses œuvres sont reproduites sur du papier journal très fragile qui disparaît avec le temps."
];

// Données de la section Banksy
$banksy = [
    'titre' => "Banksy : L'Héritier Rebelle",
    'description' => "Originaire de Bristol, Banksy cultive l'anonymat comme une arme. Contrairement aux collages de Pignon, Banksy utilise le pochoir pour une exécution rapide.",
    'citation' => "L'art doit réconforter ceux qui sont troublés et troubler ceux qui sont confortables.",
    'image_biographie' => "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg/800px-Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg"
];

// Tableau de la Galerie (C'est ici qu'on ajoute ou retire des images !)
$galerie = [
    [
        'artiste' => 'pignon', // Sert pour le filtre
        'titre' => 'Rimbaud',
        'desc' => 'Le poète vagabond',
        'img' => 'https://images.unsplash.com/photo-1580130712368-4b8a6663073a?auto=format&fit=crop&w=500&q=80'
    ],
    [
        'artiste' => 'pignon',
        'titre' => 'Pasolini',
        'desc' => 'Pietà moderne',
        'img' => 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=500&q=80'
    ],
    [
        'artiste' => 'pignon',
        'titre' => 'Les ruelles de Naples',
        'desc' => 'Fusion avec le mur',
        'img' => 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=500&q=80'
    ],
    [
        'artiste' => 'banksy',
        'titre' => 'Girl with Balloon',
        'desc' => "L'espoir s'envole",
        'img' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg/640px-Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg'
    ],
    [
        'artiste' => 'banksy',
        'titre' => 'Flower Thrower',
        'desc' => 'La violence des fleurs',
        'img' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Banksys_flower-throwing_protester._%2817801207806%29.jpg/640px-Banksys_flower-throwing_protester._%2817801207806%29.jpg'
    ],
    [
        'artiste' => 'banksy',
        'titre' => 'Mild Mild West',
        'desc' => 'Culture Pop détournée',
        'img' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Mild_Mild_West_-_geograph.org.uk_-_1463778.jpg/640px-The_Mild_Mild_West_-_geograph.org.uk_-_1463778.jpg'
    ]
];
?>