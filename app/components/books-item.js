import Component from '@ember/component';
import {inject as service} from "@ember/service";

export default Component.extend({
    dataService: service('data'),
    actions:{
       async deleteBook(id){
            //console.log(this);
            await this.get('dataService').deliteBook(id);
            
            this.send('refr');
              
            
        }
    }
});
