const fs = require("fs-extra");
const request = require("request");
const moment = require("moment");

module.exports = {
  config: {
    name: "boxinfo",
    aliases: ['boxinfo', 'groupinfo'],
    version: "2.0",
    author: "Priyanshi Kaur",
    countDown: 5,
    role: 0,
    shortDescription: "📊 See Box/Group info",
    longDescription: "Get detailed information about the current chat box or group",
    category: "box chat",
    guide: {
      en: "{p} [groupinfo|boxinfo]",
    }
  },

  onStart: async function ({ api, event, args }) {
    try {
      let threadInfo = await api.getThreadInfo(event.threadID);
      let threadMem = threadInfo.participantIDs.length;
      let genderStats = { male: 0, female: 0, other: 0 };
      
      for (let user of threadInfo.userInfo) {
        switch(user.gender) {
          case "MALE": genderStats.male++; break;
          case "FEMALE": genderStats.female++; break;
          default: genderStats.other++;
        }
      }

      let admins = threadInfo.adminIDs;
      let adminList = '';
      for (let admin of admins) {
        const info = await api.getUserInfo(admin.id);
        adminList += `👑 ${info[admin.id].name}\n`;
      }

      let messageCount = threadInfo.messageCount;
      let threadName = threadInfo.threadName;
      let threadId = threadInfo.threadID;
      let approvalMode = threadInfo.approvalMode ? "✅ Turned on" : "❌ Turned off";
      let emoji = threadInfo.emoji || "⚠️ Not set";
      let threadType = threadInfo.isGroup ? "👥 Group" : "👤 Personal Chat";
      let createdTime = moment(threadInfo.threadCreateTime).format("MMMM Do YYYY, h:mm:ss a");

      // New features
      let pinnedMessages = threadInfo.pinnedMessageIDs ? threadInfo.pinnedMessageIDs.length : 0;
      let groupPrivacy = threadInfo.privacy ? (threadInfo.privacy === 2 ? "🔒 Private" : "🌐 Public") : "⚠️ Unknown";
      
      let infoMessage = `
📊 「 𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 」 📊

🏷️ Name: ${threadName}
🆔 ID: ${threadId}
📅 Created: ${createdTime}
👁️‍🗨️ Type: ${threadType}
🔐 Privacy: ${groupPrivacy}

👥 Members: ${threadMem}
👨 Males: ${genderStats.male}
👩 Females: ${genderStats.female}
👽 Others: ${genderStats.other}

👑 Admins (${admins.length}):
${adminList}
🔧 Approval Mode: ${approvalMode}
😀 Emoji: ${emoji}
📌 Pinned Messages: ${pinnedMessages}
💬 Total Messages: ${messageCount}

Made By:- Priyanshi Kaur
m.facebook.com/PriyanshiKaurJi
      `;

      // Generate word cloud image (hypothetical function)
      // let wordCloudPath = await generateWordCloud(event.threadID);

      api.sendMessage({
        body: infoMessage,
        attachment: fs.createReadStream(__dirname + '/cache/group_image.png')
      }, event.threadID, () => fs.unlinkSync(__dirname + '/cache/group_image.png'), event.messageID);

      // Download group image
      request(encodeURI(threadInfo.imageSrc))
        .pipe(fs.createWriteStream(__dirname + '/cache/group_image.png'))
        .on('close', () => {
          // Image downloaded successfully
        });

    } catch (error) {
      console.error("Error in boxinfo command:", error);
      api.sendMessage("❌ An error occurred while fetching group information. Please try again later.", event.threadID);
    }
  }
};