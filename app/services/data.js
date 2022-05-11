import Service from '@ember/service';
import ENV from 'books-demo/config/environment';
//
export default Service.extend({
    getDataSpeackers(){
       return fetch(`${ENV.backEndURL}/speackers`).then((response)=> response.json())        
    },
    getDataBooks(search){
        let quertParams='';
        if(search){
            quertParams =`?q=${search}`;
        }
        return fetch(`${ENV.backEndURL}/books${quertParams}`).then((response)=> response.json())        
    },

    getBook(id){
        return fetch(`${ENV.backEndURL}/books/${id}`).then((response)=> response.json())    
    },
    deliteBook(id){
        return fetch(`${ENV.backEndURL}/books/${id}`,{method: 'DELETE'});
    },
    createBook(book){
        return fetch(`${ENV.backEndURL}/books`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    },
    updateBook(book){
        return fetch(`${ENV.backEndURL}/books/${book.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    },
    getSpeacker(id){
        return fetch(`${ENV.backEndURL}/speackers/${id}`).then((response)=> response.json())    
    },
    updateSpeacker(speacker){
        return fetch(`${ENV.backEndURL}/speackers/${speacker.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(speacker)
        });
    },
    deliteSpeacker(id){
        return fetch(`${ENV.backEndURL}/speackers/${id}`,{method: 'DELETE'});
    },
    createSpeacker(speacker){
        return fetch(`${ENV.backEndURL}/speackers`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(speacker)
        });
    }
    
});
