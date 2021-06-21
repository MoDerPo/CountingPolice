'''
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
'''
#const obj = JSON.parse(text)
import json
with open('package.json') as f:
	package_json = f.read()
print('Counting Police {version} by @Moderpo#0172 initiated'.format(version = package_json.version))
print('A lot of thanks to @Oakchris1955#3805')
with open('properties.json') as f:
	jsondata = json.load(f)
import discord
console.log('Discord.py and json loaded')
client = discord.Client()
print('Client defined.')
emoji = jsondata['emoji']
print('Emojis Loaded.')
client.login(jsondata['token'])

#region Start Bot
@client.event()
async def on_ready():
	print("We've logged in as {name}".format(name = client.user.name)
    #region Presence
'''    client.user.setPresence({
        status: jsondata['status']['status'], // Options: online, idle, dnd (do not disturb)
        game: {
            name: jsondata['status']['game']['name'], // what the bot is watching, playing, listening or streaming
            type: jsondata['status']['game']['type'] // Options: PLAYING, WATCHING, LISTENING, STREAMING,
        }
        //#endregion
    })'''
})
#endregion

#region Counting
count = jsondata['channel id']
print(jsondata["token"])
print('Counting channel ID:   {count}'.format(count = count))
score = jsondata['score']
print('Score : {score}'.format(score=score))
user =  jsondata['user']
print('User : {user}'.format(user=user))

@client.event()
async def on_message(message):
	msg = message.content
	if msg:
		print('Message recieved:\n{msg}'.format(msg=msg))
	else:
		print("Recieved empty message. That happens when there's an embed. You can go check the message here: {url}.".format(url=message.jump_url))

	if message.channel.id == count:
		print('Dhannel: {channel}. Reading score...'.format(channel=message.channel.name))
	with open('score') as f:
		score_buffer = f.read()
	print('Read {score_buffer} from file "score".'.format(score_buffer=score_buffer)
	local score = jsondata["score"]
	print('Converted the contents of score ({score_buffer}, buffer) to int: {score}'.format(score_buffer=score_buffer, score=score)) 
	print('Score: {score}'.format(score=score))
	print('expected number: {score1}'.format(score1=score+1))
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
					let id = jsondata['user']
					console.log(`converted the contents of user (${id_buffer}, buffer) to int: ${id}`)
					console.log(`User: <@${message.author.id}>`)
					if (id == message.author.id) {
						//wrong user
						console.log(`${message.author.id} is the wrong user.`)
						message.react(emoji)
						message.delete({timeout: 1000}, `Wrong user`)
					} else {console.log(`${id} is not equal to\n${message.author.id}`)
					console.log(`The number ${num} is correct and by the correct user (<@${message.author.id}>). The last user was ${id}`)
					jsondata['score'] = num
					jsondata['user'] = message.author.id
					fs.writeFile(`properties.json`, JSON.stringify(jsondata), (err) => {
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
