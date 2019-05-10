import { assert, use } from 'chai';
import * as chaiAsPromise from 'chai-as-promised';
import 'mocha';
import * as fs from 'fs';
import { FileService } from '../../services/fileService';
import { FileResponse } from '../../interfaces/FileResponse';
const envPath = process.cwd() + '\\src\\server\\config\\.env';
require('dotenv').config({ path: envPath });

use(chaiAsPromise);

describe('GitHub的操作', () => {
  const githubService = new FileService();
  // let key = '';

  beforeEach(() => {});

  it('上傳檔案', async () => {
    const buff = fs.readFileSync('d:\\canvas.png');
    const fileData = {
      name: 'canvas.png',
      data: buff
    };

    /*const resPromise = githubService.upload(fileData);
    key = (await resPromise).handle;
    assert.include((await resPromise).filename, 'log.xml', '檔案名是log.xml');*/

    githubService
      .upload(fileData)
      .then((res: FileResponse) => {
        console.log(res);
        assert.isNotNull(res);
        assert.include(res.filename, 'canvas.png', '檔案名是canvas.png');
      })
      .catch(error => {
        throw new Error(error);
      });
  });

  // it('刪除檔案', async () => {
  //   console.log(`key:${key}`);
  //   const resPromise = githubService.delete(key);
  //   assert.isFulfilled(resPromise, '刪除成功');
  //   // assert.include((await resPromise).filename, 'log.xml', '檔案名是log.xml');
  // });
});
