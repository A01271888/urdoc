import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        cerrarSesion(){
          console.log("bye");
          return this.get("session").close().then(()=>{
             return this.transitionToRoute("login");
          })
        }
      }
});
