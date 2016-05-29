from utils.data import get_data
from utils.distance import distance

def get_cities_in_radius(radius, origin):
    cities = get_data();
    cities_in_radius = []
    
    for city in cities:
        dist = distance(origin['lat'], origin['lon'], city['lat'], city['lon'])
        #print('distance from Dublin to {:s} is {:f}'.format(city['city'], dist))
        if dist <= radius:
            cities_in_radius.append(city)
    
    city_names = map_city_names(cities_in_radius)
    sorted_names = sorted(city_names)
    print('Cities in a {:d} km radius from Dublin:'.format(radius))
    print('------------------------------------------')
    for name in sorted_names:
        print(name)

def map_city_names(cities):
    return  list(map(lambda x: x['city'], cities))
    
if __name__ == '__main__':
    print('do the tests here')