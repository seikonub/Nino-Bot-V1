//JANGAN DI HAPUS YA

//Subs biar work :v
//Yt : Murphy Ofc
//Tt : ninonub_
var {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('./mess/color')
var speed = require('performance-now')
var { sleep } = require('./mess/myfunc2')
var { uploadImages } = require('./mess/uploadimage')
var { lirikLagu } = require('./mess/lirik.js')
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./mess/myfunc')
var { fetchJson, kyun, fetchText } = require('./mess/fetcher')
var request = require('request')
var fs = require('fs')
var brainly = require('brainly-scraper')
var axios = require("axios")
var hx = require('hxz-api')
var ggs = require('google-it')
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')
var yts = require('yt-search')
var xa = require('xfarr-api')  
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/nino.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = '© nino'
blocked = []
multi =false
nopref = false
allpref = true

//══════════[ Database Game ]═════════//

var tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
var tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
var caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
var tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
var tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
var tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
var tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var config = JSON.parse(fs.readFileSync('./config.js'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.zekais
var apikey4 = config.Zeks
var apikey5 = config.nino
var apikey6 = config.Nurutomo

//━━━━━━━━━━━━━━━[ IYA DEH ]━━━━━━━━━━━━━━━━━//



//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = nino = async (nino, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var latensyi = speed() - timestampi
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = nino.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6285157740529@s.whatsapp.net"
var ownerNumber = ["6285866295942@s.whatsapp.net",`${NomorOwner}@s.whatsapp.net`]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? nino.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? nino.user.jid : nino.contacts[zer.sender]
var pushname = zer.key.fromMe ? nino.user.name : '-'
var groupMetadata = isGroup ? await nino.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Mohon Tunggu... Sedang Proses',
success: 'Done...',
wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
admin: 'Khusus Admin Group'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
nino.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
nino.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? nino.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nino.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
nino.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
nino.chatRead(from, "read")

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 99999,
status: 1,
surface : 1,
message: `© nino`, 
orderTitle: `© nino`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
nino.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
var sendButLocation = async (id, text1, desc1, loc1, but = [], options = {}) => {
kma = loc1
mhan = await nino.prepareMessage(from, kma, location)
var buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "LOCATION"
}
nino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButImage = async (
id,
text1,
desc1,
gam1,
but = [],
options = {}
) => {
kma = gam1;
mhan = await nino.prepareMessage(from, kma, image);
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
nino.sendMessage(
id,
buttonMessages,
MessageType.buttonsMessage,
options
)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

//━[ TEBAK GAMBAR ]━
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Gambar 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
}
}

//━[ CAK LONTONG ]━
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Caklontong 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
}
}

//━[ TEBAK JENAKA ]━
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Jenaka 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
}

//Tebak Lirik
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Lirik 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
}
}

//Tebak Bendera
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Bendera 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
}
}

//Tebak Kimia
if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakimia.json", JSON.stringify(tebakimia))
}
}

//Tebak Kata
if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakata[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Kata 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
}
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
nino.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
nino.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}

var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? nino.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nino.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
nino.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
nino.groupRemove(from, [sender])
}     


//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                                                           

