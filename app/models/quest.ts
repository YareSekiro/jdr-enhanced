import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Character from '#models/character'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Quest extends BaseModel {
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

  @manyToMany(() => Character, {
    pivotTable: 'characters_quests',
  })
  declare characters: ManyToMany<typeof Character>
}
