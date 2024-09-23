import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/brevo";

type Entry = [string, unknown];
const missingFields = (
  requiredFields: string[],
  receivedFields: Entry[]
): void => {
  receivedFields.forEach((entry) => {
    const key = entry[0];
    const indexOfKey = requiredFields.indexOf(key);
    if (requiredFields.includes(key) && entry[1]) {
      requiredFields.splice(indexOfKey, 1);
    }
  });
  if (requiredFields.length > 0) {
    throw new Error(`Missing required fields: ${requiredFields.join(", ")}`);
  }
  console.log("La solicitud es correcta");
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fields = Object.entries(req.body);
  try {
    missingFields(["name", "email", "company", "message"], fields);
    const { name, email, company, message } = req.body;
    await sendEmail(name, email, company, message);
    return res.status(200).json({
      message:
        "Se ha enviado un mail de propuesta de trabajo a thiagosalaberry99@gmail.com",
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
