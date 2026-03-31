# Alfonso Romero Fotografía

Portafolio web responsive construido con React (vía CDN) y CSS puro. Pensado como sitio de presentación para el trabajo fotográfico de autor de Alfonso Romero.

## Estructura

- `index.html`: aplicación React de una sola página (Home, Sobre mí, Servicios y Contacto).
- `styles.css`: estilos responsive inspirados en el moodboard y arquitectura de contenidos.

## Cómo verlo en local

1. Clona el repositorio:

```bash
git clone https://github.com/grasshopperitsolutions/alfonso-romero-fotografia.git
cd alfonso-romero-fotografia
```

2. Abre `index.html` directamente en tu navegador o sirve la carpeta con cualquier servidor estático.

Ejemplo usando Node:

```bash
npx serve .
```

## Publicación en GitHub Pages

1. Entra en **Settings → Pages** dentro del repositorio.
2. En **Source**, elige la rama `main` y la carpeta `/root` (si aparece como opción "/ (root)").
3. Guarda los cambios. GitHub generará la URL pública del sitio.

La URL tendrá la forma:

```text
https://grasshopperitsolutions.github.io/alfonso-romero-fotografia/
```

Una vez activo, el sitio cargará directamente la app React sin pasos adicionales de build.
