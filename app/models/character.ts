import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Quest from '#models/quest'
import Stat from '#models/stat'
import Inventory from '#models/inventory'

export default class Character extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare image: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // a character can have many quests
  @manyToMany(() => Quest, {
    pivotTable: 'characters_quests',
  })
  declare quests: ManyToMany<typeof Quest>

  // a character can have many stats
  @manyToMany(() => Stat, {
    pivotTable: 'characters_stats',
    pivotColumns: ['value'],
  })
  declare stats: ManyToMany<typeof Stat>

  //a character can have an inventory
  @hasMany(() => Inventory)
  declare inventory: HasMany<typeof Inventory>

  // character belongs to a user
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
