# 🍔 Food Delivery Platform

A full-stack food delivery platform built using **React** on the frontend and **Spring Boot** on the backend. This application allows users to browse restaurants, view food items, place orders, and track their deliveries in real time.

---

## 🧰 Tech Stack

### 🖥️ Frontend

- TypeScript
- React
- React Query
- Tailwind CSS
- Redux Toolkit

### ⚙️ Backend

- Java 17
- Spring Boot
- MongoDB – for user and order data
- PostgreSQL – for structured data like restaurants, menu items
- Kafka *(optional)* – for asynchronous processing
- Redis *(optional)* – for caching/session management

### 🔐 Authentication

- JWT (JSON Web Token)
- OAuth2 (Google, GitHub)

### ☁️ Deployment

- AWS / Azure (EC2, S3, RDS, etc.) *(optional)*
- Docker
- Kubernetes
- Nginx
- Terraform
- Git
- Docker Compose – for local development
- Postman – for API testing

---

## 🧪 Optional Tools and Libraries

- GraphQL + Apollo Client
- Swagger (API docs)
- ESLint + Prettier
- Jest + Cypress (Testing)
- SonarQube (Code quality)
- Sentry (Error tracking)
- RabbitMQ (Messaging)
- Stripe (Payments)
- Twilio (SMS)
- Google Maps API (Location)
- Cloudinary (Images)
- Webpack + Babel
- Axios, React Router
- GitHub Actions (CI/CD)
- Vercel (Frontend Hosting)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js v18+
- Java 17+
- PostgreSQL
- MongoDB
- Docker
- Maven

### 🖥️ Frontend Setup

```bash
cd UI
npm install
npm run dev




# React + TypeScript + Vite
 ![C](https://img.shields.io/badge/-C-000000?style=flat&logo=c)  
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
