import { Request, Response } from 'express';

import db from '../database/connection';

export default class IncomeController {
    async index(req: Request, res: Response) {
        const incomes = await db('income').select('*');
        return res.json(incomes);
    }
    async create(req: Request, res: Response) {
        const {
            name,
            value
        } = req.body;
        const trx = await db.transaction();
        try {
            await trx('income').insert(
                {
                    name,
                    value
                }
            );
            await trx.commit();
            return res.status(201).send();
        } catch (err) {
            await trx.rollback();
            return res.status(400).json({
                error: 'Error while creating product'
            })
            console.log(err)
        }
    }



    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const deleteIncome = await db('income')
            .where('id', id)
            .delete();

        if (!deleteIncome) {
            return res.status(400).json({
                message: "Couldn't find income with this id"
            });
        }
        return res.json({
            message: "Income deleted successfully"
        });
    }
}