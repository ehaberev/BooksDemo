import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import EmberObject from '@ember/object';

export default Controller.extend({
    init(){
        this._super(...arguments);
        this.set('speacker',EmberObject.create())
        this.set('speacker').set('lastName', '');
        this.set('speacker').set('firstName', '');
        this.set('speacker').set('patronymic', '');
    },
    dataService: service('data'),
    actions:{
        async createSpeacker(book){            
            await this.get("dataService").createSpeacker(book);
            this.transitionToRoute('speackers.index');
        }
       
    }
    
});
