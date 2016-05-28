from core import getCitiesInRadius

def main():
    radius = 500
    origin = {'lat': 53.333, 'lon': -6.267 }
    getCitiesInRadius(radius, origin)

if __name__ == '__main__':
    main()    