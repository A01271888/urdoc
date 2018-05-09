import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
    apellidos: DS.attr('string'),
    telefono: DS.attr('string'),
    email: DS.attr('string'),
    modo: DS.attr('string'),
    costo: DS.attr('string'),
    especialidad: DS.attr('string'),
    picProfile: DS.attr('string', {defaultValue: "https://firebasestorage.googleapis.com/v0/b/crea-tu-evento.appspot.com/o/pics%2Fuser-default.png?alt=media&token=18c2162a-a228-4baa-9b10-2a19895e14cc"}),  
});
