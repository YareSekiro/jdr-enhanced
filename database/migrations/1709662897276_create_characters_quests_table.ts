import { BaseSchema } from '@adonisjs/lucid/schema'

/**
 * Pivot table for characters and quests
 */
export default class extends BaseSchema {
  protected tableName = 'characters_quests'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('character_id').unsigned().references('characters.id').onDelete('CASCADE')
      table.integer('quest_id').unsigned().references('quests.id').onDelete('CASCADE')

      table.primary(['character_id', 'quest_id'])
      table.unique(['character_id', 'quest_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
