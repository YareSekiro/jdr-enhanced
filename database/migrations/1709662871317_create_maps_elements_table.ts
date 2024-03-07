import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'maps_elements'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('image').notNullable()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.float('x_pos').notNullable()
      table.float('y_pos').notNullable()
      table.integer('map_id').unsigned().references('id').inTable('maps').onDelete('CASCADE')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
