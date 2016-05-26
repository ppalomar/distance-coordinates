import DataLoader from '../core/data.js';

describe("data.js tests", function() {
  let instance;
  
  it("check that function mapJson() works properly", function() {
    let mockJson ={ "adak": {
                        "lat": 51.883,
                        "lon": -176.633,
                        "wikipedia": "Adak,_Alaska",
                        "city": "Adak" },
                    "test": {
                        "lat": -21.133,
                        "lon": -175.2,
                        "wikipedia": "test",
                        "city": "test"}};
                    
    let expected = [{ "lat": 51.883,
                        "lon": -176.633,
                        "wikipedia": "Adak,_Alaska",
                        "city": "Adak"
                    },{
                        "lat": -21.133,
                        "lon": -175.2,
                        "wikipedia": "test",
                        "city": "test" }];
                   
    instance = new DataLoader();
    var result = instance.mapJson(mockJson);
    expect(result).toEqual(expected);
  });
});