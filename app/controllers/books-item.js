import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

    
export default Controller.extend({
    dataService: service('data'),
    // actions:{
    //     async delete(id){
           
    //         await this.get('dataService').deliteBook(id);
    //          this.refresh();
            
            
    //     }
    // }
});
