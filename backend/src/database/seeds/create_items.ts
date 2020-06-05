import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "lampadas", image: "lampadas.svg" },
    { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
    { title: "Papéis e Papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos Organigos", image: "organicos.svg" },
    { title: "Óleo de cozinha", image: "oleo.svg" },
  ]);
}
