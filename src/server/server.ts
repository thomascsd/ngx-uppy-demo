import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import * as logger from 'morgan';
import * as path from 'path';
import ApiRouter from './routes/api-router';

export default class Server {
  public app: express.Application;
  private distFolder = path.join(__dirname, '..', 'dist');

  constructor() {
    this.app = express();
    this.config();
    this.route();
    this.api();
  }

  public config() {
    this.app.set('view engine', 'html');
    this.app.set('views', 'src');
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(methodOverride());

    // Server static files from /dist
    this.app.get('*.*', express.static(this.distFolder));
  }

  public route() {
    this.app.get('*', (req, res, next) => {
      if (req.url.indexOf('/api') !== -1) {
        next();
      } else {
        res.sendFile(path.join(this.distFolder, 'index.html'));
      }
    });
  }

  public api() {
    const router: express.Router = express.Router();
    const apiRouter: ApiRouter = new ApiRouter();

    apiRouter.setRouter(router);
    this.app.use('/api', router);
  }

  public run(port: number) {
    this.app.listen(port, () => {
      console.log(`App run in Port: ${port}`);
    });
  }
}
