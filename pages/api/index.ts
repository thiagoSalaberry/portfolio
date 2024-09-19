import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).send(`¡Hola! Bienvenido a la API de mi portfolio.`);
}
