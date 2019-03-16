import * as express from 'express';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';

const apiRoute: Route = {
  path: '/api',
  handler(req: express.Request, res: express.Response): any {
    return res.json({
      message: 'hello'
    });
  }
};

export default class ApiRouter implements Router {
  setRouter(router: express.Router) {
    router.get(apiRoute.path, apiRoute.handler);
  }

}
