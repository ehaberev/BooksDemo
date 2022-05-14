import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
    queryParams:{
        search: {
            refreshModel:true
        },
        tagsSearch :{
            refreshModel:true
        }
    },
    dataService: service('data'),
    model({search,tagsSearch}){
        
        return new Promise((resolve, reject)=>{
             later(async()=>{
                 try{
                    let spk='';
                    if(search && tagsSearch){
                        spk=await this.get("dataService").getDataBooks(search,tagsSearch);                     
                     }
                     else if(search){
                        spk=await this.get("dataService").getDataBooks(search)
                     }
                     else if(tagsSearch)
                     {
                        spk=await this.get("dataService").getDataBooks(tagsSearch)
                     }
                     else{
                        spk = await this.get("dataService").getDataBooks();
                     }
                     
                     resolve(spk);
                 }
                 catch(e){
                     reject("Conn faild")
                 }
                 
             },1000)
         })
          
     },
     actions:{
         refr(){
             this.refresh
         }
     }
});
