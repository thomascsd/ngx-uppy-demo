import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { FileModel } from '../interfaces/FileModel';
import { FileResponse } from '../interfaces/FileResponse';

export class DataBase {
  db: lowdb.LowdbSync<FileModel>;

  constructor() {
    const adapter = new FileSync<FileModel>('db.json');
    this.db = lowdb(adapter);

    this.db.defaults({ files: [] }).write();
  }

  getDatas(): FileResponse[] {
    const model = this.db.getState();
    return model.files;
  }

  write(res: FileResponse) {
    this.db
      .get('files')
      .push(res)
      .write();
  }
}
