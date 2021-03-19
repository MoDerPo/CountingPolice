console.log(`Counting Police initiated`)
const fs = require(`fs`),
      Discord                               = require(`discord.js`)
console.log(`Discord.js and fs Library loaded`)
        const client                                = new Discord.Client()
console.log(`client defined.`)
        const gun_up                        = `Emoji ID`
console.log(`Emojis Loaded.`)
              client.login                          ( `dQw4w9WgXcQ`)

//#region Start Bot
    client.once(`ready`, () => {
        console.log(`online.`)
        ////#region Presence
        client.user.setPresence({
            status: `online`,       // Options: online, idle, dnd (that means do not disturb)
            game: {
                name: `The numbers`,  // what the bot is watching, playing, listening or streaming
                type: `WATCHING`    // Options: PLAYING, WATCHING, LISTENING, STREAMING,
            }
        //#endregion
        })
    })
//#endregion

//#region Counting
const   count = `Channel ID`,
        test  = `Channel ID`
console.log(`Counting channel:   <#${count}> \nTesting channel:    <#${test}>`)



client.on(`message`, message =>{
    console.log(`Message recieved: ${message.content}`)
    if ((message.channel.id == test) || (message.channel.id == count)){
        console.log(`channel: #${message.channel.name}. Reading score...`)
        fs.readFile(`score`, (err, score_buffer) => {
            if (err) {
              console.error(err)
              return}
          console.log(`read ${score_buffer} from file "score".`)
          let score = parseInt(score_buffer, 10)
          console.log(`converted the contents of score (${score_buffer}) to int: ${score}`)
          console.log(`score: ${score}`)
        console.log(`expected number: ${score+1}`)
        if (/[^a-zA-Z]/.test(message.content)){
        console.log(`${message.content} contains a number.`)
        let num_string = message.content.replace( /^\D+/g, ``)
        let num = parseInt(num_string, 10)
        if (num == score+1){
            console.log(`The number ${num} is correct.`)
            fs.writeFile(`score`, num.toString(), (err) => {
                if (err) throw err;
                console.log(`updated score`)
              })        
        } else {
            console.log(`${num} is the wrong number.`)
            message.react(gun_up)
        }
    } else {
        console.log(`${message.content} does not contain a number`)
    }})
} else console.log(`message is outside of the counting channel.`)
})
//#endregion