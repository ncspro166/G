const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "4k",
        aliases: ["upscale"],
        version: "1.1",
        author: "Priyanshi Kaur (modified)",
        countDown: 15,
        role: 0,
        longDescription: "Upscale your image using an external API.",
        category: "image",
        guide: {
            en: "{pn} reply to an image"
        }
    },

    onStart: async function ({ message, args, event }) {
        const getImageUrl = () => {
            if (event.type === "message_reply") {
                const replyAttachment = event.messageReply.attachments[0];
                if (["photo", "sticker"].includes(replyAttachment?.type)) {
                    return replyAttachment.url;
                } else {
                    throw new Error("You must reply to an image.");
                }
            } else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g) || null) {
                return args[0];
            } else {
                throw new Error("Reply to an image.");
            }
        };

        try {
            const imageUrl = await getImageUrl();
            message.reply("Please wait...");

            const enhancedImageUrl = await enhanceImage(imageUrl);
            const enhancedImageBuffer = await downloadImage(enhancedImageUrl);

            const filePath = path.join(__dirname, 'enhanced-image.jpg');
            fs.writeFileSync(filePath, enhancedImageBuffer);

            message.reply({
                body: "Image Enhanced.",
                attachment: fs.createReadStream(filePath)
            });

            // Optionally delete the file after sending
            fs.unlinkSync(filePath);
        } catch (error) {
            message.reply("Error: " + error.message);
        }
    }
};

// Helper function to download the image
async function downloadImage(imageUrl) {
    const response = await axios({
        url: imageUrl,
        responseType: 'arraybuffer'
    });
    return Buffer.from(response.data, 'binary');
}

// Helper function to enhance the image using the new API
async function enhanceImage(imageUrl) {
    const apiKey = 'r-e377e74a78b7363636jsj8ff'; // Replace with your actual API key
    const apiUrl = `https://for-devs.onrender.com/api/upscale?imageurl=${encodeURIComponent(imageUrl)}&apikey=${apiKey}`;
    
    const response = await axios.get(apiUrl);
    
    if (response.data && response.data.url) {
        return response.data.url;
    } else {
        throw new Error("Failed to upscale the image");
    }
}