/*
    Copyright (C) 2021  MoDerPo

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License in CountingPolice\LICENSE for more details.

    Contact me via discord: Moderpo #0172
*/
const package_json = require('./package.json')
console.log(`Counting Police ${package_json.version} by @Moderpo#0172 initiated`)
const fs = require(`fs`),
    Discord = require(`discord.js`)
console.log(`Discord.js and fs Library loaded`)
const client = new Discord.Client()
console.log(`client defined.`)
const emoji = ``
/////add your emoji name and id above but keep in mind that throughout the code I use the const "emoji"!/////
console.log(`Emojis Loaded.`)
client.login(``)
/////ad your token above/////

//#region Start Bot
client.once(`ready`, () => {
    console.log(`online.`)
    ////#region Presence
    client.user.setPresence({
        status: `online`, // Options: online, idle, dnd (do not disturb)
        game: {
            name: `The numbers`, // what the bot is watching, playing, listening or streaming
            type: `WATCHING` // Options: PLAYING, WATCHING, LISTENING, STREAMING,
        }
        //#endregion
    })
})
//#endregion

//#region Counting
const count = ``
    /////add your counting channel ID above/////
console.log(`Counting channel:   <#${count}>`)

fs.readFile(`score`, (err, score_buffer) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`score: ${score_buffer}`)
})
fs.readFile(`user`, (err, id_buffer) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`user: ${id_buffer}`)
})

client.on(`message`, message => {
    if (message.content) {
        console.log(`Message recieved:\n"${message.content}"`)
    } else {
        console.log(`Recieved empty message. That happens when there's an embed. You can go check the message here: ${message.url}.`)
    }
    if (message.channel.id == count) {
        console.log(`channel: #${message.channel.name}. Reading score...`)
        fs.readFile(`score`, (err, score_buffer) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(`read ${score_buffer} from file "score".`)
            let score = parseInt(score_buffer, 10)
            console.log(`converted the contents of score (${score_buffer}, buffer) to int: ${score}`) 
            console.log(`score: ${score}`)
            console.log(`expected number: ${score+1}`)
            if (/[^a-zA-Z]/.test(message.content)) {
                console.log(`${message.content} contains a number.`)
                let num_string = message.content.replace(/^\D+/g, ``),
                    num = parseInt(num_string, 10)
                if (num == score + 1) { 
                    //correct number
                    fs.readFile(`user`, (err, id_buffer) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                        console.log(`read ${id_buffer} from file "user".`)
                        let id = parseInt(id_buffer, 10)
                        console.log(`converted the contents of user (${id_buffer}, buffer) to int: ${id}`)
                        console.log(`User: <@${message.author.id}>`)
                        if (id == message.author.id) {
                            //wrong user
                            console.log(`${message.author.id} is the wrong user.`)
                            message.react(emoji)
                            message.delete({timeout: 5000}, `Wrong user`)
                        } else {console.log(`${id} is not equal to\n${message.author.id}`)
                        console.log(`The number ${num} is correct and by the correct user (<@${message.author.id}>). The last user was ${id}`)
                        fs.writeFile(`score`, num.toString(), (err) => {
                            if (err) throw err
                            console.log(`updated score.`)
                        })
                        fs.writeFile(`user`, message.author.id, (err) => {
                            if (err) throw err
                            console.log(`updated user id.`)
                        })}
                    })
                } else {
                    //wrong number
                    console.log(`${num} is the wrong number.`)
                    message.react(emoji)
                    message.delete({timeout: 5000}, `Wrong user`)
                }
            } else {
                //NaN
                console.log(`${message.content} does not contain a number`)
                message.react(emoji)
                message.delete({timeout: 5000}, `Wrong user`)
            }
        })
        //outside
    } else console.log(`message is outside of the counting channel.`)
})
//#endregion