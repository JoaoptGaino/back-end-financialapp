
import express from 'express';
import IncomeController from './controllers/IncomeController';

const routes = express.Router();

const incomeController = new IncomeController();

routes.get('/', (req, res) => {
    res.json({
        message: "Hello from routes"
    });
});
routes.get('/incomes',incomeController.index);
routes.post('/incomes',incomeController.create);
routes.delete('/incomes/:id',incomeController.delete);

export default routes;