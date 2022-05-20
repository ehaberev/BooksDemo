import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    dataService: service('data'),
    queryParams: ["search"],
    search:'',

    actions: {
      async deleteSpeacker(id) {
          const speackerToDelete = this.get('store').peekRecord('speacker', id);
          if (speackerToDelete) {
            speackerToDelete.destroyRecord();
          }
      }
    }
});
