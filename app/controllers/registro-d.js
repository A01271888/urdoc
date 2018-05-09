import Controller from '@ember/controller';

export default Controller.extend({
    session: Ember.inject.service(),
    firebaseApp: Ember.inject.service(),
  
    //passwordVisibility: false,
  
    showError(message){
      this.set('errorMsg', message);
      setTimeout(()=>{ this.set('errorMsg', null) }, 5000); // 1000 == 1 seg
    },
    actions: {
        signup(){
            let email = this.get('email');
            let password = '123123';
            // let confirmation = this.get('passwordConfirmation');
            let nombre = this.get('nombre');
            let apellidos = this.get('apellidos');
            let telefono = this.get('telefono');
            let costo = this.get('costo');
            let modo = this.get('modo')
            let especialidad = this.get('especialidad');
            console.log(modo);
      
            if(true){//password == confirmation){
              let registrationPromise = this.get('firebaseApp').auth().createUserWithEmailAndPassword(
                email,
                password
              );
              //console.log("cliente ", nombre, mail );
              registrationPromise.then((response)=>{
                  this.store.createRecord('doctor', {
                    nombre: nombre,
                    apellidos: apellidos,
                    telefono: telefono,
                    email: email,
                    password:password,
                    costo: costo,
                    especialidad: especialidad,
                    id: response.uid
                  }).save().then(()=>{
                    console.log(email);
                    alert('Bienvenido '+ nombre + '!');
                    this.transitionToRoute('perfilD');
                  });
              });
              registrationPromise.catch((error)=>{
                // this.showError(error.message);
              });
            }else {
            //   this.showError("Password and confirmation don't match");
            }
          }
    }

});
