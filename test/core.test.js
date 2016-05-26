import Core from '../core/core.js';

describe("core.js tests", function() {
  let instance, fakeData, fakeDistance;
  
  beforeEach(function() {
      fakeData = {
        getCities: function () {}
      };
      
      fakeDistance = {
        getCitiesInRadius: function () {}  
      };
  })
  
  it("check that function execute() works properly", function() {
    let mockCities = [{id: 1, city: 'Valencia'}, {id: 2, city: 'Barcelona'}, {id: 3, city: 'Madrid'}];  
    
    sinon.stub(fakeData, 'getCities', function() {
        return new Promise((resolve, reject) =>
        {
            resolve(mockCities);
        });
    });
    
    let mockCitiesInRadius = [{id: 1, city: 'Valencia'}, {id: 2, city: 'Barcelona'}];
    var stubDistance = sinon.stub(fakeDistance, 'getCitiesInRadius');
    stubDistance.withArgs(mockCities).returns(mockCitiesInRadius);
      
    instance = new Core(fakeData, fakeDistance);
    var result = instance.execute();
    
    setTimeout(function() {
        expect(result).toEqual(['Barcelona', 'Valencia']);
        done();
    }, 100);
  });
  
  it("check that function sort() works properly", function() {
    let mockCities = [{id: 1, city: 'Valencia'}, {id: 2, city: 'Barcelona'}, {id: 3, city: 'Madrid'}];
    instance = new Core(fakeData, fakeDistance);
    var result = instance.map(mockCities);
    expect(result).toEqual(['Valencia', 'Barcelona', 'Madrid']);
  });
  
  it("check mapping function works properly", function() {
    let mockCities = ['Valencia', 'Barcelona'];
    instance = new Core(fakeData, fakeDistance);
    var result = instance.sort(mockCities);
    expect(result).toEqual(['Barcelona', 'Valencia']);
  });
});