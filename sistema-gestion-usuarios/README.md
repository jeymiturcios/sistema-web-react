# 👥 Sistema de Gestión de Usuarios

Un sistema completo de gestión de usuarios desarrollado con React y Vite, diseñado para demostrar habilidades en desarrollo frontend moderno.

## ✨ Características

### 🎯 Funcionalidades Principales

- **CRUD Completo**: Crear, Leer, Actualizar y Eliminar usuarios
- **Persistencia de Datos**: Los datos se guardan automáticamente en localStorage
- **Búsqueda en Tiempo Real**: Busca usuarios por nombre, email o teléfono
- **Filtrado Avanzado**: Filtra usuarios por rol (Administrador, Moderador, Usuario)
- **Ordenamiento**: Ordena la lista por nombre, fecha de creación o rol
- **Confirmación de Eliminación**: Sistema de doble confirmación para evitar eliminaciones accidentales
- **Dashboard de Estadísticas**: Visualiza el total de usuarios y su distribución por rol

### 🎨 Diseño y UX

- **Interfaz Moderna**: Diseño limpio y profesional con gradientes y sombras
- **Responsive Design**: Completamente adaptable a dispositivos móviles, tablets y escritorio
- **Animaciones Suaves**: Transiciones y efectos hover para mejor experiencia
- **Tarjetas de Usuario**: Visualización en formato de tarjetas con avatares personalizados
- **Badges de Rol**: Identificación visual de roles con colores distintivos

### 📋 Campos de Usuario

- **Nombre** (obligatorio)
- **Correo Electrónico** (obligatorio)
- **Teléfono** (opcional)
- **Rol**: Administrador, Moderador o Usuario
- **Fecha de Creación**: Se registra automáticamente
- **Fecha de Actualización**: Se actualiza al editar

## 🚀 Tecnologías Utilizadas

- **React 19**: Biblioteca de JavaScript para construir interfaces de usuario
- **Vite**: Herramienta de construcción rápida y moderna
- **CSS3**: Estilos modernos con Grid, Flexbox y animaciones
- **LocalStorage API**: Persistencia de datos en el navegador

## 📦 Instalación

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
sistema-gestion-usuarios/
├── src/
│   ├── components/
│   │   ├── UserForm.jsx      # Formulario para agregar/editar usuarios
│   │   └── UserList.jsx      # Lista de usuarios con filtros y búsqueda
│   ├── pages/
│   │   └── Home.jsx          # Página principal con dashboard
│   ├── App.jsx               # Componente raíz
│   ├── App.css               # Estilos principales
│   └── index.css             # Estilos globales
├── public/                   # Archivos estáticos
└── package.json              # Dependencias del proyecto
```

## 💡 Características Destacadas para Portafolio

### 1. **Gestión de Estado**
- Uso de React Hooks (`useState`, `useEffect`)
- Manejo eficiente del estado local
- Sincronización con localStorage

### 2. **Componentes Reutilizables**
- Arquitectura modular y escalable
- Separación de responsabilidades
- Componentes funcionales con props

### 3. **Experiencia de Usuario**
- Validación de formularios
- Feedback visual inmediato
- Confirmaciones para acciones destructivas
- Estados vacíos informativos

### 4. **Rendimiento**
- Renderizado eficiente
- Búsqueda y filtrado optimizados
- Sin dependencias innecesarias

### 5. **Código Limpio**
- Código bien estructurado y comentado
- Nombres descriptivos
- Buenas prácticas de React

## 🎯 Uso

### Agregar un Usuario
1. Completa el formulario con nombre y email (obligatorios)
2. Opcionalmente agrega teléfono y selecciona un rol
3. Haz clic en "Agregar Usuario"

### Editar un Usuario
1. Haz clic en el botón "Editar" en la tarjeta del usuario
2. Modifica los campos deseados
3. Haz clic en "Actualizar" o "Cancelar"

### Eliminar un Usuario
1. Haz clic en "Eliminar" en la tarjeta del usuario
2. Confirma la eliminación haciendo clic nuevamente en "Confirmar" (aparece en 3 segundos)

### Buscar y Filtrar
- Usa la barra de búsqueda para encontrar usuarios por nombre, email o teléfono
- Selecciona un rol en el filtro para ver solo usuarios de ese tipo
- Ordena la lista usando el selector de ordenamiento

## 📱 Responsive Design

El sistema está completamente optimizado para:
- 📱 **Móviles**: Diseño de una columna, navegación simplificada
- 📱 **Tablets**: Diseño adaptativo con grid flexible
- 💻 **Escritorio**: Vista completa con sidebar y grid de tarjetas

## 🔮 Posibles Mejoras Futuras

- [ ] Exportar usuarios a CSV/JSON
- [ ] Importar usuarios desde archivo
- [ ] Paginación para grandes volúmenes de datos
- [ ] Modo oscuro/claro
- [ ] Validación de email más robusta
- [ ] Búsqueda avanzada con múltiples criterios
- [ ] Historial de cambios
- [ ] Autenticación y autorización
- [ ] Integración con API backend

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso en portafolios personales.

---

**Desarrollado con ❤️ usando React y Vite**
