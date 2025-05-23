const jwt = require("jsonwebtoken");

const generarJWT = (email) => {
  return new Promise((resolve, reject) => {
    const payload = { email };

    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        }

        resolve(token);
      }
    );
  });
};

module.exports = {
  generarJWT,
};