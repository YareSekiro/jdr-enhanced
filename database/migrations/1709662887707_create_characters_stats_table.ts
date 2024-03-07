import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'characters_stats'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('character_id')
        .unsigned()
        .references('id')
        .inTable('characters')
        .onDelete('CASCADE')
      table.integer('stat_id').unsigned().references('id').inTable('stats').onDelete('CASCADE')
      table.integer('value').notNullable()

      table.primary(['character_id', 'stat_id'])
      table.unique(['character_id', 'stat_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
