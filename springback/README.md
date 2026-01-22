# Backend - Gestion de Groupes

API REST Spring Boot pour la gestion de groupes d'étudiants et de sujets. Cette application backend fournit les endpoints nécessaires pour gérer les étudiants, les sujets de projet et la génération automatique de groupes.

## Technologies

- **Spring Boot**: 3.0.1
- **Java**: 17
- **Spring Data JPA**: Pour la persistance des données
- **MySQL**: Base de données relationnelle
- **Maven**: Gestionnaire de dépendances

## Prérequis

- Java 17 ou supérieur
- Maven 3.6+ ou supérieur
- MySQL 8.0+ installé et en cours d'exécution
- Base de données MySQL créée (nom: `gestiongroupe`)

## Configuration

### Base de données

1. Créer une base de données MySQL nommée `gestiongroupe` :
```sql
CREATE DATABASE gestiongroupe;
```

2. Configurer les paramètres de connexion dans `src/main/resources/application.properties` :
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/gestiongroupe?useSSL=false&allowMultiQueries=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=VOTRE_MOT_DE_PASSE
```

**Note**: Modifiez le fichier `application.properties` avec vos propres identifiants MySQL.

### Port du serveur

Le serveur démarre par défaut sur le port **8080**. Vous pouvez le modifier dans `application.properties` :
```properties
server.port=8080
```

## Installation et démarrage

### Avec Maven

1. Installer les dépendances :
```bash
mvn clean install
```

2. Démarrer l'application :
```bash
mvn spring-boot:run
```

### Avec Maven Wrapper (recommandé)

1. Sur Windows :
```bash
.\mvnw.cmd spring-boot:run
```

2. Sur Linux/Mac :
```bash
./mvnw spring-boot:run
```

### Exécuter le JAR

Après avoir construit le projet :
```bash
mvn clean package
java -jar target/springback-0.0.1-SNAPSHOT.jar
```

L'application sera accessible sur `http://localhost:8080/`

## Structure du projet

```
src/main/java/com/projet/springback/
├── controller/          # Contrôleurs REST
│   ├── EtudiantController.java
│   ├── GroupeController.java
│   └── SujetController.java
├── model/               # Entités JPA et DTOs
│   ├── Etudiant.java
│   ├── Groupe.java
│   ├── GroupeRequest.java
│   └── Sujet.java
├── repository/          # Interfaces de repository JPA
│   ├── RepertoireGroupe.java
│   ├── RepertoireSujet.java
│   └── RepertoirEtudiant.java
├── service/             # Services métier
│   ├── EtudiantService.java
│   ├── EtudiantServiceImpl.java
│   ├── GroupeService.java
│   ├── GroupeServiceImpl.java
│   ├── SujetService.java
│   └── SujetServiceImpl.java
└── SpringbackApplication.java
```

## API Endpoints

### Étudiants

#### Créer un étudiant
- **POST** `/ajoutE`
- **Body** (JSON):
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "adresse": "jean.dupont@example.com"
}
```
- **Response**: Objet `Etudiant` créé

#### Lister tous les étudiants
- **GET** `/etudiants`
- **Response**: Liste d'objets `Etudiant`

### Sujets

#### Créer un sujet
- **POST** `/ajoutS`
- **Body** (JSON):
```json
{
  "nom": "Application Web"
}
```
- **Response**: Objet `Sujet` créé

#### Lister tous les sujets
- **GET** `/sujets`
- **Response**: Liste d'objets `Sujet`

### Groupes

#### Générer des groupes
- **POST** `/groupe`
- **Body** (JSON):
```json
{
  "nb": "2"
}
```
- **Response**: Liste de `Groupe` générés
- **Description**: Génère automatiquement le nombre de groupes spécifié en assignant des étudiants aux sujets disponibles

#### Lister toutes les vagues de groupes
- **GET** `/groupes`
- **Response**: Liste de listes de `Groupe` (chaque liste représente une vague de groupes)

## CORS

L'application est configurée pour accepter les requêtes depuis `http://localhost:4200/` (frontend Angular). Les contrôleurs utilisent l'annotation `@CrossOrigin` pour permettre les requêtes cross-origin.

## Base de données

### Tables générées automatiquement

Spring Boot génère automatiquement les tables suivantes via JPA/Hibernate :
- `etudiant_table` : Stocke les étudiants
- `sujet_table` : Stocke les sujets
- `groupe_table` : Stocke les groupes créés

La configuration `spring.jpa.hibernate.ddl-auto=update` permet de mettre à jour automatiquement le schéma de la base de données.

## Tests

Pour exécuter les tests :
```bash
mvn test
```

## Développement

### Logs SQL

Les requêtes SQL sont affichées dans la console grâce à la propriété :
```properties
spring.jpa.show-sql=true
```

### Mode développement

Pour activer le mode développement avec rechargement automatique, utilisez Spring Boot DevTools (à ajouter dans `pom.xml` si nécessaire).

## Notes importantes

1. **Sécurité**: Les mots de passe de la base de données sont en clair dans `application.properties`. Pour la production, utilisez des variables d'environnement ou un gestionnaire de secrets.

2. **Base de données**: Assurez-vous que MySQL est démarré avant de lancer l'application.

3. **Port**: Si le port 8080 est déjà utilisé, modifiez `server.port` dans `application.properties`.

4. **CORS**: Pour permettre l'accès depuis d'autres origines, modifiez `@CrossOrigin(origins = "http://localhost:4200/")` dans les contrôleurs.

## Dépannage

### Erreur de connexion à la base de données
- Vérifiez que MySQL est démarré
- Vérifiez les identifiants dans `application.properties`
- Vérifiez que la base de données `gestiongroupe` existe

### Port déjà utilisé
- Changez le port dans `application.properties`
- Ou arrêtez l'application utilisant le port 8080

### Erreurs de compilation
- Vérifiez que Java 17 est installé : `java -version`
- Vérifiez que Maven est installé : `mvn -version`
- Exécutez `mvn clean install` pour nettoyer et reconstruire

## Aide supplémentaire

Pour plus d'informations sur Spring Boot, consultez la [documentation officielle](https://spring.io/projects/spring-boot).

