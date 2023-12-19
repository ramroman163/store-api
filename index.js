import express from "express";
import cors from "cors"
import { articleRouter } from "./routes/articles.js";

const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

app.use('/articles', articleRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`)
})