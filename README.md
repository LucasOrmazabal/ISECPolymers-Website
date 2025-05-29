# ISEC Polymers Website

## Descripción General
Sitio web corporativo para ISEC Polymers, desarrollado con HTML, CSS y JavaScript. El sitio es completamente responsive y soporta múltiples idiomas (Español, Inglés y Portugués).

## Estructura del Proyecto
```
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS personalizados
├── script.js           # Funcionalidades JavaScript
├── robots.txt          # Configuración para motores de búsqueda
├── sitemap.xml         # Mapa del sitio para SEO
└── README.md           # Este archivo
```

## Características Principales

### 1. Diseño Responsive
- Adaptable a todos los dispositivos (móvil, tablet, desktop)
- Breakpoints optimizados para diferentes tamaños de pantalla
- Navegación adaptativa con menú hamburguesa en móvil

### 2. Multilenguaje
- Soporte para 3 idiomas: Español, Inglés y Portugués
- Cambio de idioma persistente (se guarda en localStorage)
- Traducciones completas para todo el contenido

### 3. Secciones Principales
- Hero con video de fondo
- Nosotros
- Productos
- KPI's
- Partners
- Soluciones
- Formulario de Contacto
- Footer con mapa y contacto

### 4. Integraciones
- EmailJS para el formulario de contacto
- Cloudinary para almacenamiento de imágenes y videos
- Google Maps para la ubicación
- Font Awesome para iconos

## Configuración SEO

### robots.txt
- Permite el rastreo de todo el sitio
- Bloquea directorios administrativos
- Referencia al sitemap.xml

### sitemap.xml
- Incluye todas las secciones principales
- Prioridades configuradas para cada sección
- Frecuencias de actualización definidas

### Meta Tags
- Descripción del sitio
- Palabras clave
- Open Graph para redes sociales
- Twitter Cards
- URL canónica

## Mantenimiento

### Actualización de Contenido
1. **Imágenes y Videos**
   - Almacenados en Cloudinary
   - Acceso necesario a la cuenta de Cloudinary para actualizaciones

2. **Textos y Traducciones**
   - Ubicados en el objeto `translations` en index.html
   - Estructura:
     ```javascript
     translations: {
         es: { ... },
         en: { ... },
         pt: { ... }
     }
     ```

3. **Formulario de Contacto**
   - Configurado con EmailJS
   - ID de servicio: 'Kh7HeSiMACQXWIbZU'
   - Verificar configuración en producción

### Deployment
1. **Requisitos**
   - Servidor web con soporte HTTPS
   - Dominio configurado
   - Acceso a Cloudinary

2. **Plataformas Recomendadas**
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - Firebase Hosting

3. **Pasos para Deployment**
   - Subir archivos al servidor
   - Configurar dominio
   - Verificar HTTPS
   - Probar formulario de contacto
   - Verificar cambio de idiomas
   - Comprobar responsividad

## Optimizaciones Implementadas

### Rendimiento
- Imágenes optimizadas en Cloudinary
- Lazy loading para imágenes
- Minificación de recursos

### SEO
- Meta tags optimizados
- Estructura semántica HTML
- Sitemap y robots.txt configurados

### Accesibilidad
- Alt text en imágenes
- Estructura HTML semántica
- Contraste de colores adecuado

## Soporte y Mantenimiento

### Actualizaciones Recomendadas
1. **Contenido**
   - Revisar y actualizar textos cada 3-6 meses
   - Actualizar imágenes según necesidad
   - Mantener información de contacto actualizada

2. **Técnico**
   - Verificar funcionamiento del formulario mensualmente
   - Revisar enlaces y recursos externos
   - Actualizar dependencias cuando sea necesario

### Contacto para Soporte
- Email: [Tu email de soporte]
- Teléfono: [Tu teléfono de soporte]

## Notas Importantes
1. Mantener actualizada la información de contacto
2. Verificar regularmente el funcionamiento del formulario
3. Actualizar el sitemap.xml cuando se realicen cambios significativos
4. Mantener las traducciones sincronizadas en los tres idiomas

## Licencia
Todos los derechos reservados © ISEC S.A. 