import _ from 'lodash';

class Core{
    constructor(data, dist){
        this.data = data;
        this.dist = dist;
        this.origin = { lat: 53.333, lon: -6.267 };
        this.radius = 500;
    }
    
    async execute(){
        let cities = await this.data.getCities();
        let citiesInRadius = this.dist.getCitiesInRadius(this.radius, this.origin, cities);
        let mappedCities = this.map(citiesInRadius);
        let sortedCities = this.sort(mappedCities);
        return sortedCities;
    }

    map(cities){
        return _.map(cities, (c) => { return c.city; })
    }

    sort(cities){
        return _.sortBy(cities);
    }
}
export default Core;