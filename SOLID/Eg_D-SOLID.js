class Database {
    connect() {
      throw new Error('This method should be overridden');
    }
  }
  
  class MySQLDatabase extends Database {
    connect() {
      console.log('Connecting to MySQL database');
    }
  }
  
  class PostgreSQLDatabase extends Database {
    connect() {
      console.log('Connecting to PostgreSQL database');
    }
  }
  
  class Application {
    constructor(database) {
      this.database = database;
    }
  
    start() {
      this.database.connect();
    }
  }
  
  const mySQLDatabase = new MySQLDatabase();
  const app = new Application(mySQLDatabase);
  app.start(); // Connecting to MySQL database
  
  const postgreSQLDatabase = new PostgreSQLDatabase();
  const app2 = new Application(postgreSQLDatabase);
  app2.start(); // Connecting to PostgreSQL database
  