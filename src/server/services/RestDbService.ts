import got from 'got';
import { Inject } from 'typedi';

@Inject()
export class RestDbService {
  async getDatas<T>(tableName: string, query?: any[]): Promise<T[]> {
    let url = `${process.env.RESTDB_URL}${tableName}`;
    const querystring = this.getQuery(query || []);

    url += querystring;
    const client = this.getGot();
    const body = await client.get(url).json<T[]>();

    return body;
  }

  async saveData<T>(tableName: string, data: T) {
    const url = `${process.env.RESTDB_URL}${tableName}`;
    const client = this.getGot();

    const body = await client
      .post(url, {
        json: data
      })
      .json<T>();

    console.log(body);

    return body;
  }

  private getGot() {
    const client = got.extend({
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': `${process.env.RESTDB_API}`
      }
    });

    return client;
  }

  private getQuery(query: any[]): string {
    if (!query.length) {
      return '';
    }

    const content: string = query.reduce((acct, obj) => {
      acct += `"${obj['field']}":"${obj['value']}",`;
      return acct;
    }, '');

    return `?q={${content.substr(0, content.length - 1)}}`;
  }
}
