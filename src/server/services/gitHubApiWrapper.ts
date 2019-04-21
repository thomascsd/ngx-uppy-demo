import * as GitHub from 'github-api';
import { GitHubResponse } from '../interfaces/GitHubResponse';
import { GitHubRequest } from '../interfaces/GitHubRequest';

export class GitHubApiWrapper {
  private gh: any;

  constructor(option: any) {
    this.gh = new GitHub(option);
  }

  writeFile(req: GitHubRequest) {
    return new Promise<GitHubResponse>((resolve, reject) => {
      const repo = this.gh.getRepo(req.owner, req.repo);
      const content = req.fileData.data.toString('base64');
      const path = `files/${req.fileData.name}`;

      repo.writeFile(
        req.branch || 'master',
        path,
        content,
        req.message || 'upload file',
        req.options,
        (error: Error, res: GitHubResponse) => {
          if (error) {
            reject(error);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
}
