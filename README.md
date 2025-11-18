# Microfrontends Project (MFP)

Proyecto de arquitectura de microfrontends utilizando Module Federation de Webpack 5.

## 📋 Descripción

Este proyecto implementa una arquitectura de microfrontends que permite desarrollar, desplegar y escalar aplicaciones web de forma independiente. Cada microfrontend puede ser desarrollado por equipos diferentes y desplegado de manera autónoma.

## 🏗️ Arquitectura

El proyecto está organizado en un monorepo con los siguientes microfrontends:

### 📦 Paquetes

- **container**: Aplicación principal que orquesta y carga los microfrontends
  - Framework: React 17
  - Puerto: 8080
  
- **marketing**: Microfrontend para páginas de marketing (landing, pricing)
  - Framework: React 17
  - Puerto: 8081
  - Componentes: Landing, Pricing
  
- **auth**: Microfrontend para autenticación (login, registro)
  - Framework: React 17
  - Puerto: 8082
  
- **dashboard**: Microfrontend para el panel de control
  - Framework: Vue 3
  - Puerto: 8083
  - Librerías: PrimeVue, Chart.js

## 🛠️ Tecnologías

### Frontend
- **React** 17.0.1 (container, marketing, auth)
- **Vue** 3.2.31 (dashboard)
- **Material-UI** 4.11.0
- **React Router** 5.2.0
- **PrimeVue** 3.12.0
- **Chart.js** 3.7.1

### Build Tools
- **Webpack** 5.x
- **Webpack Module Federation** (para integración de microfrontends)
- **Babel** 7.x
- **webpack-dev-server** 4.x / 5.x

## 🚀 Instalación

### Prerequisitos
- Node.js >= 14.x
- npm >= 6.x

### Instalación de dependencias

Cada paquete debe instalarse de forma independiente:

```bash
# Instalar dependencias del container
cd packages/container
npm install

# Instalar dependencias de marketing
cd ../marketing
npm install

# Instalar dependencias de auth
cd ../auth
npm install

# Instalar dependencias de dashboard
cd ../dashboard
npm install
```

## 💻 Desarrollo

### Iniciar todos los microfrontends

Cada microfrontend debe ejecutarse en un terminal separado:

```bash
# Terminal 1 - Container (puerto 8080)
cd packages/container
npm run start

# Terminal 2 - Marketing (puerto 8081)
cd packages/marketing
npm run start

# Terminal 3 - Auth (puerto 8082)
cd packages/auth
npm run start

# Terminal 4 - Dashboard (puerto 8083)
cd packages/dashboard
npm run start
```

### URLs de desarrollo

- Container: http://localhost:8080
- Marketing: http://localhost:8081
- Auth: http://localhost:8082
- Dashboard: http://localhost:8083

## 📁 Estructura del Proyecto

```
mfp/
├── packages/
│   ├── container/
│   │   ├── config/
│   │   │   ├── webpack.common.js
│   │   │   ├── webpack.dev.js
│   │   │   └── webpack.prod.js
│   │   ├── public/
│   │   ├── src/
│   │   └── package.json
│   │
│   ├── marketing/
│   │   ├── config/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Landing.js
│   │   │   │   └── Pricing.js
│   │   │   ├── App.js
│   │   │   ├── bootstrap.js
│   │   │   └── index.js
│   │   └── package.json
│   │
│   ├── auth/
│   │   ├── config/
│   │   ├── public/
│   │   ├── src/
│   │   └── package.json
│   │
│   └── dashboard/
│       ├── config/
│       ├── public/
│       ├── src/
│       └── package.json
│
├── .gitignore
└── README.md
```

## 🔧 Configuración de Webpack

Cada microfrontend utiliza Webpack Module Federation para exponer y consumir componentes:

- **ModuleFederationPlugin**: Permite compartir código entre aplicaciones
- **HtmlWebpackPlugin**: Genera archivos HTML automáticamente
- **webpack-dev-server**: Servidor de desarrollo con hot reload

## 🌐 Module Federation

El proyecto utiliza Module Federation de Webpack 5 para:
- Cargar microfrontends de forma dinámica
- Compartir dependencias entre aplicaciones
- Evitar duplicación de código
- Permitir despliegues independientes

## 📝 Scripts Disponibles

### Container, Marketing, Dashboard
- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Genera build de producción

### Auth
- `npm test`: Ejecuta tests (por configurar)

## 🔍 Troubleshooting

### Error de webpack-dev-server
Si encuentras errores con webpack-dev-server, asegúrate de tener versiones compatibles:
- webpack-cli: ^5.0.1
- html-webpack-plugin: ^5.5.0
- webpack-dev-server: ^4.15.1 (recomendado para webpack 5)

### Problemas de CORS
Si hay problemas de CORS entre microfrontends, verifica la configuración de `devServer` en webpack.

## 🚀 Despliegue

Cada microfrontend puede desplegarse independientemente en:
- AWS S3 + CloudFront
- Vercel
- Netlify
- Servidor propio

## 📄 Licencia

Este proyecto es parte de un curso educativo sobre microfrontends.

## 👥 Contribuir

Este es un proyecto educativo. Las contribuciones son bienvenidas para mejorar la implementación.

---

**Nota**: Este proyecto está en desarrollo activo y es parte de un curso de microfrontends.
