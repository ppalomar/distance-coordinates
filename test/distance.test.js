import Distance from '../core/distance.js';

describe("distance.js tests", function() {
  let instance;
  
  it("check that the distance between cities is calculated properly ", function() {
    let origin ={ lat: 39.4666667, lon: -0.3666667 }; //Valencia
    let destiny ={ lat: 40.415363, lon: -3.707398 }; //Madrid
                   
    instance = new Distance();
    var result = instance.getDistance(origin, destiny);
    
    let expected = 303.69343825469184; //303 km
    expect(result).toEqual(expected);
  });
    
  it("check that we get properly the cities in radius", function() {
    let origin = { lat: 39.4666667, lon: -0.3666667, city: 'Valencia' };
    let cities = [{ lat: 40.415363, lon: -3.707398, city: 'Madrid' }, { lat: 41.390205, lon: 2.154007, city: 'Barcelona' }]; 
    let expected = [{ lat: 41.390205, lon: 2.154007, city: 'Barcelona' }];
    let radius = 302.5; 
                   
    instance = new Distance();
    var result = instance.getCitiesInRadius(radius, origin, cities);
    
    expect(result).toEqual(expected);
  });  
  
  it("check that we get properly the cities in radius", function() {
    let origin = { lat: 39.4666667, lon: -0.3666667, city: 'Valencia' };
    let madrid = { lat: 40.415363, lon: -3.707398, city: 'Madrid' };
    let barcelona = { lat: 41.390205, lon: 2.154007, city: 'Barcelona' };
    let radius = 302.5; 
                   
    instance = new Distance();
    var result = instance.isInRadius(radius, origin, madrid);
    expect(result).toBe(false);
    
    result = instance.isInRadius(radius, origin, barcelona);
    expect(result).toBe(true);
  });  
  
});