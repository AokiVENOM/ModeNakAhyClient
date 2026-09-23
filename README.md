# ModeNakAhyClient

Commision Client Mode Nak'ahy par Toky RAMANITRA
lien : https://aokivenom.github.io/ModeNakAhyClient/

# Changelog — Mode Nak'Ahy

Récapitulatif de toutes les évolutions de l'application de répartition des clients (vente de sacs), classées par version. Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/).

---

## v1.0 — Version initiale
- Page HTML unique, sans dépendance externe, style **liquid glass** (fond dégradé animé, panneaux en verre translucide, reflets au survol).
- Formulaire "Ajouter une commande" : nom du client, téléphone, produit, prix, statut (En attente / Payé / Livré).
- Tableau des commandes avec recherche par nom ou modèle.
- Statistiques en direct : nombre de clients, sacs commandés, en attente, total (Ar).

## v1.1 — Commandes multi-produits et livraison
- Un client peut commander **plusieurs sacs** dans une seule commande (bouton "+ Ajouter un produit").
- Ajout du bouton **Modifier** sur chaque client, avec formulaire pré-rempli.
- Ajout de la **livraison** : lieu de livraison, frais de livraison (booléen + montant en liste : 4 000 / 5 000 / 6 000 / 8 000 / 10 000 Ar).
- Nouveaux statuts : **Payé et livré**, puis **Ne répond pas** (remplace l'ancien statut "Livré").
- Ajout des **dates** : date de commande (préremplie à aujourd'hui) et date de livraison (auto-remplie si le statut passe à "Livré"/"Payé et livré").
- Ajout du **mode de paiement** (Espèces, MVola, Orange Money, Airtel Money, Autre).
- Design **responsive complet** (mobile, tablette, desktop), avec tableau qui se transforme en cartes empilées sur petit écran.
- Fiche client : passage d'une fenêtre modale à une **ligne dépliable** directement dans le tableau, avec icônes (crayon/poubelle) à la place des boutons texte.

## v1.2 — Connexion à Firebase
- Migration du stockage en mémoire vers **Firebase Firestore** : les commandes sont synchronisées en temps réel et persistent entre les sessions et les appareils.
- Indicateur de synchronisation ("Connexion à la base…" / "Synchronisé avec Firebase" / erreur) avec mini-spinner pendant le chargement.

## v1.3 — Authentification
- Écran de **connexion / création de compte** (email + mot de passe) via Firebase Authentication.
- Fonction **mot de passe oublié** (envoi d'un lien de réinitialisation par email).
- Chaque commande enregistre qui l'a ajoutée ("Ajouté par").
- Écran de chargement dédié (spinner) au démarrage pour éviter que l'écran de connexion clignote avant l'affichage de l'app.

## v1.4 — Rôles Équipe / Livreur
- Deux rôles à l'inscription : **Équipe** (accès complet) et **Livreur** (accès restreint).
- Un compte livreur doit être **approuvé par un membre de l'équipe** avant d'accéder à l'application (écran d'attente dédié, panneau "Demandes en attente" pour l'équipe, boutons Approuver/Refuser).
- Vue livreur : les totaux de vente (chiffre d'affaires) et les boutons d'export sont masqués ; les livreurs ne voient pas non plus qui a ajouté chaque commande.
- Thème visuel distinct pour les livreurs (fond marron au lieu de bleu/cyan).
- Sécurité : en cas d'erreur de lecture du rôle, l'accès est **refusé par défaut** (pas donné par erreur).
- Ajout du bouton **Supprimer mon compte** (avec double confirmation et gestion de la reconnexion récente exigée par Firebase).

## v1.5 — Filtres, historique et exports
- Sélecteurs **Mois / Année / Semaine** ("Aller à :") pour naviguer dans l'historique des commandes, basés sur la date de commande.
- Le filtre choisi est **mémorisé** sur l'appareil et restauré après actualisation.
- Panneau de résumé en bas de liste : total sans frais, total avec frais, total des frais de livraison (ce dernier reste visible pour les livreurs).
- Indicateur "client fidèle" : badge et suggestion dans le formulaire si un client a déjà commandé.
- Export **PDF** et **Excel** du tableau filtré, avec totaux inclus.
- Badge de **présence en temps réel** (point vert + nombre de personnes connectées), cliquable pour voir la liste des prénoms actifs.
- Bouton flottant de retour en haut de page.

## v1.6 — Finitions et corrections
- Les commandes "Ne répond pas" sont exclues de tous les calculs de total.
- Correction d'un bug d'affichage dans le PDF ("13/000 Ar" au lieu de "13 000 Ar") + refonte du design du PDF (bandeau d'en-tête, tableau propre, encadré de totaux, numérotation des pages).
- Renommage "Vente de Sacs" → **Mode Nak'Ahy**, ajout d'une salutation personnalisée ("Bonjour"/"Bonsoir" + prénom) selon l'heure locale.
- Formulaire "Ajouter une commande" repliable/dépliable (préférence mémorisée).
- Correctifs responsive mobile (iPhone SE notamment) : zoom automatique iOS supprimé, menus Mois/Année/Semaine qui ne se chevauchent plus.
- Correctif de la couleur de la barre Safari sur iOS (`theme-color` + couleur de fond en secours, adaptée aussi au thème livreur).
- Refonte visuelle "plus liquid glass" : flou et saturation renforcés, boutons avec reflet, champs de saisie en verre "creusé", hiérarchie typographique du tableau clients façon iOS.
- Déploiement sur **GitHub Pages** (`aokivenom.github.io/ModeNakAhyClient`).

---

*Projet développé avec Claude (Anthropic) en French/English, hébergé sur GitHub Pages, propulsé par Firebase (Authentication + Firestore).*
