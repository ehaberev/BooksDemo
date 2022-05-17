import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import EmberObject from '@ember/object';
import { get, set } from '@ember/object';
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
        async createSpeacker(speacker){            
            await this.get("dataService").createSpeacker(speacker);
            this.transitionToRoute('speackers');
        }
       
    }
    
});
