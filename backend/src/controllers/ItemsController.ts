import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  // Geralmente se usa o index para listagem
  async index(request: Request, response: Response) {
    // É o mesmo que:  SELECT * FROM ITEMS;
    const items = await knex("items").select("*");

    // Transformação dos dados no qual se tornará mais acessível
    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.106:3333/uploads/${item.image}`,
      };
    });
    response.json(serializedItems);
  }
}

export default ItemsController;
