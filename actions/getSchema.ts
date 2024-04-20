import { Client } from 'pg';

export interface Column {
  name: string;
  type: string;
  nullable: boolean;
  default: string | null;
  primary_key: boolean;
}

export interface Schema {
  [tableName: string]: Column[];
}

export async function getSchema(connectionString: string): Promise<Schema> {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();

    // Get list of tables
    const tableQuery = `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE';
    `;
    const { rows: tables } = await client.query(tableQuery);

    const schema: Schema = {};

    // Get column information for each table
    for (const { table_name: tableName } of tables) {
      const columnQuery = `
        SELECT column_name, data_type, is_nullable, column_default, is_identity
        FROM information_schema.columns
        WHERE table_name = $1
        AND table_schema = 'public';
      `;
      const { rows: columns } = await client.query(columnQuery, [tableName]);

      schema[tableName] = columns.map(({ column_name, data_type, is_nullable, column_default, is_identity }) => ({
        name: column_name,
        type: data_type,
        nullable: is_nullable === 'YES',
        default: column_default,
        primary_key: is_identity === 'YES',
      }));
    }

    return schema;
  } catch (err) {
    console.error('Error retrieving schema:', err);
    throw err;
  } finally {
    client.end();
  }
}
