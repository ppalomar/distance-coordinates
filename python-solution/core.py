from utils.data import getData
from utils.distance import distance

def getCitiesInRadius(radius, origin):
    cities = getData();
    citiesInRadius = []
    
    for city in cities:
        dist = distance(origin['lat'], origin['lon'], city['lat'], city['lon'])
        #print('distance from Dublin to {:s} is {:f}'.format(city['city'], dist))
        if dist <= radius:
            citiesInRadius.append(city)
    
    cityNames = mapCityNames(citiesInRadius)
    sortedNames = sorted(cityNames)
    print('Cities in a {:d} km radius from Dublin:'.format(radius))
    print('------------------------------------------')
    for name in sortedNames:
        print(name)

def mapCityNames(cities):
    return  list(map(lambda x: x['city'], cities))
    
if __name__ == '__main__':
    print('do the tests here')