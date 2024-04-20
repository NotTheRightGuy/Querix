// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { backendUrl } from '@/utils/links';

const resend = new Resend(process.env.RESEND_SECRET_KEY);

export async function POST(request:any) {
  try {
    const body = await request.json()
    const {email, workspace} = body;
    const data = await resend.emails.send({
      from: process.env.SENDER_MAIL || "",
      to: email,
      subject: 'Hello world',
      react: `Click on the link to join the workspace <a href="${backendUrl}/api/getWorkspace/"${email}"/"${workspace}>Join</a>`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
