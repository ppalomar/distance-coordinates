import DataLoader from './data.js';
import Distance from './distance.js';
import _ from 'lodash';

class main{
    constructor(){
        this.execute();
    }
    
    async execute(){
        let data = new DataLoader();
        let cities = await data.getCities();
        let origin = { lat: 53.333, lon: -6.267 };
        let radius = 500;

        let dist = new Distance();
        var citiesInRadius = dist.getCitiesInRadius(radius, origin, cities);
        console.log(_.map(citiesInRadius, (c) => { return c.city; }));
    }
}
export default main;

let m = new main();