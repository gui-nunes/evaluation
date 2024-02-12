import pg from 'pg';
import sqlScripts from './script.mjs';

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL, // <-- ALTERAR
});
try {
  console.log('Connecting to database...');
  await client.connect();
  console.log('Creating tables...');
  for (const script of sqlScripts) {
    console.log(script);
    await client.query(script);
  }
  console.log('Finished');
} catch (error) {
  console.error(error);
} finally {
  await client.end();
  console.log('Exiting');
}
