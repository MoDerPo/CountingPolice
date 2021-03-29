import json
open('properties.json') as f:
data = json.load(f)
print("Here you can edit your bot's properties. To not change a propertie, leave it blank (just press ENTER)")
emoji = input("Enter your emoji's ID and name here")
if emoji != '':
	data["emoji"] = emoji
	json.dump(data, f)
token = input("Enter your bot's token here")
if token != '':
	data["token"] = token
	json.dump(data, f)
status = input("Enter if your bot's status will be online, idle or Do not disturb here (for Do not disturb enter dnd)")
if status != '' and status in ["online", "idle", "dnd"]:
	data["status"]["status"] = status
	json.dump(data, f)
gamename = input("Enter what you wanna set as the bot's game name")
if gamename != '':
	data["status"]["game"]["name"] = gamename
	json.dump(data, f)
gametype = input("Enter what you wanna set as the bot's game status")
if gametype != '':
	data["status"]["game"]["type"] = gametype
	json.dump(data, f)
