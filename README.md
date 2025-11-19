# 👨‍💻 Portfolio Pro Adam Beloucif

Portfolio professionnel moderne avec intégration automatique des projets GitHub, présentation complète du CV et design responsive.

## 🌟 Fonctionnalités

### Sections Principales
- 🏠 **Hero Section** : Présentation dynamique avec animation de texte
- 👤 **À Propos** : Profil complet avec statistiques animées
- 💼 **Compétences** : Techniques, communication, langues et certifications
- 🚀 **Projets** : Récupération automatique depuis GitHub API avec filtres
- 📋 **Expérience** : Timeline interactive des expériences professionnelles
- 🎓 **Formation** : Parcours académique détaillé
- 📧 **Contact** : Formulaire et informations de contact

### Fonctionnalités Avancées
- 🔄 **GitHub API Integration** : Chargement automatique de tous les projets
- 🎨 **Design Moderne** : Interface élégante avec gradients et animations
- 📱 **Fully Responsive** : Adaptation mobile, tablette et desktop
- ⚡ **Performance Optimisée** : Chargement rapide et animations fluides
- 🎯 **Filtres Projets** : Tri par langage et catégorie
- 📊 **Animations** : Compteurs, scroll reveal, typing effect
- 🌐 **Multilingue Ready** : Structure prête pour internationalisation

## 🚀 Technologies

- **HTML5** : Structure sémantique moderne
- **CSS3** : Design avec variables CSS, Grid, Flexbox, animations
- **JavaScript ES6** : Logique moderne (async/await, fetch API)
- **GitHub API** : Récupération dynamique des repositories
- **Font Awesome 6** : Icônes professionnelles
- **Google Fonts** : Typographie system-ui

## 💻 Installation

### Cloner le Projet

```bash
git clone https://github.com/Adam-Blf/Portfolio-Web.git
cd Portfolio-Web
```

### Configuration GitHub API

1. Ouvrez `script.js`
2. Modifiez les constantes :

```javascript
const GITHUB_USERNAME = 'Adam-Blf';
const GITHUB_TOKEN = 'votre_token_github'; // Optionnel mais recommandé
```

**Note**: Le token GitHub augmente la limite de requêtes API (60 → 5000/heure)

### Lancer le Portfolio

Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local :

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# VS Code Live Server
# Clic droit sur index.html → Open with Live Server
```

Puis ouvrez [http://localhost:8000](http://localhost:8000)

## 📂 Structure du Projet

```
Portfolio-Web/
│
├── index.html          # Structure HTML du portfolio
├── style.css           # Styles CSS complets (~2000 lignes)
├── script.js           # Logique JavaScript avec GitHub API
├── README.md           # Documentation
└── .gitignore          # Fichiers à ignorer
```

## 🎨 Sections Détaillées

### 1. Hero Section
- Animation typing avec 5 métiers
- Boutons CTA vers projets et contact
- Liens réseaux sociaux animés
- Indicateur de scroll

### 2. À Propos
- Image placeholder avec icône
- Présentation détaillée du parcours
- Informations de contact
- Compteurs animés (projets, certifications, expérience)

### 3. Compétences

**Compétences Techniques:**
- Python, SQL/NoSQL, Cloud
- Machine Learning, LLM, IA Générative
- Data Pipelines, Git, Data Visualization

**Communication & Management:**
- Leadership, Gestion de Projet Agile
- Communication Digitale, Négociation

**Langues:**
- Français (Natif)
- Anglais (Professionnel)
- Espagnol (Professionnel - Erasmus Málaga)

**Certifications:**
- Introduction to AI
- Career Essentials in Generative AI (Microsoft & LinkedIn)
- Inbound (HubSpot)
- Generative AI: Thoughtful Online Search
- Streamlining Work with Microsoft Copilot

### 4. Projets

**Intégration GitHub API:**
```javascript
async function fetchGitHubProjects() {
    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
        { headers: { 'Authorization': `token ${GITHUB_TOKEN}` }}
    );
    // Traitement et affichage automatique
}
```

**Fonctionnalités:**
- Récupération automatique de tous les repos
- Filtrage par langage (All, Python, JavaScript, AI, Web)
- Affichage des stars, forks, topics
- Liens vers GitHub et démo (si homepage)
- Catégorisation automatique par mots-clés

**Projets Actuels:**
1. **Blackjack-Simulator** : Jeu Python POO avec 5 stratégies IA
2. **Langue-des-signes** : Détection de langage des signes (ML)
3. **EFREI-NLP-Anime-Recommendation** : Système de recommandation NLP
4. **Taskmate** : Task manager avec priorisation IA
5. **Calculator-JS** : Calculatrice scientifique JavaScript
6. **Pong-Game** : Jeu Pong avec IA adaptative
7. **Snake-Game** : Snake avec niveaux et classement
8. **Guess-The-Number** : Jeu éducatif avec historique
9. **Mapy** : Application de cartographie
10. **Pin-Collector** : Collecteur de pins

### 5. Expérience Professionnelle

Timeline interactive avec :
- **EPSM Lille-Métropole** (Déc 2024 - Sept 2025) : Communication Digitale
- **BDE ISIT** (Fév 2024 - Août 2025) : Vice Président
- **BDE Efrei** (Mars 2024 - Juin 2024) : Président
- **BNP Paribas** (Mai 2023 - Juil 2023) : Assistant Scrum Master
- Et plus...

### 6. Formation

- **Mastère Data Engineering & AI** (2025-2027) - EFREI Paris
- **Bachelor Communication Digitale** (2022-2025) - EFREI & ISIT
- **Erasmus** (2023-2024) - Universidad de Málaga
- **PMM Kieffer** (2020-2021) - Marine Nationale

### 7. Contact

- Email : adam.beloucif@efrei.net
- Téléphone : 07 86 46 68 34
- LinkedIn : linkedin.com/in/adambeloucif
- GitHub : github.com/Adam-Blf
- Localisation : Chevilly-Larue, Île-de-France

**Disponibilité:** Alternance 24 mois (Septembre 2025)
**Rythme:** 2 semaines entreprise / 1 semaine école

## ⚙️ Personnalisation

### Modifier les Informations

1. **Informations personnelles** : Éditez `index.html` sections hero, about, contact
2. **Compétences** : Modifiez les `skills-grid` dans `index.html`
3. **Expériences** : Ajoutez/modifiez les `timeline-item`
4. **Formation** : Éditez les `education-item`

### Personnaliser le Style

Variables CSS dans `style.css` :

```css
:root {
    --primary-color: #667eea;      /* Couleur principale */
    --secondary-color: #764ba2;    /* Couleur secondaire */
    --accent-color: #10b981;       /* Couleur d'accent */
    /* ... */
}
```

### Ajouter des Projets Manuellement

Si vous souhaitez ajouter des projets manuellement (sans GitHub API) :

```html
<div class="project-card" data-categories="python ai">
    <!-- Contenu du projet -->
