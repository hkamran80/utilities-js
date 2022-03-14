import dotenv from "dotenv";
import { createTransport } from "nodemailer";

dotenv.config();

/**
 * Create an email client
 *
 * Requires the `SMTP_HOSTNAME`, `SMTP_PORT`, `SMTP_USERNAME`, and `SMTP_PASSWORD` environment variables to be set
 *
 * @param {string} serverName - The name of server that is sending the email
 * @returns {import("nodemailer").Transporter} The client transport
 */
export const createClient = (serverName) => {
    if (
        process.env.SMTP_HOSTNAME &&
        process.env.SMTP_PORT &&
        process.env.SMTP_USERNAME &&
        process.env.SMTP_PASSWORD
    ) {
        return createTransport({
            name: serverName,
            host: process.env.SMTP_HOSTNAME,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
            logger: false,
        });
    } else {
        return null;
    }
};

/**
 * Send an email
 * @param {import("nodemailer").Transporter} transport - The client transport
 * @param {string} from - The sender's email
 * @param {string} to - The recipient's email
 * @param {string} subject - The email's subject
 * @param {string} html - The HTML version of the email
 * @param {string} plainText - The plain-text version of the email
 * @param {import("nodemailer/lib/mailer").Attachment[]} [attachments=[]] - A list of attachments
 * @param {string|null} [listUnsubscribe=null] - The `List-Unsubscribe` header
 */
export const sendEmail = async (
    transport,
    from,
    to,
    subject,
    html,
    plainText,
    attachments = [],
    listUnsubscribe = null
) =>
    transport.sendMail({
        from,
        to,
        subject,
        html,
        text: plainText,
        headers: { Sensitivity: "Personal" },
        list: {
            unsubscribe: listUnsubscribe,
        },
        attachments,
    });
