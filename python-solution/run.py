from core import get_cities_in_radius

def main():
    radius = 500
    origin = {'lat': 53.333, 'lon': -6.267 }
    get_cities_in_radius(radius, origin)

if __name__ == '__main__':
    main()    