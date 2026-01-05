import axios from "axios";

async function sendTelegram() {
  const token = process.env.TG_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("TG_TOKEN veya TG_CHAT_ID eksik");
  }

  await axios.post(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      chat_id: chatId,
      text: "✅ GitHub Actions → Telegram bağlantısı ÇALIŞIYOR!",
      disable_web_page_preview: true
    }
  );
}

sendTelegram().catch(err => {
  console.error(err);
  process.exit(1);
});
