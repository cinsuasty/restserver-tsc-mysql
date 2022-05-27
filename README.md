
# Rest Server TSC y Mysql
Este proyecto tiene la configruación basica para iniciar un proyecto de Node.js usando Express, TypeScript y Mysql

## Instalación

Iniciar npm

```bash
  npm i
```

Confgurar parametros de conexxión a mysql ruta

```bash
  db/connection.ts

  const db = new Sequelize('base_de_datos', 'usuario', 'contraseña', {
    host: 'host',
    dialect: 'mysql',
    logging: false,
});
```

Compilar TypeScript

```bash
  tsc
```
    
Ejecutar proyecto

```bash
  node dist/app.js
```
    
    