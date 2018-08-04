import { Router } from 'express';

import { requireJwtAuth } from '../../utils/requireJwtAuth';
import * as UserController from './controller';

const routes = new Router();

routes.post('/user/register', UserController.userRegister);
routes.post('/user/login', UserController.userLogin);
routes.patch('/user/update/:userId', requireJwtAuth, UserController.userUpdate);
routes.get('/user/id/:userId', UserController.getUserDetails);
routes.get('/user/userName/:userName', UserController.getUserDetails);
routes.patch('/user/profileImage/:userId', requireJwtAuth, UserController.profileImageUpdate);

export default routes;
