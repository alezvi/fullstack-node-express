### INSTALAR EXPRESS GENERATOR

```npm install express-generator -g```

### PEDIRLE AL GENERATOR QUE GENERE UN PROYECTO

```express --view=ejs nombre-de-la-carpeta```

### ENTRAR LA CARPETA

```cd nombre-de-la-carpeta```

### INSTALAR DEPENDENCIAS

```npm install```

### CAMBIAR EL PACKAGE JSON PARA USAR NODEMON

Si no tengo nodemon instalado

```npm i nodemon -g```

Si ya tiene nodemon en el archivo package.json modificar la linea que dice 
"scripts" : {
    "start": "node ./bin/www"
}

Reemplazarlo por
"scripts" : {
    "start" : "nodemon ./bin/www"
}

INSTALAR EJS
npm i ejs

MOVER LOS .html A /views
CAMBIAR LA EXTENSION POR .ejs

INICIAR EL PROYECO 
npm start
