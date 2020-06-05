import Knex from "knex";

//  Criação da tabela usando Knex
export async function up(knex: Knex) {
  return knex.schema.createTable("point_items", (table) => {
    table.increments("id").primary();
    table.string("point_id").notNullable().references("id").inTable("points");
    table.string("item_id").notNullable().references("id").inTable("items");
  });
}

//  (Voltar atrás) Apagar a tabela usando Knex
export async function down(knex: Knex) {
  return knex.schema.dropTable("point_items");
}
