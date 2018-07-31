# tienda0
# Proyecto Fullstack con NODEJS + EXPRESS + MONGODB

[![VanillaJS](https://img.shields.io/badge/Vanilla-JS-orange.svg)](http://vanilla-js.com/)

![NodeJS](https://img.shields.io/badge/NodeJS-8.11.3-blue.svg)
![Express](https://img.shields.io/badge/Express-4.16.3-blue.svg)
![Mongoose](https://img.shields.io/badge/Mongoose-5.2.3-blue.svg)

## Introducción

Este es un proyecto realizado con fines educativos. 

Se utilizan los mínimos recursos (ya sean estos paquetes, librerías o frameworks). Tambien se intenta minimizar el número de archivos utilizados. Este proyecto **NO** necesita de frameworks como Angular, React o Vue para el FrondEnd, ya que hacemos uso de [VanillaJS](http://vanilla-js.com/) ( **~~MEAN~~**, **~~MERN~~**, **~~MEVN~~**  ). 

Existen 3 aplicaciones web dentro de proyecto, denominadas App0, App1 y App2. Cada una de ellas es una SPA (Single Page Application).

Los archivos son los siguientes:


```
├── config.js
├── index.js
├── models.js
├── package.for.react.json
├── package.json
├── package-lock.json
├── public
│   ├── app0.html
│   ├── app1.html
│   ├── app2.html
│   ├── css
│   │   ├── bootstrap.min.css
│   │   └── toastr.css
│   ├── favicon.png
│   ├── index.html
│   └── js
│       ├── bootstrap.min.js
│       ├── jquery-1.9.1.min.js
│       ├── jquery-migrate-1.2.1.min.js
│       └── toastr.js
├── README.md
└── routes.js
```


Para el BackEnd los archivos necesarios son:

- package.json
- index.js
- config.js
- models.js
- routes.js

Para el FrontEnd los archivos necesarios, según la App, son:

- App0
  - public/favicon.png
  - public/app0.html
  
- App1
  - public/favicon.png
  - public/app1.html
  
- App2
  - public/favicon.png
  - public/app2.html
  - public/css/*
  - public/js/*
  
La página `public/index.html` da acceso a las 3 applicaciones.


## Despliegue en local

Para poder ejecutar este proyecto en tu equipo local, sigue los siguientes pasos: 

1. Instala el servidor MongoDB. [Consulta la página oficial](https://docs.mongodb.com/manual/installation/).
2. Clona este repositorio en tu equipo:
  ```bash
  git  clone  https://github.com/jamj2000/tienda0.git
  cd   tienda0
  ```
3. Instala los módulos necesarios;
  ```bash
  npm  install
  ```
4. Inicia la aplicación
  ```bash
  npm  start
  ```
5. Abre en el navegador web la URL `http://localhost:3000`.
  
