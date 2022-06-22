import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 5000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        wtimeoutMS:25000
    }).catch(err => {
        console.error(err.stack)
        process.exit(1)
    }).then(async client => {
        app.listen(port,()=>{
            console.log(`listenting on port ${port}`);
        })
    })
