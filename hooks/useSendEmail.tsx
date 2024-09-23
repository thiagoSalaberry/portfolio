import { useState } from "react";
const API_BASE_URL = process.env.NODE_ENV == "development" ? "http://localhost:3000/" : String(process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL);

export function useSendEmail() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<boolean>(false);
    const sendEmail = async (name:string, email:string, company:string, message:string) => {
        setLoading(true);
        setError(false);
        try {
            const controller = new AbortController();
            const response = await fetch(`${API_BASE_URL}api/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, company, message }),
                signal: controller.signal
            });
            if(!response.ok) return setError(true);
            const data = await response.json();
            setData(data);
            controller.abort();
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false);
        }
    }
    return { data, loading, error, sendEmail };
};