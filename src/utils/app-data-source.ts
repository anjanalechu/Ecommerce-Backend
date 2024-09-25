import { DataSource } from "typeorm"


export const myDataSource = new DataSource({
    type: "mysql",
    host: "mysql-350a5e9b-anjanalachu2000-0391.l.aivencloud.com",
    port:17531,
    username: "avnadmin",
    password: "AVNS_aBBmxnS89xiJl7AYSwF",
    database: "defaultdb",
    entities: [__dirname + "/entity/*.ts"],
    logging: false,
    synchronize: true,
    
})