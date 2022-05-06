import Service from '@ember/service';
import ENV from 'books-demo/config/environment';
//
export default Service.extend({
    getDataSpeackers(){
       return fetch(`${ENV.backEndURL}/speackers`).then((response)=> response.json())        
    },
    getDataBooks(){
        return fetch(`${ENV.backEndURL}/books`).then((response)=> response.json())        
    },

    getBook(id){
        return fetch(`${ENV.backEndURL}/books/${id}`).then((response)=> response.json())    
    },
    deliteBook(author){
        return fetch(`${ENV.backEndURL}/books/${author.id}`,{method: 'DELETE'});
    }
});
