import * as express from 'express';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { GitHubService } from '../services/gitHubService';

const apiRoute: Route = {
  path: '/upload',
  async handler(req: express.Request, res: express.Response) {
    const service = new GitHubService();
    const { fileData } = req['files'];

    const gitHubRes = await service.upload(fileData);
    return res.json(gitHubRes);
  }
};

export default class ApiRouter implements Router {
  setRouter(router: express.Router) {
    router.get(apiRoute.path, apiRoute.handler);
  }
}
