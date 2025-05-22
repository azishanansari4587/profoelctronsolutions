import mysql from 'mysql2/promise';

// const connection = mysql.createPool({

//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   port: 3306,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10, // Adjust based on your needs
//   queueLimit: 0,

// });

// export default connection;

let connect;

async function connection() {
  if (!connect) {
    try {
      connect =  mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      console.log("✅ MySQL connected successfully.");
    } catch (error) {
      console.error("❌ Failed to connect to MySQL:", error.message);
    }
  }
  return connect;
}

export default connection;
