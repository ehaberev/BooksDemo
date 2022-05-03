import Service from '@ember/service';
//
export default Service.extend({
    getDataSpeackers(){
       return fetch("http://localhost:3000/speackers").then((response)=> response.json())        
    },
    getDataBooks(){
        return fetch("http://localhost:3000/books").then((response)=> response.json())        
    }
});
