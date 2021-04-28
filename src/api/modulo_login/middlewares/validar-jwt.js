const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { getUsuario } = require('../model/users');

const validarJWT = async (req = request, res = response, next) => {
   const authorization = req.headers.authorization.split(' ')[1];

   // Verificar que el token exista
   if (!authorization) {
      res.status(401).send({ message: 'Acceso denegado' });
   }

   const token = authorization.split(' ')[1];

   try {
      const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
      // console.log(uid, estado);

      // Consultar si el usuario existe en la base de datos
      const usuario = await getUsuario(uid);
      if (!usuario) {
         return res.status(401).send({ message: 'Token no valido, no existe este usuario' });
      }

      // Verificar que el usuario este activo
      if (usuario.indicador_usuario !== 'activo') {
         return res.status(401).send({ message: 'No existe este usuario' });
      }
      req.usuario = usuario;

      next();
   } catch (error) {
      console.log(error);
      res.status(401).json({
         msg: 'No tienes autorización',
      });
   }
};

module.exports = {
   validarJWT,
};
