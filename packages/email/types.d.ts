import type { Transporter } from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";

declare function createClient(serverName: string): Transporter;
declare function sendEmail(
    transport: Transporter,
    from: string,
    to: string,
    subject: string,
    html: string,
    plainText: string,
    attachments: Attachment[] = [],
    listUnsubscribe: string | null = null
): Promise<void>;
