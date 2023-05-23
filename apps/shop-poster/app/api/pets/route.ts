import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, owner } = body;
  console.log({ body, name, owner });

  const pets =
    await sql`SELECT * FROM Pets WHERE Name = ${name} AND Owner = ${owner};`;
  return NextResponse.json(pets.rows);
}

export async function GET() {
  const pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json(pets.rows);
}
