import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inventory_items'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('inventory_id').unsigned().references('id').inTable('inventories')
      table.integer('item_id').unsigned().references('id').inTable('items')
      table.integer('quantity').notNullable()
      table.primary(['inventory_id', 'item_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
