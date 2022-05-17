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
    model({search}){
        // // //console.log(searchT);
        // // return new Promise((resolve, reject)=>{
        // //      later(async()=>{
        // //          try{
        // //              let spk = search ? await this.get("dataService").getDataSpeackers(search): await this.get("dataService").getDataSpeackers();
        // //              resolve(spk);
        // //          }
        // //          catch(e){
        // //              reject("Conn faild")
        // //          }
                 
        // //      },1000)
        //  })
        //   let promise = this.get('store').findAll();
        //   return promise;

     //},
    //  setupController(controller, model){
    //     this._super(...arguments);
     },
     actions:{
         refresh(){
            this.refresh();
         }
     }
    
    
});
