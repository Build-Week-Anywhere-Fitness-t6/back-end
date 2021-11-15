exports.up = async (knex) => {
    await knex.schema
      .createTable('users', (users) => {
        users.increments('user_id')
        users.string('username', 200).notNullable().unique()
        users.string('password', 200).notNullable()
        users.string('role', 128)
        users.string('firstname', 128)
        users.string('lastname', 128)
        users.timestamps(false, true)
      })
      .createTable('classes', table => {
          table.increments('class_id')
          table.string('name').notNullable()
          table.string('instructor_username')
          table.string('type')
          table.string('start_time')
          table.string('duration')
          table.string('intensity')
          table.string('location')
          table.integer('class_size')
      })
      .createTable('class_clients', table => {
          table.increments('class_clients_id')
          table.integer('class_id')
            .unsigned()
            .notNullable()
            .references('class_id')
            .inTable('classes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
          table.integer('user_id')
          .unsigned()
          .notNullable()
          .references('class_id')
          .inTable('classes')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema
    .dropTableIfExists('class_clients')
    .dropTableIfExists('classes')
    .dropTableIfExists('users')
  }
