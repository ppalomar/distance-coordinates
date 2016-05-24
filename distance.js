Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}

class Distance{
    controler(){}
    
    getDistance(origin, dest){
        let R = 6371e3;
        let φ1 = origin.lat.toRad();
        let φ2 = dest.lat.toRad();
        let Δφ = (dest.lat - origin.lat).toRad();
        let Δλ = (dest.lon - origin.lon).toRad();

        let a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        let d = R * c / 1000;
        console.log(`From: Dublin To: ${dest.city} Distance: ${d.toString()} km`);
        return d;
    }
    
    getCitiesInRadius(radius, origin, cities){
        let InRadius = [];
        for (let city of cities){
            if(this.isInRadius(radius, origin, city)){
                InRadius.push(city);
            }
        }
        return InRadius;
    }
    
    isInRadius(radius, origin, destination){
        return radius >= this.getDistance(origin, destination);
    }
}
export default Distance;