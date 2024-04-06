export async function sendEmail(
  name: string,
  email: string,
  company: string,
  message: string
) {
  const response = await fetch(
    `https://thiago-salaberry-portfolio.vercel.app/api/send-email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, company, message }),
    }
  );
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to send email: ${error}`);
  }
}
