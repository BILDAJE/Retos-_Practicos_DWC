# Banco de Retos Prácticos - TypeScript

## Descripción

Este proyecto reúne cinco retos prácticos.

El objetivo es poner en práctica los conceptos fundamentales de TypeScript y comprender algunas de las bases utilizadas posteriormente en Angular.

## Tecnologías utilizadas

- TypeScript
- JavaScript
- HTML5
- CSS3
- Visual Studio Code
- Node.js

## Contenido del proyecto

El proyecto está compuesto por cinco ejercicios:

| 1 | El Contrato de la API | Interfaces, tipado y propiedades opcionales. 

| 2 | Inmutabilidad Tipada con Arrays de Objetos | Arrays tipados, funciones y `map()`. 

| 3 | La Clase Componente y la Encapsulación | Clases, `private`, `public` y constructores. 

| 4 | Control de Errores con Tipado Restringido | Interfaces, tipos literales y propiedades opcionales. 

| 5 | Clases Heredadas y el uso de `super()` | Herencia, `extends` y `super()`. |

## Estructura del proyecto

```text
Banco de Retos Prácticos - TypeScript/
│
├── src/
│   └── app.ts
│
├── dist/
│   └── app.js
│
├── index.html
├── styles.css
├── tsconfig.json
└── README.md
```

## Instalación y ejecución

**1. Requisitos previos**

- Tener Node.js instalado.
- Tener el compilador de TypeScript disponible mediante el comando `tsc`.

**2. Compilar el proyecto**

Desde la carpeta principal, ejecutar:

```bash
tsc --watch
```

Este comando compila el archivo TypeScript y genera el JavaScript correspondiente dentro de la carpeta `dist`.

**3. Ejecutar los ejercicios**

Para ejecutar los ejercicios mediante Node.js:

```bash
node dist/app.js
```

También se puede abrir el archivo `index.html` con Live Server para visualizar la página del proyecto y consultar los resultados en la consola del navegador.

## Autor

Ildefonso Galiano

Proyecto realizado como práctica del módulo de Desarrollo Web en Entorno Cliente (DWEC).