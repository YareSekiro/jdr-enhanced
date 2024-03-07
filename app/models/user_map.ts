import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import MapElement from '#models/map_element'

export default class UserMap extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // une map à plusieurs éléments qui la constituent
  @hasMany(() => MapElement)
  declare elements: HasMany<typeof MapElement>

  // une map appartient à un utilisateur
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
