const Airtable = require('airtable-node');
import { Inject } from 'typedi';
import { BaseModel } from '../../shared/models/BaseModel';

export interface ListOptions {
  filterByFormula?: string;
  maxRecords?: number;
  pageSize?: number;
  sort?: { field: string; direction: 'asc' | 'desc' }[];
  view?: string;
  cellFormat?: 'json' | 'string';
  timeZone?: string;
  userLocale?: string;
}

@Inject()
export class RestDbService {
  async getDatas<T extends BaseModel>(
    baseId: string,
    tableName: string,
    options?: ListOptions
  ): Promise<T[]> {
    const airtable = this.getAirTableClient(baseId, tableName);

    const { records } = await airtable.list(options);

    const body: T[] = records.map(o => {
      const fields = o.fields;
      fields.id = o.id;
      return fields;
    }) as T[];

    return body;
  }

  async saveData<T extends BaseModel>(baseId: string, tableName: string, data: T) {
    const airtable = this.getAirTableClient(baseId, tableName);
    const body = await airtable.create({ fields: data });

    console.dir(body);
    return body;
  }

  async updateData<T extends BaseModel>(baseId: string, tableName: string, data: T) {
    const id = data.id;
    delete data.id;
    const airtable = this.getAirTableClient(baseId, tableName);
    const body = await airtable.update(id, data);

    console.dir(body);
    return body;
  }

  private getAirTableClient(baseId: string, tableName: string) {
    const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API })
      .base(baseId)
      .table(tableName);

    return airtable;
  }
}
