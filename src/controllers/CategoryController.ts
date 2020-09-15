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
}