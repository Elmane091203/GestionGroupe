# Gestion de Groupes - Application Complète

Application full-stack pour la gestion de groupes d'étudiants et de sujets de projet. Cette application permet de gérer les étudiants, les sujets et de générer automatiquement des groupes de travail.

## 📋 Vue d'ensemble

Cette application est composée de deux parties principales :

- **Frontend** : Application Angular 19 (SPA - Single Page Application)
- **Backend** : API REST Spring Boot 3

### Fonctionnalités principales

- ✅ Gestion des étudiants (ajout, liste)
- ✅ Gestion des sujets de projet (ajout, liste)
- ✅ Génération automatique de groupes
- ✅ Historique des vagues de groupes créées
- ✅ Interface utilisateur moderne avec Bootstrap

## 🏗️ Architecture

```
GestionGroupe/
├── frontend/          # Application Angular (Client)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     # Composants standalone
│   │   │   ├── shared/         # Composants partagés (navbar)
│   │   │   └── app.service.ts  # Service HTTP
│   │   └── environments/       # Configuration par environnement
│   └── package.json
│
└── springback/        # API REST Spring Boot (Serveur)
    ├── src/main/java/
    │   └── com/projet/springback/
    │       ├── controller/     # Contrôleurs REST
    │       ├── model/          # Entités JPA
    │       ├── repository/     # Repositories JPA
    │       └── service/        # Services métier
    └── pom.xml
```

### Stack technologique

**Frontend :**
- Angular 19.2.18
- TypeScript 5.8.2
- Bootstrap 5.2.3
- RxJS 7.8.1

**Backend :**
- Spring Boot 3.0.1
- Java 17
- Spring Data JPA
- MySQL 8.0+

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** 18+ et npm
- **Java** 17+
- **Maven** 3.6+
- **MySQL** 8.0+ installé et en cours d'exécution

### Installation et démarrage

#### 1. Configuration de la base de données

Créez la base de données MySQL :
```sql
CREATE DATABASE gestiongroupe;
```

Configurez les identifiants dans `springback/src/main/resources/application.properties` :
```properties
spring.datasource.username=root
spring.datasource.password=VOTRE_MOT_DE_PASSE
```

#### 2. Démarrage du Backend

```bash
cd springback
mvn clean install
mvn spring-boot:run
```

Le backend sera accessible sur `http://localhost:8080/`

#### 3. Démarrage du Frontend

Dans un nouveau terminal :
```bash
cd frontend
npm install --legacy-peer-deps
ng serve
```

Le frontend sera accessible sur `http://localhost:4200/`

## 📚 Documentation détaillée

Pour plus d'informations sur chaque partie du projet :

- **[Documentation Frontend](frontend/README.md)** : Architecture Angular, composants, services, etc.
- **[Documentation Backend](springback/README.md)** : API REST, endpoints, configuration, etc.

## 🔌 Communication Frontend-Backend

### Configuration

Le frontend communique avec le backend via HTTP. L'URL du backend est configurée dans :
- `frontend/src/environments/environment.ts` (développement)
- `frontend/src/environments/environment.prod.ts` (production)

Par défaut : `http://localhost:8080/`

### CORS

Le backend est configuré pour accepter les requêtes depuis `http://localhost:4200/` via l'annotation `@CrossOrigin` sur tous les contrôleurs.

## 📡 API Endpoints

### Étudiants
- `POST /ajoutE` - Créer un étudiant
- `GET /etudiants` - Lister tous les étudiants

### Sujets
- `POST /ajoutS` - Créer un sujet
- `GET /sujets` - Lister tous les sujets

### Groupes
- `POST /groupe` - Générer des groupes (body: `{"nb": "2"}`)
- `GET /groupes` - Lister toutes les vagues de groupes

## 🗂️ Structure des données

### Étudiant
```json
{
  "id": 1,
  "nom": "Dupont",
  "prenom": "Jean",
  "adresse": "jean.dupont@example.com"
}
```

### Sujet
```json
{
  "id": 1,
  "nom": "Application Web"
}
```

### Groupe
```json
{
  "sujet": {
    "id": 1,
    "nom": "Application Web"
  },
  "membreG": [
    {
      "id": 1,
      "nom": "Dupont",
      "prenom": "Jean",
      "adresse": "jean.dupont@example.com"
    }
  ]
}
```

## 🛠️ Développement

### Frontend

```bash
cd frontend
ng serve              # Serveur de développement
ng build              # Build de production
ng test               # Tests unitaires
```

### Backend

```bash
cd springback
mvn spring-boot:run   # Démarrer l'application
mvn test              # Exécuter les tests
mvn clean package     # Build JAR
```

## 🔧 Configuration

### Variables d'environnement

**Frontend** : Modifiez `src/environments/environment.ts` pour changer l'URL du backend.

**Backend** : Modifiez `src/main/resources/application.properties` pour :
- Changer le port (défaut: 8080)
- Configurer la base de données
- Modifier les paramètres JPA

## 🐛 Dépannage

### Le frontend ne peut pas se connecter au backend
- Vérifiez que le backend est démarré sur le port 8080
- Vérifiez la configuration CORS dans les contrôleurs Spring
- Vérifiez l'URL dans `environment.ts`

### Erreurs de connexion à la base de données
- Vérifiez que MySQL est démarré
- Vérifiez les identifiants dans `application.properties`
- Vérifiez que la base de données `gestiongroupe` existe

### Port déjà utilisé
- **Frontend** : Modifiez le port avec `ng serve --port 4201`
- **Backend** : Modifiez `server.port` dans `application.properties`

## 📝 Notes importantes

1. **Sécurité** : Cette application est conçue pour le développement. Pour la production :
   - Utilisez des variables d'environnement pour les secrets
   - Configurez HTTPS
   - Ajoutez l'authentification/autorisation
   - Sécurisez les endpoints API

2. **Base de données** : Le schéma est généré automatiquement par Hibernate (`ddl-auto=update`)

3. **CORS** : Actuellement configuré pour `localhost:4200`. Modifiez pour d'autres origines si nécessaire.

## 🤝 Contribution

Pour contribuer au projet :
1. Créez une branche pour votre fonctionnalité
2. Faites vos modifications
3. Testez les deux parties (frontend et backend)
4. Soumettez une pull request

## 📄 Licence

Ce projet est un projet éducatif.

## 👥 Auteurs

Projet développé dans le cadre du cours DevOps - DITI5.

---

Pour plus de détails, consultez les README spécifiques :
- [Frontend README](frontend/README.md)
- [Backend README](springback/README.md)

