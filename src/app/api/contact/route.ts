import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend'
import { Client } from '@notionhq/client';

const resend = new Resend(process.env.RESEND_API_KEY)
const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, email, subject, message } = await req.json()

        if (!firstName || !email || !message) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            )
        }

        const fullName = `${firstName} ${lastName}`.trim();

        const { error: resendError } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `[Portfolio] ${subject || "New message"} — ${fullName}`,
            html: `
                <div>
                    <h2></h2>
                    <hr />
                    <p><strong>Email:</strong><a href:"mailto:${email}">${email}</a></p>
                    <p><strong>Subject:</strong> ${subject || "-"}</p>
                    <hr style="border:none; border-top: 1px solid #eee; margin: 16px 0;"/>
                    <p style="white-space:pre-wrap;">${message}</p>
                </div>
            `
        })

        if (resendError) {
            console.error("Resend error:", resendError)
            return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
        }

        await notion.pages.create({
            parent: { database_id: process.env.NOTION_DATABASE_ID! },
            properties:{
                Title: {
                    title: [{ text: { content: fullName } }],
                },
                Email: {
                    email: email,
                },
                Subject: {
                    rich_text: [{ text: { content: subject || "" }}],
                },
                Message: {
                    rich_text: [{ text: { content: message } }]
                },
                Status: {
                    select: { name: "New" },
                },
                Date: {
                    date: { start: new Date().toISOString() }
                }
            }
        });

        return NextResponse.json({ message: "Message sent successfully" }, {status: 200 })
    } catch (error) {
        console.error("Contact API error:", error)
        return NextResponse.json({ message: "Internal server error"}, { status: 500 })
    }
}