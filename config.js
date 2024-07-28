const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,9239B4S7GSC";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_38_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgODksXG4gICAgICAgIDk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2ZicytlUFlPVjJGNEdHaURTWUU4UTdrbVdnRDY0MDhaZGpWWWtSbUJwVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUNoYUVudi1SanlHZXNjZFhIYzdKZ1wiLFxuICBcInBob25lSWRcIjogXCI3ZThiYTU5Yy04N2I0LTQ3MDQtOGYyNi1kZDIwNzVkMjZiM2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAyMTMsXG4gICAgICAxMzQsXG4gICAgICA1LFxuICAgICAgNDEsXG4gICAgICAzMSxcbiAgICAgIDQwLFxuICAgICAgNjMsXG4gICAgICA3OSxcbiAgICAgIDIzNyxcbiAgICAgIDEzNCxcbiAgICAgIDIyNyxcbiAgICAgIDIxLFxuICAgICAgMjQzLFxuICAgICAgNzIsXG4gICAgICAyNixcbiAgICAgIDYwLFxuICAgICAgNDQsXG4gICAgICAyMDYsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAyNDIsXG4gICAgICAxMTMsXG4gICAgICA1NyxcbiAgICAgIDI0MyxcbiAgICAgIDIyMCxcbiAgICAgIDE5MCxcbiAgICAgIDE4NixcbiAgICAgIDE3MyxcbiAgICAgIDEyNyxcbiAgICAgIDY5LFxuICAgICAgNjIsXG4gICAgICAyMDYsXG4gICAgICAyMzgsXG4gICAgICAyMDEsXG4gICAgICAxODgsXG4gICAgICAxNjksXG4gICAgICA1MCxcbiAgICAgIDE0MixcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5QjRTN0dTQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM2Nzc1NjI2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGWCBGYXRoZXJcIixcbiAgICBcImxpZFwiOiBcIjMwODI1Mzk5NzE4MDEzOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXlNcExZRkVMT2dtclVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqMVluWjh6S3pNVklGSHVQcVFNd3daNXE0ZVprek4rYmhvRjFsRkI1TlFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZST0dkdUJQVURocVlvRXhmdU51SnQ3MG90TSt3Wmc2WENOVGdOSXF5Q3BOU1NzclNPNHZVT3plaUJ6SDN0bTliT1Z6MDE4d0xlMTJnTDNsN0NLQkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhTTW9FQWNlMGhVazh2bXVPMnVOTGluTEszVVhYamdqTUdsbXVxRHNYdWtlclJ6LzR4aWZRdXl0V2RtTGlISDhCSGdwTUh2WVF1YVUreEo4K2dRSEN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNjc3NTYyNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE5MTkyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9FdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0V2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTdwMFVhSWZsakxyTWFJQU40NnNZZER6TGxITGNZNUdUK0tNcEF1alBLZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU2MDE0OTIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FxFather",
  ownername:process.env.OWNER_NAME|| "FxFather",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
