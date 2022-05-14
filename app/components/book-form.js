import Component from '@ember/component';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    dataService: service('data'),
    actions:{
        
        async saveBook(e) {
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
          },
        changeTags(newTags) {
            set(this, 'tags', [...newTags]);
      
            // eslint-disable-next-line no-console
            console.log(get(this, 'tags'));
          },
          changeUploadData(uploadData) {
            set(this, 'uploadData', uploadData);
          }
    },
    didReceiveAttrs(){
        this._super(...arguments);
        
        this.setProperties({
            id: this.get('book.id') !== undefined ? this.get('book.id') : undefined,
            Name: this.get('book.Name'),
            Author: this.get('book.Author'),
            PCount: this.get('book.PCount'),
            fileName: this.get('book.fileName'),
            DiscrUrl: this.get('book.DiscrUrl'),
            tags: this.get('book.tags')
        })
    }
});
