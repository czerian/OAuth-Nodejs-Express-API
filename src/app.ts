import express from "express"
import config from "config"
import {DBConnect} from './utilities'
import routes from "./routes"

const port = config.get<number>("PORT")
const app = express()

app.use(express.json())

app.listen(port, async () => {
  console.log(`Started running Application: => http://localhost:${port}`)

  await DBConnect()

  routes(app)
});