case 'menu':
case 'help':
teks =
`Hai... ${pushname}, ${ucapanWaktu}

*INFO BOT*
_Bot Name: ${NameBot}_
_Creator Bot: ${faketeks}_
_Owner name: ${NameOwner}_
_Owner number: ${NomorOwner}_
_Runtime: ${runtime(process.uptime())}_
_Speed: ${latensyi.toFixed(4)} second_
_Lib: Baileys_
_Type: NodeJs_

*GROUP MENU*
• ${prefix}antilink
• ${prefix}antivirtex
• ${prefix}welcome
• ${prefix}group
• ${prefix}linkgrup
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}setpp
• ${prefix}kick
• ${prefix}add
• ${prefix}demote
• ${prefix}promote

*STICKER MENU*
• ${prefix}sticker
• ${prefix}toimg
• ${prefix}attp

*STORAGE MENU*
• ${prefix}owner
• ${prefix}report
• ${prefix}runtime
• ${prefix}speed

*OWNER MENU*
• ${prefix}bc

*DOWNLOADER*
• ${prefix}play
• ${prefix}fb
• ${prefix}ytmp3
• ${prefix}ytmp4
• ${prefix}ig
• ${prefix}tiktok
• ${prefix}tiktokmusic
• ${prefix}tiktokaudio
• ${prefix}mediafire

*ANIME*
• ${prefix}milf
• ${prefix}neko
• ${prefix}loli
• ${prefix}shota
• ${prefix}waifu
• ${prefix}kiss
• ${prefix}hug
• ${prefix}baka
• ${prefix}wallpaperanime

*NSFW*
• ${prefix}nsfwwaifu
• ${prefix}nsfwneko
• ${prefix}nsfwtrap
• ${prefix}nsfwblowjob

*INTERNET*
• ${prefix}igstalk
• ${prefix}cerpen
• ${prefix}google
• ${prefix}ytsearch
• ${prefix}lirik

*TEXT MAKER*
• ${prefix}thunder             
• ${prefix}demon
• ${prefix}magma
• ${prefix}glitch
• ${prefix}devil
• ${prefix}graffiti
• ${prefix}skeleton
• ${prefix}blackpink
• ${prefix}cloud
• ${prefix}blood
• ${prefix}lava
• ${prefix}firework
• ${prefix}toxic
• ${prefix}neon
• ${prefix}greenneon
• ${prefix}glitter
• ${prefix}glow
• ${prefix}galaxy
• ${prefix}firetext
• ${prefix}innefire
• ${prefix}shake
• ${prefix}comics
• ${prefix}scribble
`
sendButLocation(from, teks, 'Signed Owner Nino Bot', {jpegThumbnail:fakeimg,name:""}, [{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1},{buttonId:`script`,buttonText:{displayText:'SCRIPT'},type:1},{buttonId:`donasi`,buttonText:{displayText:'DONASI'},type:1}], {contextInfo: { mentionedJid: [num]}})
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: '© nino',
buttons: punten,
headerType: 1
}
await nino.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = nino.contacts[i] != undefined ? nino.contacts[i].vname || nino.contacts[i].notify : undefined
inilist.push({
"displayName": 'nino Bot',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await nino.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
break

case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
nino.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
nino.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await nino.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
nino.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
nino.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
nino.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
nino.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
nino.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
nino.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
nino.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠𝐞𝐭!`)
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
nino.groupUpdateSubject(from, `${body.slice(9)}`)
nino.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝𝐢\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
nino.groupUpdateDescription(from, `${body.slice(9)}`)
nino.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await nino.downloadAndSaveMediaMessage(zer, './storage/media_user')
await nino.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await nino.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await nino.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await nino.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐙𝐞𝐫𝐨 𝐘𝐓𝟕`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await nino.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await nino.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nino.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
nino.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await nino.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa © nino`)
fs.unlinkSync(ran)
})
break
      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
nino.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtubeown':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/channel/UC9Si3U0o9dGS9MDfJR5iF6Q`
nino.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagramown':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/naando.jpeg`
nino.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktokown':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@nando.xyz`
nino.sendMessage(from, teks, text, {quoted: ftrol})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break
//━━━━━━━━━━━━━━━[ Downloader ]━━━━━━━━━━━━━━━━━//
case 'play':
case 'ytdl':									  
if (!q) return reply('Linknya?')
let query = args.join(" ")
res = await yts(q)
var thumbInfo = ` 
*----- Youtube Download -----*

 *📑 Judul :* ${res.all[0].title}
 *ℹ️ ID Video :* ${res.all[0].videoId}
 *🎲 Diupload Pada :* ${res.all[0].ago}
 *👀 Views :* ${res.all[0].views}
 *⌚ Durasi :* ${res.all[0].timestamp}
 *📻 Channel :* ${res.all[0].author.name}
 *🔗 Link Video :* ${res.all[0].url}

*Silahkan pilih media yang akan di download*
`
var tod = await getBuffer(res.all[0].image)
sendButLocation(from, thumbInfo, faketeks, {jpegThumbnail:tod,name:""}, [{buttonId:`${prefix}ytmp3 ${res.all[0].url}`,buttonText:{displayText:'AUDIO'},type:1},{buttonId:`${prefix}ytmp4 ${res.all[0].url}`,buttonText:{displayText:'VIDEO'},type:1}], {contextInfo: { mentionedJid: [num]}})
break   
  
case 'ytmp3':
if (!q) return reply(`Masukan judul`)		
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply('lu keim link apaan kontol')
reply(mess.wait)				  
anu = await fetchJson(`https://api.zekais.com/ytmp3?url=${q}&apikey=${apikey3}`)         
sendMediaURL(from,anu.result,ftrol)
break                                              

case 'ytmp4':
if (!q) return reply(`Masukan judul`)		
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply('lu keim link apaan kontol')
reply(mess.wait)				  
anu = await fetchJson(`https://api.zekais.com/ytmp4?url=${q}&apikey=${apikey3}`)         
buffer = await getBuffer(anu.result)
nino.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `mp4`, quoted: ftrol, caption: `*Judul* ${anu.title}\n*Filesize* ${anu.size}\n*Deskripsi* ${anu.desc}`})
break