</div>
```

## 🎯 Fonctionnalités JavaScript

### Animations
- **Typing Effect** : Animation de texte qui change
- **Counter Animation** : Compteurs animés avec Intersection Observer
- **Scroll Reveal** : Apparition progressive au scroll
- **Smooth Scroll** : Navigation fluide entre sections

### Navigation
- **Sticky Navbar** : Navbar fixe au scroll
- **Active Link** : Highlight du lien actif selon scroll
- **Mobile Menu** : Menu hamburger responsive
- **Scroll to Top** : Bouton retour en haut

### Projets
- **GitHub API** : Récupération automatique des repos
- **Filtres Dynamiques** : Tri par catégorie
- **Catégorisation Auto** : Classification par mots-clés
- **Lazy Loading** : Chargement optimisé

## 📱 Responsive Design

Breakpoints :
- **Desktop** : > 992px
- **Tablet** : 768px - 992px
- **Mobile** : < 768px
- **Small Mobile** : < 480px

Adaptations :
- Grid → Flex sur mobile
- Menu hamburger < 768px
- Images et textes adaptés
- Touch-friendly sur mobile

## 🌐 Compatibilité

| Navigateur | Version Minimale |
|-----------|------------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

## 🚀 Optimisations

### Performance
- Intersection Observer pour animations (lazy)
- Debounce sur scroll events
- CSS Grid et Flexbox (pas de framework lourd)
- Font Awesome CDN avec cache
- Minification possible (production)

### SEO
- Meta tags optimisés
- Structure sémantique HTML5
- Alt texts pour accessibilité
- Open Graph tags (à ajouter)

### Accessibilité
- Contrastes respectés (WCAG AA)
- Navigation clavier
- ARIA labels (à compléter)
- Focus visible

## 🔧 Améliorations Futures

- [ ] **Mode Sombre** : Dark/Light theme switcher
- [ ] **i18n** : Version anglaise/française
- [ ] **Blog Section** : Articles tech
- [ ] **Animations Avancées** : GSAP ou Framer Motion
- [ ] **Backend Contact** : Envoi email via API
- [ ] **Analytics** : Google Analytics/Plausible
- [ ] **PWA** : Service Worker pour offline
- [ ] **Tests** : Jest pour JavaScript
- [ ] **CI/CD** : GitHub Actions pour deploy
- [ ] **CMS** : Headless CMS pour édition facile

## 📊 Métriques

- **Lignes de code** : ~3500 (HTML: 800, CSS: 2000, JS: 700)
- **Taille** : ~150 KB (sans images)
- **Sections** : 7 principales
- **Animations** : 10+ types
- **Responsive breakpoints** : 4

## 🤝 Contribution

Ce portfolio est personnel mais vous pouvez l'utiliser comme template :

1. Fork le projet
2. Modifiez avec vos informations
3. Personnalisez le style
4. Déployez sur GitHub Pages, Netlify ou Vercel

## 📄 Licence

Code open source - libre d'utilisation comme template pour votre propre portfolio.

## 👤 Auteur

**Adam Beloucif**
- Email: adam.beloucif@efrei.net
- LinkedIn: [@adambeloucif](https://www.linkedin.com/in/adambeloucif)
- GitHub: [@Adam-Blf](https://github.com/Adam-Blf)
- Localisation: Chevilly-Larue, Île-de-France

## 🙏 Remerciements

- Design inspiré par les portfolios modernes 2025
- Icons: Font Awesome 6
- Fonts: System UI Stack
- API: GitHub REST API v3

---

## 📝 Notes Techniques

### GitHub API Rate Limiting

Sans token : 60 requêtes/heure
Avec token : 5000 requêtes/heure

### CORS

GitHub API autorise les requêtes cross-origin. Pas de proxy nécessaire.

### Browser Support

Utilise des features modernes :
- CSS Grid & Flexbox
- ES6+ (async/await, fetch)
- Intersection Observer
- CSS Variables

Polyfills non inclus (ciblage navigateurs modernes).

---

⭐ **Si vous utilisez ce portfolio comme template, donnez une étoile sur GitHub !** ⭐

**Statut:** ✅ Complet et prêt à déployer
**Dernière mise à jour:** Novembre 2025
