import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import EmberObject from '@ember/object';

export default Controller.extend({
    init(){
        this._super(...arguments);
        this.set('book',EmberObject.create())
        this.set('book').set('Name', '');
        this.set('book').set('Author', '');
        this.set('book').set('PCount', '');
        this.set('book').set('IMGurl', '');
        this.set('book').set('DiscrUrl', '');
        this.set('book').set('tags', '');
    },
    dataService: service('data'),
    actions:{
        async saveBook(book){            
            await this.get("dataService").createBook(book);
            this.transitionToRoute('books.index');
        }
       
    }
    
});
