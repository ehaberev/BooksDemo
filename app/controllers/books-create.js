import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import EmberObject from '@ember/object';
import { get, set } from '@ember/object';

export default Controller.extend({
    init(){
        this._super(...arguments);
        this.set('book',EmberObject.create())
        this.set('book').set('Name', '');
        this.set('book').set('Author', '');
        this.set('book').set('PCount', '');
        this.set('book').set('fileName', '');
        this.set('book').set('DiscrUrl', '');
        this.set('book').set('tags', []);
    },
    dataService: service('data'),
    actions:{
        // async saveBook(book){            
        //     await this.get("dataService").createBook(book);
        //     
        // },
       
    
        
        async saveBook(e) {
            e.preventDefault();
      
            set(this, 'isUploadingFile', true);
            const uploadData = get(this, 'uploadData');
            
            await this.get("dataService").createBook({
                
                Name: this.get('Name'),
                Author: this.get('Author'),
                PCount: this.get('PCount'),
              url: this.get('DiscrUrl'),
              tags: this.get('tags'),
              coverURL: '',
            }, uploadData, true);
      
            set(this, 'isUploadingFile', false);
            this.transitionToRoute('books.index');
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
