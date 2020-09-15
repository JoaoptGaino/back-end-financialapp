import { Request, Response } from 'express';
import db from '../database/connection';

export default class CategoryController {
    async index(req: Request, res: Response) {
        const categories = await db('category')
            .select('*');

        return res.json(categories);
    }

    async create(req: Request, res: Response) {
        const {
            description,
            type
        } = req.body;

        const trx = await db.transaction();

        try {
            await trx('category').insert(
                {
                    description,
                    type
                }
            );
            await trx.commit();
            return res.status(201).send();
        } catch (err) {
            await trx.rollback();
            return res.status(400).json({
                error: 'Error while creating category'
            });
        }
    }
    async update(req: Request, res: Response) {
        const { id } = req.params;

        const {
            description,
            type
        } = req.body;

        const updateCategory = await db('category')
        .where('id',id)
        .update({description,type});

        return res.json({
            message:"Update",
            updateCategory
        });
    }
    async delete(req:Request,res:Response){
        const {id} = req.params;

        const deleteCategory = await db('category')
        .where('id',id)
        .delete();

        if(!deleteCategory){
            return res.status(400).json({
                message:"Couldn't find category to delete"
            });
        }
        return res.json({
            message:"Category deleted"
        });
    }
}