case 'tiktok':
case 'tiktoknowm':
if (!q) return reply(`Masukan judul`)		
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply('lu keim link apaan kontol')
reply(mess.wait)				  
anu = await fetchJson(`https://api.zekais.com/tiktok2?url=${q}&apikey=${apikey3}`)         
buffer = await getBuffer(anu.result.no_wm)
nino.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `mp4`, quoted: ftrol, caption: `${faketeks}`})
break                                                                                                                                                                                                                                                                                

case 'tiktokaudio':
case 'tiktokmusic':
if (!q) return reply(`Masukan link`)		
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('lu keim link apaan kontol')
reply(mess.wait)				  
anu = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${q}`)         
sendMediaURL(from,anu.result.audio_only.original,ftrol)
break                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

case 'ig':
case 'igdl':
case 'instagram':
if (!q) return reply(`Masukan link`)		
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('lu keim link apaan kontol')
reply(mess.wait)				  
anu = await fetchJson(`http://hadi-api.herokuapp.com/api/instagram?url=${q}`)         
sendMediaURL(from,anu.result,ftrol)
break                                                

case 'igstory': 
if(!q) return reply('Usernamenya?')
hx.igstory(q)
.then(async result => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
} else {
let link = await getBuffer(i.url)
nino.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
}
}
});
break
case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':
var _0x5c5868=_0x4863;(function(_0x9606af,_0x1581c5){var _0x50ee46=_0x4863,_0x137013=_0x9606af();while(!![]){try{var _0x5e4bc3=-parseInt(_0x50ee46(0x15f))/0x1*(parseInt(_0x50ee46(0x154))/0x2)+parseInt(_0x50ee46(0x152))/0x3+parseInt(_0x50ee46(0x162))/0x4+-parseInt(_0x50ee46(0x159))/0x5*(parseInt(_0x50ee46(0x15e))/0x6)+parseInt(_0x50ee46(0x15b))/0x7*(-parseInt(_0x50ee46(0x156))/0x8)+-parseInt(_0x50ee46(0x153))/0x9+-parseInt(_0x50ee46(0x157))/0xa*(-parseInt(_0x50ee46(0x151))/0xb);if(_0x5e4bc3===_0x1581c5)break;else _0x137013['push'](_0x137013['shift']());}catch(_0x176520){_0x137013['push'](_0x137013['shift']());}}}(_0x3147,0x7e341));function _0x4863(_0x2eeed6,_0x549766){var _0x314720=_0x3147();return _0x4863=function(_0x486351,_0x21a152){_0x486351=_0x486351-0x150;var _0x30ca36=_0x314720[_0x486351];return _0x30ca36;},_0x4863(_0x2eeed6,_0x549766);}if(!q)return reply('Masukan\x20link');function _0x3147(){var _0x115395=['video/mp4','16sIYczx','240dlkxiX','lu\x20keim\x20link\x20apaan\x20kontol','55bmneoW','mp4','5201EqAVNW','sendMessage','facebook.com','541854URHSTl','2jPaXRT','result','wait','3764048RxmQzv','&apikey=5S3epf7hC2','228998saJrTZ','1494273PlOCyp','3566331UAiFdD','30662NKDiBv'];_0x3147=function(){return _0x115395;};return _0x3147();}if(!isUrl(args[0x0])&&!args[0x0]['includes'](_0x5c5868(0x15d)))return reply(_0x5c5868(0x158));reply(mess[_0x5c5868(0x161)]),anu=await fetchJson('https://api-xcoders.xyz/api/download/fb?url='+q+_0x5c5868(0x150)),buffer=await getBuffer(anu[_0x5c5868(0x160)]['data']['url']),nino[_0x5c5868(0x15c)](from,buffer,video,{'mimetype':_0x5c5868(0x155),'filename':_0x5c5868(0x15a),'quoted':ftrol,'caption':''+faketeks});
break 
case 'mediafire':
if (!q) return reply(`Example : ${prefix + command} http://www.mediafire.com/file/js0gr2nozcmk9yg/example.txt/file`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply('Itu bukan link mediafire')
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/mediafire?url=${q}&apikey=${apikey3}`)
downlod = await getBuffer(lah.result.url)
nino.sendMessage(from, downlod, document, { mimetype: 'application/zip', filename: lah.result.name, quoted: ftrol, contextInfo: {mentionedJid: [num]}})
break                   

case 'ytsearch':
case 'yts':
if (!q) return reply(`Masukan suername`)		
//if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply('lu keim link apaan kontol')
reply(mess.wait)				  
anu = await fetchJson(`https://api.zekais.com/yts?query=${q}&apikey=${apikey3}`)         
buffer = `*YOUTUBE SEARCH*\n
Judul : ${anu.result.title}
Channel : ${anu.result.channel}
Durasi : ${anu.result.durasi}
Id : ${anu.result.id}
Views : ${anu.result.views}
Tahun : ${anu.result.ago}
Link : ${anu.result.url}`
sendMediaURL(from,anu.result.image,buffer,ftrol)
break

case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('What are you looking for??')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Title* : ${i.title}
*Link* : ${i.link}
*Description* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break

case 'lirik':
case 'liriklagu':
if (!q) return reply(`Example : ${prefix + command} query`)
reply(mess.wait)
lah = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${q}&apikey=FuckBitch`)
reply(`${lah.result}`)
break

case 'igstalk':						
if (!q) return reply('mana username nya?')     
reply(mess.wait)
anu = await fetchJson(`https://sanuw-api.herokuapp.com/docs/other/igstalk?username=${q}&apikey=sanuwa`)				
reply2 = `*Username* : ${anu.result.Username}\n*FullName* ${anu.result.Fullname}\n*Catagory* : ${anu.result.Catagory}\n*Followers* : ${anu.result.Followers}\n*Following* : ${anu.result.Following}\n*Post* : ${anu.result.Posts}\n*Veryfied* : false\n*Private* : ${anu.result.Is_Private}\n*Link* : https://instagram.com/${anu.result.Username}\n*Biodata* : ${anu.result.Biography}`
sendMediaURL(from, anu.result.Profile_Pic, reply2, ftrol)				
break

case 'cerpen':						
  // if (!q) return reply('mana username nya?')     
reply(mess.wait)
anu = await fetchJson(`https://cakrayp.herokuapp.com/api/cerpen?apikey=cakrayp24Q6`)				
reply(`*${anu.result.story}*`)
break

case 'get':				
case 'fetchJson':
case 'axios':
if (!q) return reply('mana link nya?')     
reply(mess.wait)
anu = await fetchJson(`https://dhn-api.herokuapp.com/api/fetcher/axios?url=${q}&apikey=3f51d8feebfaf7cd6bcc`)				
reply(`*${anu.result}*`)
break
//━━━━━━━━━━━━━━━[ TEXT PRO ]━━━━━━━━━━━━━━━━━//                                                      

case 'thunder':               
case 'demon':
case 'magma':
case 'glitch':
case 'devil':
case 'graffiti':
case 'skeleton':
case 'blackpink':
case 'cloud':
case 'blood':
case 'lava':
case 'firework':
case 'toxic':
case 'neon':
case 'greenneon':
case 'glitter':
case 'glow':
case 'galaxy':
case 'firetext':
case 'innefire':
case 'shake':
case 'comics':
case 'scribble':
if (args.length == 0) return reply(`Example: ${prefix + command} AlyaBot`)
ini_txt = args.join(" ")
getBuffer(`https://api.zekais.com/textpro/${command}?text=${ini_txt}&apikey=${apikey3}`).then((gambar) => {
nino.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol})
})                    
break

