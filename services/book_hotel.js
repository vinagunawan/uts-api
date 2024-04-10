const mysql = require('mysql2/promise');
const config = require('../config');

//fungsi untuk membuat koneksi ke database
async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

//create
async function createBookingRoom(book_hotel) {
  const sql = `INSERT INTO booking_room 
  (customer_name, room_number, check_in_date, price)
  VALUES (?, ?, ?, ?)`;

  const result = await query(sql, [
    book_hotel.customer_name,
    book_hotel.room_number,
    book_hotel.check_in_date,
    book_hotel.price
  ]);

  let message = 'Error in creating booking room';
  if (result.affectedRows) {
    message = 'Booking room created successfully';
  }
  return { message };
}

//read
async function getAllBookingRoom() {
  const sql = `SELECT * FROM booking_room`;
  return await query(sql);
}

//update
async function updateBookingRoom(id, book_hotel) {
  const sql = `UPDATE booking_room 
  SET customer_name=?, room_number=?, check_in_date=?, price=?
  WHERE id=?`;

  const result = await query(sql, [
    book_hotel.customer_name,
    book_hotel.room_number,
    book_hotel.check_in_date,
    book_hotel.price,
    id
  ]);

  let message = 'Error updating booking room';
  if (result.affectedRows) {
    message = 'Booking room updated successfully';
  }
  return { message };
}

//delete
async function deleteBookingRoom(id) {
  const sql = `DELETE FROM booking_room WHERE id=?`;
  const result = await query(sql, [id]);

  let message = 'Error deleting booking room';
  if (result.affectedRows) {
    message = 'Booking room deleted successfully';
  }
  return { message };
}

module.exports = {
  query,
  createBookingRoom,
  getAllBookingRoom,
  updateBookingRoom,
  deleteBookingRoom,
};
