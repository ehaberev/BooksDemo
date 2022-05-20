import Component from '@ember/component';

export default Component.extend({
    actions:{
        deleteSpeacker(id) {
          this.get('deleteSpeacker')(id);
        }
    }
});
