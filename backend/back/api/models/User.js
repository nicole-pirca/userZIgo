/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true,
     },
     apellido: {
      type: 'string',
      required: true,
     },
     direccion: {
      type: 'string',
      required: true,
     },
     fechaNacimiento: {
      type: 'string',
      required: true,
     },
     cuenta: {
      type: 'boolean',
      required: true,
     },
     numHijos: {
       type: 'number',
       required:true,
     },
     saldo: {
      type: 'number',
      required:true,
     }
  },

};

