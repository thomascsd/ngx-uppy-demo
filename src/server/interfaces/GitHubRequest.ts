export interface GitHubRequest {
  fileData: any;
  owner: string;
  repo: string;
  username: string;
  password: string;
  options: GitHubRequestOptions;
  branch?: string;
  message?: string;
}

export interface GitHubRequestOptions {
  author: string;
  commiter: string;
  encode: Boolean;
}
