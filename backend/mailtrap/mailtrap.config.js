import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = new MailtrapClient({
  token,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Raju Rao",
};
