const pool = require('../Model/dbPool.js');

// hora YYYY-MM-DD HH:mm:ss
const createEvent = async (req, res) => {
  const { user_id, salon_id, start_time, end_time, total_price } = req.body;

  try {
    const sql = `
      INSERT INTO Event
        (user_id, salon_id, start_time, end_time, total_price)
      VALUES
        (?, ?, ?, ?, ?);
    `;
    const [result] = await pool.query(sql, [
      user_id,
      salon_id,
      start_time,
      end_time,
      total_price
    ]);

    return res.status(201).json({
      message: 'Evento creado correctamente',
      eventId: result.insertId
    });
  } catch (error) {
    console.error('Error en createEvent:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const listEvents = async (req, res) => {
  const { user_id } = req.body;

  try {
    const sql = `
      SELECT
        e.id,
        e.salon_id,
        s.name AS salon_name,
        e.start_time,
        e.end_time,
        e.total_price,
        e.created_at
      FROM Event e
      JOIN Salon s ON e.salon_id = s.id
      WHERE e.user_id = ?
      ORDER BY e.start_time DESC;
    `;
    const [rows] = await pool.query(sql, [user_id]);
    return res.status(200).json(rows);
  } catch (error) {
    console.error('Error en listEvents:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getEventById = async (req, res) => {
  const { user_id } = req.body;
  const eventId = req.params.eventId;

  try {
    const [events] = await pool.query(
      'SELECT * FROM Event WHERE id = ? AND user_id = ?',
      [eventId, user_id]
    );
    if (!events) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    const event = events[0];

    console.log("xd");

    const [customizations] = await pool.query(
      'SELECT id, type, description, price FROM EventCustomization WHERE event_id = ?',
      [eventId]
    );

    const [payments] = await pool.query(
      'SELECT id, amount, payment_method, status, created_at FROM Payment WHERE event_id = ?',
      [eventId]
    );

    return res.status(200).json({
      ...event,
      customizations,
      payments
    });
  } catch (error) {
    console.error('Error en getEventById:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateEvent = async (req, res) => {
  const { user_id } = req.body;
  const eventId = req.params.eventId;
  const { salon_id, start_time, end_time, total_price } = req.body;

  try {
    const [exists] = await pool.query(
      'SELECT id FROM Event WHERE id = ? AND user_id = ?',
      [eventId, user_id]
    );
    if (exists.length === 0) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    const fields = [];
    const values = [];

    if (salon_id)      { fields.push('salon_id = ?'); values.push(salon_id); }
    if (start_time)    { fields.push('start_time = ?'); values.push(start_time); }
    if (end_time)      { fields.push('end_time = ?'); values.push(end_time); }
    if (total_price)   { fields.push('total_price = ?'); values.push(total_price); }

    if (fields.length === 0) {
      return res.status(400).json({ error: 'No hay campos para actualizar' });
    }

    values.push(eventId);
    const sql = `UPDATE Event SET ${fields.join(', ')} WHERE id = ?`;
    await pool.query(sql, values);

    return res.status(200).json({ message: 'Evento actualizado correctamente' });
  } catch (error) {
    console.error('Error en updateEvent:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteEvent = async (req, res) => {
  const { user_id } = req.body;
  const eventId = req.params.eventId;

  try {
    const [result] = await pool.query(
      'DELETE FROM Event WHERE id = ? AND user_id = ?',
      [eventId, user_id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Evento no encontrado o ya cancelado' });
    }
    return res.status(200).json({ message: 'Evento cancelado correctamente' });
  } catch (error) {
    console.error('Error en deleteEvent:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  createEvent,
  listEvents,
  getEventById,
  updateEvent,
  deleteEvent
};
