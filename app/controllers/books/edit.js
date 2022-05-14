import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import { get, set } from '@ember/object';

export default Controller.extend({
    dataService: service('data'),
    actions:{
        async saveBook(e){
            e.preventDefault();
      
            set(this, 'isUploadingFile', true);
            const uploadData = get(this, 'uploadData');
            
            await this.get("dataService").createBook({
                id: this.get('id'),
                Name: this.get('Name'),
                Author: this.get('Author'),
                PCount: this.get('PCount'),
              url: this.get('DiscrUrl'),
              tags: this.get('tags'),
              coverURL: '',
            }, uploadData, this.get('isCreate'),this.get('id'));
      
            set(this, 'isUploadingFile', false);
            //this.transitionToRoute('books');
           // await this.get("dataService").updateBook(book);
            this.transitionToRoute('books.index');
            
        },
        changeTags(newTags) {
            set(this, 'tags', [...newTags]);
      
            // eslint-disable-next-line no-console
            console.log(get(this, 'tags'));
          },
      
       
    }
});
