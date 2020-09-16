
import express from 'express';
import CategoryController from './controllers/CategoryController';
import IncomeController from './controllers/IncomeController';

const routes = express.Router();

const incomeController = new IncomeController();
const categoryController = new CategoryController();
//INCOME
routes.get('/incomes',incomeController.index);
routes.post('/incomes',incomeController.create);
routes.put('/incomes/:id',incomeController.update);
routes.delete('/incomes/:id',incomeController.delete);


//CATEGORY
routes.get('/category',categoryController.index);
routes.post('/category',categoryController.create);
routes.put('/category/:id',categoryController.update);
routes.delete('/category/:id',categoryController.delete);

export default routes;