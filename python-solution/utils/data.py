import urllib.request
import json

def get_data():
    url = 'https://gist.githubusercontent.com/mwtorkowski/16ca26a0c072ef743734/raw/2aa20e8de9f2292d58a4856602c1f0634d8611a7/cities.json'
    with urllib.request.urlopen(url) as response:
        json_obj = to_json(response.read())
        cities_dict = map_in_list(json_obj) 
        return cities_dict

def to_json(data_bytes):
    return json.loads(data_bytes.decode('utf8'))
    
def map_in_list(json_array):
    list = []
    for key in json_array.keys():
        list.append(json_array[key])
    return list
    
if __name__ == '__main__':
    print('here do the tests')