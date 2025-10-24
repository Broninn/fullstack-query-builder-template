import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "NodeJS" },
    { name: "Express" },
    { name: "SQL" },
    { name: "NoSQL" },
    { name: "GraphQL" },
  ]);
}
