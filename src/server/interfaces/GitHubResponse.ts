interface GitHubResponse {
  content: Content;
  commit: Commit;
}

interface Commit {
  sha: string;
  node_id: string;
  url: string;
  html_url: string;
  author: Author;
  committer: Author;
  message: string;
  tree: Tree;
  parents: Parent[];
  verification: Verification;
}

interface Verification {
  verified: boolean;
  reason: string;
  signature?: any;
  payload?: any;
}

interface Parent {
  url: string;
  html_url: string;
  sha: string;
}

interface Tree {
  url: string;
  sha: string;
}

interface Author {
  date: string;
  name: string;
  email: string;
}

interface Content {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: Links;
}

interface Links {
  self: string;
  git: string;
  html: string;
}
