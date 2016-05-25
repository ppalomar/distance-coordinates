import DataLoader from './data.js';
import Distance from './distance.js';
import _ from 'lodash';

class Core{
    constructor(){
        this.data = new DataLoader();
        this.dist = new Distance();
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