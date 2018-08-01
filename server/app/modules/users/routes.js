import { Router } from 'express';

import { requireJwtAuth } from '../../utils/requireJwtAuth';
import * as UserController from './controller';

const routes = new Router();

routes.post('/user/register', UserController.userRegister);
routes.post('/user/login', UserController.userLogin);
routes.patch('/user/update/:userId', requireJwtAuth, UserController.userUpdate);
routes.get('/user/:userId', UserController.getUserDetails);
// routes.patch('/users/profileImage/:userId', requireJwtAuth, UserController.profileImageUpdate);

export default routes;
