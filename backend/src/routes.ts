import express from 'express';
import knex from './database/connection';
import PointsController from './controller/PointsController';
import ItemsController from './controller/ItemsController'

const routes = express.Router();
const pointsController = new PointsController();
const itemController = new ItemsController();

routes.get('/items', itemController.index);



routes.post('/points', pointsController.create);

routes.get('/points/:id', pointsController.show);

routes.get('/points', pointsController.index);



export default routes;