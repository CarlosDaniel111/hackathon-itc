const pool = require('../Model/dbPool.js');

const listSalons = async (req, res) => {
  const { location, minCapacity } = req.query;
  try {
    const conditions = [];
    const values = [];

    if (location) {
      conditions.push('location LIKE ?');
      values.push(`%${location}%`);
    }
    if (minCapacity) {
      conditions.push('capacity >= ?');
      values.push(minCapacity);
    }

    const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
    const sql = `SELECT id, name, description, location, capacity, price FROM Salon ${whereClause}`;
    const [rows] = await pool.query(sql, values);

    return res.status(200).json(rows);
  } catch (error) {
    console.error('Error en listSalons:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getAllSalons = async (req, res) => {
  try {
    const sql = 'SELECT id, name, description, location, capacity, price FROM Salon';
    const rows = await pool.query(sql);
    return res.status(200).json(rows);
  } catch (error) {
    console.error('Error en getAllSalons:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getSalonById = async (req, res) => {
  const salonId = req.params.salonId;
  try {
    const [rows] = await pool.query(
      'SELECT id, name, description, location, capacity, price FROM Salon WHERE id = ?',
      [salonId]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Salón no encontrado' });
    }
    return res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error en getSalonById:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getAvailability = async (req, res) => {
  const salonId = req.params.salonId;
  const { date } = req.query;
  try {
    if (!date) {
      return res.status(400).json({ error: 'Debe especificar la fecha de consulta' });
    }
    const sql = `
      SELECT start_time, end_time
        FROM Event
       WHERE salon_id = ?
         AND DATE(start_time) = ?
      ORDER BY start_time
    `;
    const [bookings] = await pool.query(sql, [salonId, date]);
    return res.status(200).json({ date, bookings });
  } catch (error) {
    console.error('Error en getAvailability:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { listSalons, getSalonById, getAvailability, getAllSalons };
