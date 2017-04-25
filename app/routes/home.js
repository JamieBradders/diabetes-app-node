/**
 * Home Routes
 */

 module.exports = [
   {
     method: 'GET',
     path: '/',
     handler: (request, reply) => {
       reply({
         'message': 'Welcome to iGulco.co',
         'version': '1.0.0'
       })
     }
   }
 ]
