import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import UserMap from '#models/user_map'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class MapElement extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare image: string

  @column()
  declare x_pos: number

  @column()
  declare y_pos: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => UserMap)
  declare user_map: BelongsTo<typeof UserMap>
}
