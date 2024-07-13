//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "237682698517";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237682698517";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT04wa0NBeDcyQklYN0JKZ2ZlT3BkbFdmOEF6WS84d294VXhLbWtUYUtHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkpJbnhXcWFvaUM2T2J3dy9MVVBuR3loV1pGWFdDaVRsZ3Q4NjZRbkF6MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRS0FGR2d5ejNwWXhNZEhaY0ExMnVYUGYvQ0ZhQ0dBc041NTl4b2pMejMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjcVJtTTZqRHlCZU5FOGV2L2c3WTJLZzBKQkJyM1Y5cXVjWVdSYzlOS2k4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFZzlUUGdaamdZaGxaSDBXYUZQZHV4QWFGZHZDSHR0dmxCVXNETVdiMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9XalpGMU92Rm15ajYwaHlsdGc1ajIwdEpKemFIMEd0Mnpzb1dEUFNkMnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdBMnNKTk11VUVDYUFOYXpIbFpNTkloNjhiSGhYMTlNVWZncEFFY3ZFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURDT3lsaXcwbngyRmY3Snp1VHhsTGh5dkJLMVVYMHVsTmQrSWd3OW1oMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVxTi95ZE1UNlFibm14OGZiS0E3OUNWd2orNjNpK2tRM0dsZzQvSFlnNU5FYjJFYU4rQTlUczdFMmR1OEl3b3VPOENsVWNNSHEyRVhKc2hkQ210bGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6Im5xSkxTU29GV0RnZkZoMHAza01zeDNDWXpnRUtsNjBtYVNGOG4vMGZwK1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVXM1IxdkJGVFB5OUpZNm80bllReXciLCJwaG9uZUlkIjoiM2JjZmE0YzctNjAxOC00YTAwLWI0MjQtNTQzZmFhY2FkYjEzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFuU24zMHlERzhLbGU5ampOMERFUHFBSlFwOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkak5aWTVGL2F0Qm5qZjdYK0xLT25GZDBzbWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjJUQ0NITTMiLCJtZSI6eyJpZCI6IjIzNzY4MjY5ODUxNzo0N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2ZRcitNRkVOcjV4YlFHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoialZSS2JQV3FLWXZRWHdKaUxmdS9oUjRwdVNtYUJRSmVoLzY2RHJ3Wjdtaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVHhZYUprZGJOOGFTZHJsNkYxMWxHdlhaU0dNKzh1Y1RUbWZCeFA2Z1p2d0Rhc0Y0RElnbExoME9wTTk3ZzRqY3pXWERNOU1BVThiTkVNK2lscTNKQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InN3ck11YU9Ob3VzL0d0Ujl2RmZyZVJ3dmgvT01neTVOSEZDRERBRXZKVHRmQmhZMlROUi9sTGJPd016S2Qvd25NQkFLYU8zWFl5Smg3WFFoVTNxcmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjgyNjk4NTE3OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkxVVNtejFxaW1MMEY4Q1lpMzd2NFVlS2JrcG1nVUNYb2YrdWc2OEdlNXAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4MTA3MjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTk1MIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`PRINCE_MAYEL`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "PRINCE_MAYEL",
  botname: process.env.BOT_NAME || "PRINCE",
  ownername: process.env.OWNER_NAME || "P_MAYEL",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "PRINCE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
