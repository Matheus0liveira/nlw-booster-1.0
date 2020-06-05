import Knex from "knex";

//  Criação da tabela usando Knex
export async function up(knex: Knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

//  (Voltar atrás) Apagar a tabela usando Knex
export async function down(knex: Knex) {
  return knex.schema.dropTable("items");
}
