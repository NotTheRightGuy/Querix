// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:any) {
  try {
    const {email, workspace} = request.body;
    const data = await resend.emails.send({
      from: process.env.SENDER_MAIL || "",
      to: email,
      subject: 'Hello world',
      react: `Click on the link to join the workspace <a href="http://localhost:3000/api/getWorkspace/"${email}"/"${workspace}>Join</a>`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
