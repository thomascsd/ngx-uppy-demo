import * as GitHub from 'github-api';
import { GitHubResponse } from '../interfaces/GitHubResponse';
import { GitHubRequest } from '../interfaces/GitHubRequest';

export class GitHubService {
  constructor(private clientId: string, private clientSecret: string) {}

  async upload(req: GitHubRequest) {
    // const path = `files/${fileData.name}`;
    // const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?client_id=${
    //   this.clientId
    // }&client_secret=${this.clientSecret}`;
    // const body = {
    //   message: 'my commit message',
    //   content: fileData.data.toString('base64')
    // };
    // console.log(`body:${JSON.stringify(body)}`);

    // const res = await axios.put<GitHubResponse>(url, body);

    // return res.data;

    const gh = new GitHub({
      username: req.username,
      password: req.password
    });

    gh;
  }
}
