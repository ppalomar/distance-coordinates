import $ from 'jquery';

let URL = 'https://gist.githubusercontent.com/mwtorkowski/16ca26a0c072ef743734/raw/2aa20e8de9f2292d58a4856602c1f0634d8611a7/cities.json';

class DataLoader{
    constructor(){}
    getCities(){
        return new Promise((resolve, reject) => {
            $.get(URL, ( data ) => {
                resolve(this.mapJson(JSON.parse(data)));
            });
        });
    }
    
    mapJson(obj){
        return $.map(obj, (el) => { return el })
    }
}
export default DataLoader;