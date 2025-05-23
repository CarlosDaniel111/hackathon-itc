const pool = require('../Model/dbPool.js');

const register = async (req, res) => {
  const {first_name, last_name, email, password, type} = req.body;
  console.log(first_name, last_name, email, password, type);
  try {
    const query = `
          INSERT INTO User
            (first_name, last_name, email, password, type)
          VALUES
            (?, ?, ?, ?, ?);
        `;
    await pool.query(query, [first_name, last_name, email, password, type]);
    return res.status(201);
  } catch(e) {
    return res.status(500);
  }
};

const login = async(req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM User WHERE email = ? AND password = ?', [email, password]);
    if (!rows) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // const token = await generarJWT(email);
    return res.status(200).json({ message: 'Autenticación exitosa'});
  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const logout = (req, res) => {
  return res.status(200).json({ message: 'Sesión cerrada correctamente' });
};

module.exports = {register, login, logout};