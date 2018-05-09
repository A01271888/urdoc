import Controller from '@ember/controller';

export default Controller.extend({
    store: Ember.inject.service('store'),
    session: Ember.inject.service(),
    showError(message){
        this.set('errorMsg', message);
        setTimeout(()=>{ this.set('errorMsg', null) }, 5000); // 1000 == 1 seg
    },
    actions: {
        signIn(provider){
            switch (provider) {
                case 'email':
                let mail = this.get('email');
                let pass = this.get('password');
    
                this.get('session').open('firebase', {
                  provider: 'password',
                  email: mail,
                  password: pass
                }).then(()=>{
                  //console.log(email);
                  this.set('email', "");
                  this.set('password', "");
                  let isAdmin = false;
                  this.get('store').find('doctor', this.get('session.uid')).then((u)=>{
                      this.transitionToRoute('perfilD');
                  }).catch(()=>{console.log("kha");});
    
                }).catch((error)=>{
                  this.showError(error.message);
                  this.set('email', "");
                  this.set('password', "");
                })
                break;
            }  
        }      
    }   
});
