module.exports = {
//  this sets up our database, our tables and whatnot
  development: {
    client: 'sqlite3', // the client we are currently using to manage our data
    useNullAsDefault: true, // sets null as the default for each item in our tables
    connection: {
      filename: './data/cookbook.db3', // this creates the folder AND the file
    },
    migrations: {
      directory: './data/migrations' // this creates the folder AND the file (the migrations are our tables)
    },
    seeds: {
      directory: './data/seeds' // this creates the folder AND the file (the seeds are our dummy data)
    },
    // pool: {
    //   afterCreate: (connection, done) => {
    //     connection.run('PRAGMA foreign_keys = ON', done)
    //   }
    // }
  },

}

