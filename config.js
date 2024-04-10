//konfigurasi koneksi ke database
const config = {
    db: {
      host: "localhost",
      user: "root",
      password: "",
      database: "hotel",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;