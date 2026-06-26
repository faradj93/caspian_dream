module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = "info@caspian-dream.com";

    if (!apiKey) {
        return res.status(500).json({
            error: "Email delivery is not configured. Set RESEND_API_KEY in Vercel."
        });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "A valid email address is required." });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: email,
            subject: `New website request from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                "",
                "Message:",
                message
            ].join("\n")
        })
    });

    const result = await emailResponse.json().catch(() => ({}));
    if (!emailResponse.ok) {
        return res.status(502).json({
            error: result.message || "Could not send email."
        });
    }

    return res.status(200).json({ ok: true });
};
