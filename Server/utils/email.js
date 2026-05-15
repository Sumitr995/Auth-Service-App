export const sendEmail = async ({ to, subject, text }) => {
  console.log("📧 Mock Email Sent:");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("Text:", text);
};