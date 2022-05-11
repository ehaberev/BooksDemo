import Component from '@ember/component';

export default Component.extend({
    actions:{
        submitForm(e){
            e.preventDefault();
            this.onsubmit({
                id: this.get('idbook'),
                Name: this.get('Name'),
                Author: this.get('Author'),
                PCount: this.get('PCount'),
                IMGurl: this.get('IMGurl'),
                DiscrUrl: this.get('DiscrUrl'),
                tags: this.get('tags')
            })
        }
    },
    didReceiveAttrs(){
        this._super(...arguments);
        
        this.setProperties({
            idbook: this.get('book.id') ? this.get('book.id') : undefined,
            Name: this.get('book.Name'),
            Author: this.get('book.Author'),
            PCount: this.get('book.PCount'),
            IMGurl: this.get('book.IMGurl'),
            DiscrUrl: this.get('book.DiscrUrl'),
            tags: this.get('book.tags')
        })
    }
});
