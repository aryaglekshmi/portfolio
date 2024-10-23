import emailjs from "@emailjs/browser";
import { IMail } from "./interfaces";

async function sendMail(formData: IMail) {
  const data = {
    ...formData,
    to_name: process.env.NEXT_PUBLIC_TO_NAME,
    reply_to: process.env.NEXT_PUBLIC_TO_EMAIL,
  };

  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
  });

  if (
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
  ) {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        data
      );
      console.log("SUCCESS!", response.status, response.text);
      return { success: true, message: 'Mail sent' };
    } catch (err) {
      console.log("FAILED...", err);
      return { success: false, message: 'Mail failed' };
    }
  } else {
    return { success: false, message: 'Email service or template ID is missing' };
  }
}

export { sendMail };
