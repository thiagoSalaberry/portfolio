import { useEffect, useState } from "react";

export function useSendEmail(name:string, email:string, company:string, message:string) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if(!name || !email || !company || !message) return;
        setLoading(true);
        const controller = new AbortController();
        // fetch(`https://thiago-salaberry-portfolio.vercel.app/api/test`, {
        fetch(`http://localhost:3000/api/hello`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, company, message}),
            signal: controller.signal
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        })
        .finally(() => setLoading(false));
        return () => controller.abort();
    });
    return { data, loading, error };
};