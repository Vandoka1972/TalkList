import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskContreller from './app/controllers/TaskContreller';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Todas rotas abaixo desse middleware precisa estar autenticado
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/tasks', TaskContreller.store);
routes.get('/tasks', TaskContreller.index);
routes.put('/tasks/:task_id', TaskContreller.update);
routes.delete('/tasks/:task_id', TaskContreller.delete);

export default routes;
