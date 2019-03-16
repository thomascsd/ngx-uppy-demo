import * as express from 'express';

export interface Router {
  setRouter: (router: express.Router) => void;
}
