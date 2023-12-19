import { Router } from "express";
import { articleController } from "../controllers/articles.js";

export const articleRouter = Router()

articleRouter.get('/', articleController.getAll)
articleRouter.get('/:id', articleController.getById)
articleRouter.get('/categories/:category', articleController.getByCategory)
articleRouter.post('/', articleController.create)
articleRouter.delete('/:id', articleController.delete)
articleRouter.patch('/:id', articleController.update)