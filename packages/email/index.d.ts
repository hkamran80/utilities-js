export function createClient(serverName: string): any;
export function sendEmail(transport: any, from: string, to: string, subject: string, html: string, plainText: string, attachments?: any[], listUnsubscribe?: string | null): Promise<any>;
