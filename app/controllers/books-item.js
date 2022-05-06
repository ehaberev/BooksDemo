import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

    
export default Controller.extend({
    dataService: service('data'),
    actions:{
       async deleteBook(book){
            //console.log(this);
            await this.get('dataService').deleteBook(book);
            this.transitionToRoute('books');
            
        }
    }
});
