import { Client } from 'pg';

interface QueryResult {
  rows: any[];
  fields: any[];
}

export default async function executeSQL(connectionString: string, sqlQuery: string): Promise<QueryResult> {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    const result = await client.query(sqlQuery);
    return { rows: result.rows, fields: result.fields };
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  } finally {
    await client.end();
  }
}
