import * as express from 'express';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { UploadService } from '../services/uploadService';

const apiRoute: Route = {
  path: '/upload',
  handler(req: express.Request, res: express.Response): any {
    const service = new UploadService();
    const { fileData } = req['files'];

    service.upload(fileData);

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
