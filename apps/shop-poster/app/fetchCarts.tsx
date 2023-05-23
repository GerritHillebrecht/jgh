import { sql } from '@vercel/postgres';

export default async function Carts(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS LIMIT 10`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}
