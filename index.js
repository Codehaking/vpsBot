const TelegramBot = require('node-telegram-bot-api')
const os = require('os')


const bot = new TelegramBot('563431438:AAHc3QoiMuH-a9IucYA__wP2jnb0loCfs-w', {polling: true})

bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, 'Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"')
})