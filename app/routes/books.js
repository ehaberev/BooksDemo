import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';
export default Route.extend({
    queryParams:{
        search: {
            refreshModel:true
        }
    },

    dataService: service('data'),

    model({ search }){
        return new Promise((resolve, reject)=>{
             later(async()=>{
                 try{
                     let book = search ? await this.get("dataService").getDataBooks(search):await this.get("dataService").getDataBooks();
                     resolve(book);
                 }
                 catch(e){
                     reject("Conn faild")
                 }
                 
             },1000)
         })
          
     },
     actions: {
        refreshAuthors() {
          this.refresh();
        },
        loading(transition, originRoute) {
          return false;
        }
    }
});
