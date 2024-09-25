import express from 'express';
import { myDataSource } from './utils/app-data-source';

const app= express();

async function intializeDataSource() {
    try {
        await myDataSource.initialize();
        console.log("database connected successfully");
    }
    catch (err) {
        console.log("Error initializing datasource: " + err);
        process.exit(1);
    }
}
const port=3000;

intializeDataSource().then((dataSource) => {
    app.listen(port,() => {
console.log("listening on port " + port)
    })
})