import { assert } from 'chai';
import 'mocha';
import * as fs from 'fs';
import { GitHubService } from '../../services/gitHubService';
import { GitHubResponse } from '../../interfaces/GitHubResponse';
import { GitHubRequest } from '../../interfaces/GitHubRequest';
const envPath = process.cwd() + '\\src\\server\\config\\.env';
console.log(`envPath:${envPath}`);
require('dotenv').config({ path: envPath });

describe('GitHub的操作', () => {
  const githubService = new GitHubService();

  beforeEach(() => {});

  it('上傳檔案', async () => {
    const buff = fs.readFileSync('d:\\log.xml');
    const fileData = {
      name: 'log.xml',
      data: buff
    };
    const req = {
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

    console.log(req);

    const gitHubRes: GitHubResponse = await githubService.upload(req);

    assert.isNotNull(gitHubRes);
    assert.include(gitHubRes.content.name, 'log.xml', '檔案名是log.xml');
  });
});
