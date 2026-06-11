export type ContactPaylod = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactMessage(payload: ContactPaylod): Promise<void> {
    const res = await fetch('/api/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })

    if (!res.ok) {
        const error = await res.json().catch(() => ({}))
        throw new Error(error.message || "Failed to send message")
    }
}