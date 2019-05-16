import * as express from 'express';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { FileService } from '../services/fileService';

const getFilesRoute: Route = {
  path: '/file',
  handler(req: express.Request, res: express.Response) {
    const service = new FileService();

    const fileReses = service.getFiles();
    return res.json(fileReses);
  }
};

const uploadFileRoute: Route = {
  path: '/file',
  async handler(req: express.Request, res: express.Response) {
    const { fileData } = req['files'];
    const service = new FileService();

    const fileRes = await service.upload(fileData);
    return res.json(fileRes);
  }
};

export default class ApiRouter implements Router {
  setRouter(router: express.Router) {
    router.get(getFilesRoute.path, getFilesRoute.handler);
    router.post(uploadFileRoute.path, uploadFileRoute.handler);
  }
}
