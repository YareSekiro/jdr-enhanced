// [TODO]: Implémentation de la table inventaire
import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Character from '#models/character'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Item from '#models/item'

export default class Inventory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // inventory can have many items and items can belong to many inventories
  @manyToMany(() => Item, {
    pivotTable: 'inventory_items',
    pivotColumns: ['quantity'],
  })
  declare items: ManyToMany<typeof Item>

  // inventory belongs to a character
  @belongsTo(() => Character)
  declare character: BelongsTo<typeof Character>
}
