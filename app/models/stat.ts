import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Character from '#models/character'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Stat extends BaseModel {
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

  /** A state can have many characters and characters can have many stat */
  @manyToMany(() => Character, {
    pivotTable: 'characters_stats',
    pivotColumns: ['value'],
  })
  declare characters: ManyToMany<typeof Character>
}
