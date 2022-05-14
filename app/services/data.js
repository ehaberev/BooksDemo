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
    async createBook(book, uploadData, isCreate,bookid) {
        return new Promise(async (resolve, reject) => {
            
         if(isCreate==true){
            try {
                const savedBookPromise = await fetch(`${ENV.backendURL}/books`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(book)
                });
                const savedBook = await savedBookPromise.json();
    
                if (!uploadData) {
                resolve();
                }      
            uploadData.url = `${ENV.fileUploadURL}`;
            // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
           
            uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
              try {
                const dataToUpload = {
                  entityName: 'books',
                  id: savedBook.id,
                  fileName: result.filename
                };
    
                await fetch(`${ENV.backendURL}/saveURL`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(dataToUpload)
                });
    
                // eslint-disable-next-line no-console
                console.log('Ok');
                resolve();
              }
              catch (e) {
                reject(e);
              }
            }).fail((jqXhr, textStatus, errorThrown) => {
              reject(errorThrown);
            });
          }
          catch (e) {
            reject(e);
          }
        }
        else{
            try {
                const savedBookPromise = await fetch(`${ENV.backEndURL}/books/${book.id}`,{
                    method: 'PATCH',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                });
                const savedBook = await savedBookPromise.json();
                
                if (!uploadData) {
                resolve();
                }
                uploadData.url = `${ENV.fileUploadURL}`;
               
                uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
                    try {
                      const dataToUpload = {
                        entityName: 'books',
                        id: bookid,
                        fileName: result.filename
                      };
                      
                      await fetch(`${ENV.backEndURL}/saveURL`, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(dataToUpload)
                      });
          
                      // eslint-disable-next-line no-console
                      console.log('Ok');
                      resolve();
                    }
                    catch (e) {
                      reject(e);
                    }
                  }).fail((jqXhr, textStatus, errorThrown) => {
                    reject(errorThrown);
                  });
                }
                catch (e) {
                  reject(e);
                }  
           
        }
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
