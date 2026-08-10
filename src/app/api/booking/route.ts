import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = siteConfig.businessEmail;


export async function POST(req: Request) {


    try {

        const body = await req.json();
        const { name, email, phone, vehicle, service, date, vehicle_notes } = body;
        if (!recipient) {
            return Response.json(
                { error: "Recipient email not configured" },
                { status: 500 }
            );
        }

        const { error } = await resend.emails.send({
            from: "Detailing Corp <onboarding@resend.dev>",
            to: recipient,
            replyTo: email,
            subject: `New Booking Request from ${name}`,
            html: `
            <h2>New Booking Request</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Vehicle:</b> ${vehicle}</p>
            <p><b>Service:</b> ${service}</p>
            <p><b>Requested date:</b> ${date}</p>
            <p><b>Additional Info:</b> ${vehicle_notes}</p>
            `,
        });

        if (error) {
            return Response.json(
                { error },
                { status: 500 }
            );
        }

        return Response.json({
            success: true
        });

    } catch (err) {
        return Response.json(
            { error: "Failed to send email:", err },
            { status: 500 }
        );
    }



}