import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

type Props = {
    to: string,
    subject?: string,
    html: string,
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html }: Props) {


    try {
        console.log("point 1")
        const { data, error } = await resend.emails.send({
            from: siteConfig.from,
            to: to,
            subject: subject ?? "",
            html: html,
        });

        if (error) {
            console.error("Resend API error:", error);
            throw new Error(`Failed to send email: ${error.message}`);

        }

        console.log("Email sent successfully:", data?.id);
        return data;
    } catch (error) {
        console.error("sendEmail failed:", error);
        throw error;
    }

}
