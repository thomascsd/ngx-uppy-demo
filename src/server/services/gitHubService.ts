import axios from 'axios';

export class GitHubService {
  async upload(fileData: any) {
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const path = `files/${fileData.name}`;
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    const res = await axios.put<GitHubResponse>(url, {
      message: 'my commit message',
      content: fileData.toString('base64')
    });

    return res.data;
  }
}
