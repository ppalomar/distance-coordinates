import urllib.request
import json

def getData():
    url = 'https://gist.githubusercontent.com/mwtorkowski/16ca26a0c072ef743734/raw/2aa20e8de9f2292d58a4856602c1f0634d8611a7/cities.json'
    with urllib.request.urlopen(url) as response:
        jsonObj = toJson(response.read())
        citiesDict = mapInList(jsonObj) 
        return citiesDict

def toJson(dataBytes):
    return json.loads(dataBytes.decode('utf8'))
    
def mapInList(jsonArray):
    list = []
    for key in jsonArray.keys():
        list.append(jsonArray[key])
    return list
    
if __name__ == '__main__':
    print('here do the tests')