//━━━━━━━━━━━━━━━[ GAME MENU ]━━━━━━━━━━━━━━━━━//   

case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
anu = await fetchJson(`https://hardianto.xyz/api/kuis/tebakgambar?apikey=hardianto`)
anu = anu
ini_image = anu.image
jawaban = anu.jawaban
ini_buffer = await getBuffer(ini_image)
clue = anu.clue
buff = await getBuffer(ini_image)
nino.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+clue+'\nWaktu : 30s' }).then(() => {
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
titid = "*Jawaban*: " + jawaban
sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
{
buttonId: `${prefix}tebakgambar`,
buttonText: {
displayText: `Main Lagi`,
},
type: 1,
},]);
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
break

case 'tebakkata':
if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://hardianto.xyz/api/tebakkata?apikey=hardianto`)
anu = anu
jawaban = anu.jawaban
pertanyaan = anu.soal
nino.sendMessage(from, '```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: ftrol}).then(() => {
tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
await sleep(30000)
if (tebakata.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
break

//---------------[ Masih eror ]-----------------
//case 'trigerr':
//case 'comunism':
//case 'rotate':
//case 'delete':
//case 'wanted':
//case 'wasted':
//case 'rip':
//case 'jail':
//case 'pixelate':
//case 'fuse':
//case 'spongebobburn':
//case 'thuglife':
//case 'tobecontinued':
//case 'youtubecomment':
//case 'customtrigerred':
//if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) { 
//boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(ftrol).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ftrol
//owgi = await nino.downloadMediaMessage(boij)
//res = await uploadImages(owgi)
//reply(mess.wait)
//buff = await getBuffer(`https://api.zekais.com/${command}?url=${res}&apikey=${apikey3}`)
//nino.sendMessage(from, buff, image, {quoted: ftrol, caption: `${faketeks}`})
//} else {
//reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix + command}`)
//}
//break                                                      

//━━━━━━━━━━━━━━━[ ANIMEK ]━━━━━━━━━━━━━━━━━//                                                       
case 'neko':
reply(mess.wait)
lah = await fetchJson(`https://api.waifu.pics/sfw/neko`)
buffer1 = await getBuffer(lah.url)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)  
case 'milf':
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randommilf?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)  
case 'husbu':
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randomhusbu?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)  
case 'waifu':
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randomwaifu?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)                    
break
case 'loli':
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randomloli?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)                    
break
case 'shota':
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randomshota?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)
case 'kiss':
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randomkiss?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)    
case 'hug':
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randomhug?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)
case 'baka': 
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randombaka?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)
case 'wallpaperanime':
reply(mess.wait)
lah = await fetchJson(`https://api.zekais.com/randomwallpaperanime?apikey=${apikey3}`)
buffer1 = await getBuffer(lah.result)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)
//━━━━━━━━━━━━━━━[ NSFW ]━━━━━━━━━━━━━━━━━//
case 'nsfwneko':
reply(mess.wait)
lah = await fetchJson(`https://api.waifu.pics/nsfw/neko`)
buffer1 = await getBuffer(lah.url)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)
case 'nsfwwaifu':
reply(mess.wait)
lah = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
buffer1 = await getBuffer(lah.url)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
) 
case 'nsfwtrap':
reply(mess.wait)
lah = await fetchJson(`https://api.waifu.pics/nsfw/trap`)
buffer1 = await getBuffer(lah.url)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)
case 'nsfwblowjob':
reply(mess.wait)
lah = await fetchJson(`https://api.waifu.pics/nsfw/blowjob`)
buffer1 = await getBuffer(lah.url)
nino.sendMessage(from, buffer1, image, {thumbnail: Buffer.alloc(0), caption: `${faketeks}`, quoted : ftrol}
)                                                                                                                                    
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return nino.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.iszero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
// Tq zero kwontol
}
}
