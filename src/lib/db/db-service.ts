import { Client, QueryConfig, QueryResultRow } from 'pg';

export class DbService {
  private readonly client: Client;

  constructor() {
    this.client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
  }

  protected async connect(): Promise<void> {
    await this.client.connect();
  }

  protected async disconnect(): Promise<void> {
    await this.client.end();
  }

  protected async query<R extends QueryResultRow, I extends any[]>(
    queryText: string | QueryConfig<I>,
    params?: I
  ): Promise<any> {
    const result = await this.client.query<R, I>(queryText, params);
    return result.rows;
  }

  protected async execute(queryText: string, params?: any[]): Promise<void> {
    await this.client.query(queryText, params);
  }
}
