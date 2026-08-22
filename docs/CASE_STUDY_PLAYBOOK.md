# 📘 Playbook Évolia Tech — Guide & Trame Standard des Études de Cas

Ce document constitue le **guide de référence officiel** et la **trame méthodologique** pour la création et l'enrichissement des études de cas de projets sur le site **Evolia Tech**. Il permet d'assurer une cohérence parfaite, un haut niveau d'exigence visuelle et une force de conviction maximale auprès des porteurs de projets et futurs clients.

---

## 🎯 1. Philosophie & Posture Rédactionnelle

1. **Orientation Business & Impact** :
   - Parler aux fondateurs, décideurs et investisseurs (ex: diaspora, entrepreneurs).
   - Remplacer le jargon technique obscur par l'impact métier, la sécurité, la confiance et la rentabilité.
2. **Posture de Partenariat Long Terme** :
   - Présenter Evolia Tech non comme un simple sous-traitant exécutant du code, mais comme un **partenaire technologique engagé sur le long terme** (cadrage, UX/UI, dev, déploiement stores, formation et maintenance évolutive).
3. **Transparence & Rétrospective** :
   - Inclure systématiquement une section de rétrospective honnête (ex: découpage des livraisons, délais de validation Apple/Google) qui démontre la maturité de l'agence.

---

## 📐 2. Trame Standard & Séquence des Blocs (12 Étape-Clés)

Chaque étude de cas complète doit être modélisée dans `PROJECTS_DATA` (`src/app/shared/constants/projects.data.ts`) selon la trame suivante :

```
1. OVERVIEW (Présentation)
2. MEDIA (Mockup Mobile / Hero Image)
3. TEXT (Contexte & Ambition du Projet)
4. CHALLENGES (Les Vrais Enjeux)
5. TEXT (Notre Approche & Méthodologie)
6. MEDIA (Dashboard Admin / Design System)
7. SOLUTION (La Solution 360° + Badges TechStack)
8. C4-DIAGRAM (Architecture C4 Niveau 1 - Optionnel)
9. PROCESS (Comment Nous Avons Travaillé Ensemble - Timeline 5 étapes)
10. TEXT (Rétrospective & Bilan)
11. TEXT (Conclusion & Partenariat Durable)
12. GALLERY (Galerie Coulisses & Visuels Masonry - Optionnel)
13. CTA (Carte d'Appel à l'Action Unifiée)
```

---

## 🛠️ 3. Spécifications Détaillées des Blocs UI

### 1. `overview` — Titre & Statement d'Impact
- **Surlignage flexible** : Utiliser la balise classique `<span class="highlight">votre texte</span>` au milieu, au début ou à la fin du titre.
  ```typescript
  title: 'Plateforme automobile connectée & <span class="highlight">marketplace de confiance</span> au Cameroun'
  ```
- **Couleur de surbrillance** : Couleur `$dark-quaternary` (`#b9b4e9` - lavande) définie dans `styles.scss`.

### 2. `media` — Visuels & Multi-Images
- Supporte une image unique (`src`) OU un tableau multi-images (`images: [...]`) affiché en empilement vertical propre.
  ```typescript
  {
    type: 'media',
    data: {
      images: [
        { src: '/images/projects/liko-auto/dahsboard-admin-liko-auto.webp', alt: 'Dashboard' }
      ]
    }
  }
  ```

### 3. `challenges` — Les Enjeux du Projet
- Liste d'enjeux structurés avec icônes de puces fléchées SVG circulaires (`.arrow-wrapper`) sur fond transparent avec bordure fine.

### 4. `solution` — La Solution 360° & Stack Technique
- Grille de cartes responsive (ex: 3 cartes : *App Mobile*, *Portail Web SEO*, *Back-office Admin*).
- **Padding des cartes** : `padding: 2rem 1rem;`
- **Badges `techStack` dans les cartes** : Chaque carte comporte ses badges technologiques stylisés identiques à la grille Bento de la page d'accueil (`border-radius: 99px; padding: 6px 14px; background: rgba(255, 255, 255, 0.05)`).
  ```typescript
  techStack: ['Flutter', 'iOS & Android', 'Firebase Push', 'WebSockets']
  ```

### 5. `c4-diagram` — Diagramme d'Architecture C4 (Optionnel)
- Diagramme de contexte système (Niveau 1) directement intégré sous la grille de solution.
- **Règle** : Pas d'entrée séparée dans le sommaire latéral, ni de titre de section séparé. Affiché directement sous forme de carte d'illustration avec légende.

### 6. `process` — Chronologie Méthodologique en 5 Étapes
- Accompagnement étalé sur une durée réaliste (ex: **5 mois**).
- **Les 5 phases types** :
  1. *Recueil des Besoins Métier, Cadrage & Maquettes UX/UI (Figma)* (3 sem)
  2. *Architecture Backend, Base de Données & APIs Sécurisées* (5 sem)
  3. *Développement de l’Application Mobile & des Portails Web* (7 sem)
  4. *Tests de Charge, Sécurité & Publication sur les Stores (Apple & Google)* (3 sem)
  5. *Formation des Équipes, Manuel d’Utilisation & Tutoriels Vidéo* (2 sem)
- **Design** : Pastilles de numérotation circulaires transparentes à bordure blanche, badges de durée en `$text-muted`.

### 7. `retrospective` — Bilan & Améliorations
- Analyse constructive couvrant notamment la différence entre **livraison itérative par modules vs lancement global (big-bang)** et la gestion des **délais de validation des stores externes**.

### 8. `gallery` — Galerie Coulisses Layout Masonry (Optionnel)
- Mise en page **Masonry Grid** responsive (3 colonnes sur desktop, 2 sur tablette, 1 sur mobile).
- **Tonalité humaine & authenticité** : Ateliers de cadrage Figma, réunions de travail avec les fondateurs, sessions de dev backend, célébrations de mise en production.

### 9. `cta` — Carte d'Appel à l'Action Unifiée
- Carte standardisée avec fond vert radial stylisé et bouton d'action unifié.
- **Règle absolue** : Le texte du bouton doit être **`Échangez avec nos experts`** pour tous les projets.

---

## ⏱️ 4. Regles d'Affichage & Calcul du Temps de Lecture

- L'indicateur du temps de lecture dans le header prend en compte la lecture du texte (**220 mots / min**) + le temps d'observation des visuels et diagrammes (**+12 secondes soit 0,2 minute par image**).
