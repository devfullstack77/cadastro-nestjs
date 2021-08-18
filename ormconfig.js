module.exports = {
    "name": "default",
    "type": process.env.TYPEORM_CONNECTION || "postgres",
    "host": process.env.TYPEORM_HOST || "localhost",
    "port": parseInt(process.env.TYPEORM_PORT) || 5432,
    "username": process.env.TYPEORM_USERNAME || "postgres",
    "password": process.env.TYPEORM_PASSWORD || "admin",
    "database": process.env.TYPEORM_DATABASE || "cadastro",
    "autoLoadEntities": true,
    "entities": [
        "dist/**/*.entity{.ts,.js}"
    ],
    "synchronize": false,
}