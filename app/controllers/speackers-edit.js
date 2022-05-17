import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
export default Controller.extend({
    dataService: service('data'),
    actions:{
        async updateSpeacker(speacker){
           
            await this.get("dataService").updateSpeacker(speacker);
            this.transitionToRoute('speackers');
            
        }
        
       
    }
});
