<?php 
// On inclut les données et le header
require_once 'data.php';
include 'header.php'; 
?>

    <header id="home" class="hero">
        <div class="hero-content">
            <h1>L'âme des murs</h1>
            <p>Du fusain au pochoir : histoire de deux légendes urbaines.</p>
            <a href="#gallery" class="btn-turquoise">Voir les œuvres</a>
        </div>
    </header>

    <section id="pignon" class="container">
        <h2><?php echo $pignon['titre']; ?></h2>
        <div class="bio-content">
            <div class="text">
                <p><?php echo $pignon['description']; ?></p>
                
                <button id="reveal-fact" class="btn-secondary">Le saviez-vous ?</button>
                <p id="fun-fact" class="hidden"><?php echo $pignon['fun_fact']; ?></p>
            </div>
            <div class="img-highlight">
                <img src="<?php echo $pignon['image_biographie']; ?>" alt="Pignon Ernest">
            </div>
        </div>
    </section>

    <hr class="separator">

    <section id="banksy" class="container banksy-section">
        <h2><?php echo $banksy['titre']; ?></h2>
        
        <div class="bio-content reverse">
            <div class="text">
                <p><?php echo $banksy['description']; ?></p>
                
                <blockquote class="quote-box">
                    "<?php echo $banksy['citation']; ?>"
                </blockquote>
            </div>
            <div class="img-highlight">
                <img src="<?php echo $banksy['image_biographie']; ?>" alt="Banksy">
            </div>
        </div>
    </section>

    <section id="gallery" class="container gallery-section">
        <h2>Galerie Urbaine</h2>
        
        <div class="gallery-filters">
            <button class="filter-btn active" data-filter="all">Tout voir</button>
            <button class="filter-btn" data-filter="pignon">Pignon-Ernest</button>
            <button class="filter-btn" data-filter="banksy">Banksy</button>
        </div>

        <div class="gallery-grid">
            
            <?php foreach($galerie as $oeuvre): ?>
                <div class="art-card" data-category="<?php echo $oeuvre['artiste']; ?>">
                    <div class="img-container">
                        <img src="<?php echo $oeuvre['img']; ?>" alt="<?php echo $oeuvre['titre']; ?>">
                    </div>
                    <h3><?php echo $oeuvre['titre']; ?></h3>
                    <p><?php echo $oeuvre['desc']; ?></p>
                </div>
            <?php endforeach; ?>

        </div>
    </section>

<?php 
// On inclut le footer à la fin
include 'footer.php'; 
?>