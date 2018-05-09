import Route from '@ember/routing/route';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
  session: Ember.inject.service(),
  model(){
    // El modelo de la ruta es el usuario
    let id = this.get('session.uid');
    return this.store.find('doctor', id);
  },
  beforeModel(){
  return this.get("session").fetch().catch(()=>{
    if(!this.get('session.isAuthenticated')){
      return this.transitionTo('login');
      //return this.transitionTo("perfil");
    }
  });
}
});