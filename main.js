import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './media/menus/Menuvid1.mp4'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
    

let str = `
*𝙷𝙾𝙻𝙰 ✨${name}✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾*

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*

*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*

*<𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ 𝔻𝔼𝕃 𝔹𝕆𝕋/>*

${usedPrefix}grupos_
${usedPrefix}cuentasgatabot_
${usedPrefix}estado_
${usedPrefix}infobot_
${usedPrefix}donar_
${usedPrefix}listagrupos_
${usedPrefix}velocidad_
${usedPrefix}owner_
Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*<𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆/>*

${usedPrefix}join *<enlace / link / url>*_

*<𝕁𝕌𝔼𝔾𝕆𝕊/>*

${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
${usedPrefix}ppt *<papel / tijera /piedra>*_
${usedPrefix}prostituto *<nombre / @tag>*_
${usedPrefix}prostituta *<nombre / @tag>*_
${usedPrefix}gay2 *<nombre / @tag>*_
${usedPrefix}lesbiana *<nombre / @tag>*_
${usedPrefix}pajero *<nombre / @tag>*_
${usedPrefix}pajera *<nombre / @tag>*_
${usedPrefix}puto *<nombre / @tag>*_
${usedPrefix}puta *<nombre / @tag>*_
${usedPrefix}manco *<nombre / @tag>*_
${usedPrefix}manca *<nombre / @tag>*_
${usedPrefix}rata *<nombre / @tag>*_
${usedPrefix}love *<nombre / @tag>*_
${usedPrefix}doxear *<nombre / @tag>*_
${usedPrefix}pregunta *<texto>*_
${usedPrefix}slot *<apuesta>*_
${usedPrefix}simi *<texto>*_
${usedPrefix}topgays_
${usedPrefix}topotakus_
${usedPrefix}formarpareja_
${usedPrefix}verdad_
${usedPrefix}reto_

*<𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ/>*

${usedPrefix}enable *welcome*_
${usedPrefix}disable *welcome*_
${usedPrefix}enable *modohorny*_
${usedPrefix}disable *modohorny*_
${usedPrefix}enable *antilink*_
${usedPrefix}disable *antilink*_
${usedPrefix}enable *antilink2*_
${usedPrefix}disable *antilink2*_
${usedPrefix}enable *detect*_
${usedPrefix}disable *detect*_
${usedPrefix}enable *audios*_
${usedPrefix}disable *audios*_
${usedPrefix}enable *autosticker*_
${usedPrefix}disable *autosticker*_

*<ℝ𝔼ℙ𝕆ℝ𝕋𝔼𝕊 𝔻𝔼 𝔽𝔸𝕃𝕃𝕆𝕊/>*

${usedPrefix}reporte *<texto>*_

*<𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊/>*

${usedPrefix}facebook *<enlace / link / url>*_
${usedPrefix}instagram *<enlace / link / url>*_
${usedPrefix}mediafire *<enlace / link / url>*_
${usedPrefix}instagram *<enlace / link / url>*_
${usedPrefix}gitclone *<enlace / link / url>*_
${usedPrefix}tiktok *<enlace / link / url>*_
${usedPrefix}ytmp3 *<enlace / link / url>*_
${usedPrefix}ytmp4 *<enlace / link / url>*_
${usedPrefix}play.1 *<texto / enlace / link / url>*_
${usedPrefix}play.2 *<texto / enlace / link / url>*_
${usedPrefix}play *<texto>*_
${usedPrefix}spotify *<texto>*_
${usedPrefix}imagen *<texto>*_
${usedPrefix}pinteret *<texto>*_
${usedPrefix}wallpaper *<texto>*_
${usedPrefix}wallpaper2 *<texto>*_
${usedPrefix}pptiktok *<nombre de usuario>*_
${usedPrefix}igstalk *<nombre de usuario>*_
${usedPrefix}tiktokstalk *<nombre de usuario>*_

*<𝔾ℝ𝕌ℙ𝕆𝕊/>* 

${usedPrefix}add *<numero>*_
${usedPrefix}kick *<@tag>*_
${usedPrefix}grupo *<abrir / cerrar>*_
${usedPrefix}promote *<@tag>*_
${usedPrefix}demote *<@tag>*_
${usedPrefix}banchat_
${usedPrefix}unbanchat_
admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
${usedPrefix}demote *<@tag>*_
${usedPrefix}infogroup_
${usedPrefix}link_
${usedPrefix}setname *<texto>*_
${usedPrefix}setdesc *<texto>*_
${usedPrefix}invocar *<texto>*_
${usedPrefix}setwelcome *<texto>*_
${usedPrefix}setbye *<texto>*_
${usedPrefix}hidetag *<texto>*_
${usedPrefix}simular *<welcome / bye / promote / demote>*_

*<ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊/>*

${usedPrefix}toimg *<responde a un sticker>*_
${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
${usedPrefix}toptt *<responde a un video / audio>*_
${usedPrefix}tovideo *<responde a un audio>*_
${usedPrefix}tourl *<responde a un video / imagen / audio>*_
${usedPrefix}tts es *<texto>*_

*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊/>*

${usedPrefix}logos *<efecto> <texto>*_
${usedPrefix}simpcard *<@tag>*_
${usedPrefix}hornycard *<@tag>*_
${usedPrefix}lolice *<@tag>*_
${usedPrefix}ytcomment *<texto>*_
${usedPrefix}itssostupid_
${usedPrefix}pixelar_
${usedPrefix}blur_

*<ℝ𝔸ℕ𝔻𝕆𝕄/>*

${usedPrefix}cristianoronaldo_
${usedPrefix}messi_
${usedPrefix}meme_
${usedPrefix}itzy_
${usedPrefix}blackpink_
${usedPrefix}kpop *<blackpink / exo / bts>*_
${usedPrefix}lolivid_
${usedPrefix}loli_
${usedPrefix}navidad_
${usedPrefix}ppcouple_
${usedPrefix}neko_
${usedPrefix}waifu_
${usedPrefix}akira_
${usedPrefix}akiyama_
${usedPrefix}anna_
${usedPrefix}asuna_
${usedPrefix}ayuzawa_
${usedPrefix}boruto_
${usedPrefix}chiho_
${usedPrefix}chitoge_
${usedPrefix}deidara_
${usedPrefix}erza_
${usedPrefix}elaina_
${usedPrefix}eba_
${usedPrefix}emilia_
${usedPrefix}hestia_
${usedPrefix}hinata_
${usedPrefix}inori_
${usedPrefix}isuzu_
${usedPrefix}itachi_
${usedPrefix}itori_
${usedPrefix}kaga_
${usedPrefix}kagura_
${usedPrefix}kaori_
${usedPrefix}keneki_
${usedPrefix}kotori_
${usedPrefix}kurumi_
${usedPrefix}madara_
${usedPrefix}mikasa_
${usedPrefix}miku_
${usedPrefix}minato_
${usedPrefix}naruto_
${usedPrefix}nezuko_
${usedPrefix}sagiri_
${usedPrefix}sasuke_
${usedPrefix}sakura_
${usedPrefix}cosplay_

*<ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠/>*

${usedPrefix}pack_
${usedPrefix}pack2_
${usedPrefix}pack3_
${usedPrefix}videoxxx_
${usedPrefix}tetas_
${usedPrefix}booty_
${usedPrefix}ecchi_
${usedPrefix}furro_
${usedPrefix}imagenlesbians_
${usedPrefix}panties_
${usedPrefix}pene_
${usedPrefix}porno_
${usedPrefix}porno2_
${usedPrefix}randomxxx_
${usedPrefix}pechos_
${usedPrefix}yaoi_
${usedPrefix}yaoi2_
${usedPrefix}yuri_
${usedPrefix}yuri2_
${usedPrefix}trapito_
${usedPrefix}hentai_
${usedPrefix}pies_
${usedPrefix}nsfwloli_
${usedPrefix}nsfworgy_
${usedPrefix}nsfwfoot_
${usedPrefix}nsfwass_
${usedPrefix}nsfwbdsm_
${usedPrefix}nsfwcum_
${usedPrefix}nsfwero_
${usedPrefix}nsfwfemdom_
${usedPrefix}nsfwglass_

*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

${usedPrefix}bass_
${usedPrefix}blown_
${usedPrefix}deep_
${usedPrefix}earrape_
${usedPrefix}fast_
${usedPrefix}fat_
${usedPrefix}nightcore_
${usedPrefix}reverse_
${usedPrefix}robot_
${usedPrefix}slow_
${usedPrefix}smooth_
${usedPrefix}tupai_

*<ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆/>*

${usedPrefix}start_
${usedPrefix}next_
${usedPrefix}leave_

*<𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊/>*

${usedPrefix}animeinfo *<texto>*_
${usedPrefix}google *<texto>*_
${usedPrefix}letra *<texto>*_
${usedPrefix}wikipedia *<texto>*_
${usedPrefix}ytsearch *<texto>*_

*<𝔸𝕌𝔻𝕀𝕆𝕊/>* 
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_

Quien es tu sempai botsito 7w7_
Te diagnostico con gay_
A nadie le importa_
Fiesta del admin_
Fiesta del administrador_ 
Vivan los novios_
Feliz cumpleaños_
Noche de paz_
Buenos dias_
Buenos tardes_
Buenos noches_
Audio hentai_
Chica lgante_
Feliz navidad_
Vete a la vrg_
Pasa pack Bot_
Atencion grupo_
Marica quien_
Murio el grupo_
Oh me vengo_
Viernes_
Baneado_
Sexo_
Hola_
Un pato_
Nyanpasu_
Te amo_
Yamete_
Bañate_
Es puto_
La biblia_
Onichan_
Mierda de Bot_
Siuuu_
Rawr_
UwU_
:c_
a_

*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*

${usedPrefix}afk *<motivo>*_
${usedPrefix}acortar *<enlace / link / url>*_
${usedPrefix}calc *<operacion math>*_
${usedPrefix}del *<respondre a mensaje del Bot>*_
${usedPrefix}qrcode *<texto>*_
${usedPrefix}readmore *<texto1| texto2>*_
${usedPrefix}spamwa *<numero|texto|cantidad>*_
${usedPrefix}styletext *<texto>*_
${usedPrefix}traducir *<texto>*_

*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*

${usedPrefix}balance_
${usedPrefix}claim_
${usedPrefix}top_
${usedPrefix}levelup_
${usedPrefix}myns_
${usedPrefix}perfil_
${usedPrefix}work_
${usedPrefix}minar_
${usedPrefix}buy_
${usedPrefix}buyall_
${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
${usedPrefix}verificar_
${usedPrefix}unreg *<numero de serie>*_

*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>*

${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
${usedPrefix}attp *<texto>*_
${usedPrefix}ttp *<texto>*_
${usedPrefix}pat *<@tag>_
${usedPrefix}slap *<@tag>_
${usedPrefix}kiss *<@tag>*_
${usedPrefix}dado_
${usedPrefix}wm *<packname> <author>*_
${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*

${usedPrefix}cajafuerte_
${usedPrefix}enable *restrict*_
${usedPrefix}disable *restrict*_
${usedPrefix}enable *autoread*_
${usedPrefix}disable *autoread*_
${usedPrefix}enable *public*_
${usedPrefix}disable *public*_
${usedPrefix}enable *pconly*_
${usedPrefix}disable *pconly*_
${usedPrefix}enable *gconly*_
${usedPrefix}disable *gconly*_
${usedPrefix}banchat2_
${usedPrefix}unbanchat2_
${usedPrefix}banuser *<@tag>*_
${usedPrefix}unbanuser *<@tag>*_
${usedPrefix}banuser *<@tag>*_
${usedPrefix}bc *<texto>*_
${usedPrefix}bcchats *<texto>*_
${usedPrefix}bcgc *<texto>*_
${usedPrefix}cleartpm_
${usedPrefix}restart_
${usedPrefix}update_
${usedPrefix}addprem *<@tag>*_
${usedPrefix}delprem *<@tag>*_
${usedPrefix}listprem_
${usedPrefix}añadirdiamantes *<@tag> <cantidad>*_
${usedPrefix}añadirxp *<@tag> <cantidad>*_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/JEIRONY', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['💖 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', null],
['💝 𝙈𝙚𝙣𝙪 𝘼𝙪𝙙𝙞𝙤𝙨 💝', '.audios']

], m,)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
