import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Inventory from '#models/inventory'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: string

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Inventory, {
    pivotTable: 'inventory_items',
    pivotColumns: ['quantity'],
  })
  declare inventories: ManyToMany<typeof Inventory>
}
