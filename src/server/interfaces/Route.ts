import * as express from 'express';

export interface Route {
  path: string;
  handler: (req: express.Request, res: express.Response) => any;
}
