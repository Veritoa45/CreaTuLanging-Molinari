![Logo](/src/assets/Logo.png)

# Nevela – E-commerce

Este repositorio contiene el código fuente de Nevela, un e-commerce de videojuegos desarrollado como proyecto personal para dar un cierre al curso de React.

## 🚀 Tecnologías utilizadas

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,sass,react,firebase" />
  </a>
</p>

## 📖 Librerías utilizadas

- [Iconify](https://iconify.design) – Librería de íconos modernos.

- [React Router Dom](https://reactrouter.com) - Utilizado para la navegación por rutas

- [React Hook Form](https://react-hook-form.com) - Utilizado para las validaciones

- [React Hot Toast](https://react-hot-toast.com) - Utilizado para las alertas

## 📦 Instalación y ejecución local

1. Clonar el repositorio

```bash
    git clone https://github.com/Veritoa45/Nevela.git
    cd nevela
```

2. Instalar dependencias: Asegúrate de tener Node.js y npm instalados.

```bash
    npm install
```

3. Configurar Firebase:
   Debes crear un proyecto en Firebase y obtener tu configuración desde el panel de Firebase.

Luego, creá un archivo .env en la raíz del proyecto y agregá tus credenciales:

```bash
    VITE__FIREBASE_API_KEY=tu_api_key
    VITE__FIREBASE_AUTH_DOMAIN=tu_auth_domain
    VITE__FIREBASE_PROJECT_ID=tu_project_id
    VITE__FIREBASE_STORAGE_BUCKET=tu_storage_bucket
    VITE__FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
    VITE__FIREBASE_APP_ID=tu_app_id
    VITE__FIREBASE_MEASUREMENT_ID=tu_measurement_id
```

⚠️ Asegurate de no subir este archivo al repositorio (.gitignore debe incluir .env).

4. Ejecutar la app en desarrollo

```bash
    npm run dev
```

Esto abrirá la app en tu navegador en http://localhost:5173 (o el puerto que indique Vite).

## 🛒 Funcionalidades principales

- Visualización de productos por categoría

- Detalles de productos

- Checkout y confirmación de compra

## 📝 Notas adicionales

- Se recomienda usar extensiones como React Developer Tools para facilitar el desarrollo.

- El diseño está realizado con SASS para una mejor organización de estilos.

- Todos los íconos están provistos por Iconify, con soporte para múltiples colecciones.

## 📂 Estructura del proyecto

```
nevela/
├── src/
│   ├── assets/           → Logos
│   ├── components/       → Componentes reutilizables
│   ├── context/          → Contexto global
│   ├── sass/             → Archivos .scss
│   ├── service/          → Conexión a Firebase
│   ├── App.jsx           → Componente principal con rutas y proveedores globales
│   ├── index.scss        → Estilos globales
│   └── main.jsx          → Punto de entrada
├── public/               → Imágenes
├── .env                  → Variables de entorno (no se sube al repo)
├── vite.config.js
└── package.json
```

## 💻 Version Deploy

Pueden visitar el proyecto en el siguiente link: [Nevela](https://nevela-yuam.vercel.app)

## 📬 Contacto

<p align="center">
  <img src="public/CV.png" alt="Foto" width="80" />
  <h3 align="center">Verónica Molinari</h3>
  <p align="center">
  <a href="https://github.com/Veritoa45">
    <img src="https://skillicons.dev/icons?i=github" hspace="20"/>
  </a>
  <a href="https://www.linkedin.com/in/veronica-molinari/">
    <img src="https://skillicons.dev/icons?i=linkedin" hspace="20"/>
  </a>
  </p>
</p>
