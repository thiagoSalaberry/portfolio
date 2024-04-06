import { NextApiRequest, NextApiResponse } from "next";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name, email, company, message } = req.body;
  if (!name && !email && !company && !message)
    return res.status(400).json({ error: "Faltan campos" });
  try {
    res.status(200).json({
      name,
      email,
      company,
      message,
    });
  } catch (error) {
    console.log("Error en el servidor", error);
    res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
}
