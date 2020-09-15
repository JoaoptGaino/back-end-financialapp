
import express from 'express';
import IncomeController from './controllers/IncomeController';

const routes = express.Router();

const incomeController = new IncomeController();

routes.get('/', (req, res) => {
    res.json({
        message: "Hello from routes"
    });
});

//INCOME
routes.get('/incomes',incomeController.index);
routes.post('/incomes',incomeController.create);
routes.put('/incomes/:id',incomeController.update);
routes.delete('/incomes/:id',incomeController.delete);


//EXPENSES

export default routes;