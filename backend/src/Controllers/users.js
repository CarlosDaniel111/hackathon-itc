const pool = require('../Model/dbPool.js');

const getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const [rows] = await pool.query(
      'SELECT id, first_name, last_name, email, type, created_at FROM User WHERE id = ?',
      [userId]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    return res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error en getUser:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { first_name, last_name, email, password } = req.body;
  try {
    const fields = [];
    const values = [];

    if (first_name) {
      fields.push('first_name = ?');
      values.push(first_name);
    }
    if (last_name) {
      fields.push('last_name = ?');
      values.push(last_name);
    }
    if (email) {
      fields.push('email = ?');
      values.push(email);
    }
    if (password) {
      fields.push('password = ?');
      values.push(password);
    }

    if (fields.length === 0) {
      return res.status(400).json({ error: 'No hay campos para actualizar' });
    }

    values.push(userId);
    const sql = `UPDATE User SET ${fields.join(', ')} WHERE id = ?`;
    await pool.query(sql, values);

    return res.status(200).json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error('Error en updateUser:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getUser, updateUser };