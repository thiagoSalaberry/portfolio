import { NextApiRequest, NextApiResponse } from "next";
import { sendContactEmail } from "@/lib/brevo";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name, email, company, message } = req.body;
  if (!name && !email && !company && !message)
    return res.status(400).json({ error: "Faltan campos" });
  try {
    await sendContactEmail(name, email, company, message);
    res
      .status(200)
      .json({
        message:
          "Se ha enviado un mail de propuesta de trabajo a thiagosalaberry99@gmail.com",
      });
  } catch (error) {
    console.log("Error en el servidor", error);
    res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
}
