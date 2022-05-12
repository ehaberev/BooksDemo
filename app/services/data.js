import Service from '@ember/service';
import ENV from 'books-demo/config/environment';
//
export default Service.extend({
    getDataSpeackers(search){
        let queryParams='';
        if(search){
            queryParams =`?q=${search}`;
        }
        return fetch(`${ENV.backEndURL}/speackers${queryParams}`).then((response)=> response.json())        
    },
    getDataBooks(search, tagsSearch){
        let queryParams='';
        if(search && tagsSearch)
        {
           queryParams =`?q=${search}&tags_like=${tagsSearch}`;
        }
        else if(tagsSearch)
        {
            queryParams =`?tags_like=${search}`;
        }
        else if(search)
        { queryParams =`?q=${search}`;
            
        }
        return fetch(`${ENV.backEndURL}/books${queryParams}`).then((response)=> response.json())        
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
