import * as express from 'express';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { GitHubService } from '../services/gitHubService';
import { GitHubRequest } from '../interfaces/GitHubRequest';

const apiRoute: Route = {
  path: '/upload',
  async handler(req: express.Request, res: express.Response) {
    const { fileData } = req['files'];
    const gitHubReq = {
      fileData: fileData,
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
      username: process.env.GITHUB_USERNAME,
      password: process.env.GITHUB_PASSWORD,
      options: {
        commiter: 'thomascsd808@gmail.com',
        author: process.env.GITHUB_OWNER,
        encode: false
      }
    } as GitHubRequest;
    const service = new GitHubService();

    const gitHubRes = await service.upload(gitHubReq);
    return res.json(gitHubRes);
  }
};

export default class ApiRouter implements Router {
  setRouter(router: express.Router) {
    router.get(apiRoute.path, apiRoute.handler);
  }
}
