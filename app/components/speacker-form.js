import Component from '@ember/component';

export default Component.extend({
    actions:{
        submitForm(e){
            e.preventDefault();
            //console.log(this.get("id"));
            this.onsubmit({
                id: this.get('id'),
                lastName: this.get('lastName'),
                firstName: this.get('firstName'),
                patronymic: this.get('patronymic')
            })
        }
    },
    didReceiveAttrs(){
        this._super(...arguments);
        
        this.setProperties({
            id: this.get('speacker.id') ? this.get('speacker.id') : undefined,
            lastName: this.get('speacker.lastName'),
            firstName: this.get('speacker.firstName'),
            patronymic: this.get('speacker.patronymic')
        });
        //console.log(this.get("id"));
    }
});
