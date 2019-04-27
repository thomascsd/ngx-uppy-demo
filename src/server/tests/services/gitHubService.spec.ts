import { assert } from 'chai';
import 'mocha';
import * as fs from 'fs';
import { FileService } from '../../services/fileService';
import { FileResponse } from '../../interfaces/FileResponse';
const envPath = process.cwd() + '\\src\\server\\config\\.env';
console.log(`envPath:${envPath}`);
require('dotenv').config({ path: envPath });

describe('GitHub的操作', () => {
  const githubService = new FileService();

  beforeEach(() => {});

  it('上傳檔案', () => {
    const buff = fs.readFileSync('d:\\log.xml');
    const fileData = {
      name: 'log.xml',
      data: buff
    };

    githubService
      .upload(fileData)
      .then((res: FileResponse) => {
        console.log(res);
        assert.isNotNull(res);
        assert.include(res.filename, 'log.xml', '檔案名是log.xml');
      })
      .catch(error => {
        throw new Error(error);
      });
  });
});
