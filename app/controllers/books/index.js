import Controller from '@ember/controller';

export default Controller.extend({
    queryParams:["search","tagsSearch"],
    search:'',
    tagsSearch:'',
    actions:{
        goToCreate(){
            this.transitionToRoute('books-create')
        }

    }
});
