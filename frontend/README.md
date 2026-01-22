# Frontend - Gestion de Groupes

Application Angular pour la gestion de groupes d'étudiants et de sujets. Cette application permet de gérer les étudiants, les sujets de projet et de générer automatiquement des groupes.

## Technologies

- **Angular**: 19.2.18
- **TypeScript**: 5.8.2
- **Bootstrap**: 5.2.3
- **RxJS**: 7.8.1

## Architecture

Cette application utilise une architecture moderne Angular avec :

- **Standalone Components**: Tous les composants sont standalone (pas de NgModule)
- **Standalone Routing**: Utilisation de `app.routes.ts` avec `provideRouter()`
- **Bootstrap Application**: Utilisation de `bootstrapApplication()` dans `main.ts`
- **Configuration par environnement**: Fichiers `environment.ts` et `environment.prod.ts`

## Structure du projet

```
src/
├── app/
│   ├── components/          # Composants de l'application
│   │   ├── ajout-etudiant/
│   │   ├── ajout-sujet/
│   │   ├── formation-groupe/
│   │   ├── liste-etudiant/
│   │   ├── liste-groupes/
│   │   └── liste-sujet/
│   ├── shared/              # Composants partagés
│   │   └── navbar/
│   ├── Etudiant.ts          # Interfaces TypeScript
│   ├── Groupe.ts
│   ├── Sujet.ts
│   ├── app.service.ts       # Service HTTP
│   ├── app.component.ts     # Composant racine
│   └── app.routes.ts        # Configuration des routes
├── environments/            # Configuration par environnement
│   ├── environment.ts
│   └── environment.prod.ts
└── main.ts                  # Point d'entrée de l'application
```

## Installation

1. Installer les dépendances :
```bash
npm install --legacy-peer-deps
```

2. Démarrer le serveur de développement :
```bash
ng serve
```

L'application sera accessible sur `http://localhost:4200/`

## Build

Pour construire l'application pour la production :

```bash
ng build --configuration production
```

Les fichiers de build seront dans le dossier `dist/frontend/`

## Configuration

### Environnement

L'URL du backend est configurée dans les fichiers d'environnement :

- **Development**: `src/environments/environment.ts`
- **Production**: `src/environments/environment.prod.ts`

Par défaut, l'URL est `http://localhost:8080/`

## Fonctionnalités

1. **Gestion des étudiants**
   - Ajout d'étudiants (nom, prénom, adresse email)
   - Liste des étudiants

2. **Gestion des sujets**
   - Ajout de sujets
   - Liste des sujets

3. **Formation de groupes**
   - Génération automatique de groupes selon un nombre
   - Validation (nombre de groupes ≤ nombre de sujets)
   - Affichage des groupes avec sujets et membres
   - Historique des vagues de groupes

## Gestion des erreurs

L'application inclut une gestion d'erreurs complète pour tous les appels HTTP :
- Messages d'erreur affichés à l'utilisateur
- Logs d'erreur dans la console pour le débogage

## Tests

Pour exécuter les tests unitaires :

```bash
ng test
```

## Développement

### Génération de composants

Pour générer un nouveau composant standalone :

```bash
ng generate component component-name --standalone
```

### Structure des composants

Tous les composants sont standalone et importent directement les modules nécessaires :
- `CommonModule` pour les directives Angular communes
- `ReactiveFormsModule` pour les formulaires réactifs
- `RouterLink` pour la navigation

## Notes importantes

- Assurez-vous que le backend est démarré sur le port 8080
- L'application utilise Bootstrap pour le style
- La navigation utilise `routerLink` au lieu de `href` pour une meilleure performance

## Aide supplémentaire

Pour plus d'aide sur Angular CLI, consultez [Angular CLI Overview and Command Reference](https://angular.io/cli).
