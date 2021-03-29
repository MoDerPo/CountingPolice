import json
import time
data = {}
with open('properties.json', 'r+') as f:
        #print(f.read())
        data = json.load(f)
        print("Here you can edit your bot's properties. To not change a propertie, leave it blank or enter an invalid value(just press ENTER)")
        emoji = input("Enter your emoji's ID and name here")
        if emoji != '':
                data["emoji"] = emoji
                #json.dump(data, f)
        token = input("Enter your bot's token here")
        if token != '':
                data["token"] = token
                #json.dump(data, f)
'''        status = input("Enter if your bot's status will be online, idle or Do not disturb here (for Do not disturb enter dnd)")
        if status != '' and status in ["online", "idle", "dnd"]:
                data["status"]["status"] = status
                #json.dump(data, f)
        gamename = input("Enter what you wanna set as the bot's game name")
        if gamename != '':
                data["status"]["game"]["name"] = gamename
                #json.dump(data, f)
        gametype = input("Enter what you wanna set as the bot's game status (Options: PLAYING, WATCHING, LISTENING, STREAMING)")
        if gametype != '' and gametype in ["PLAYING", "WATCHING", "LISTENING", "STREAMING"]:
                data["status"]["game"]["type"] = gametype
                #json.dump(data, f)'''
        channel_id = input("Enter your channel's ID here")
        if channel_id != '' and channel_id.isdigit():
                data["channel id"] = channel_id
with open('properties.json','w') as f:
        json.dump(data, f)
time.sleep(1)
