import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, beforeSave, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Role from '#models/role'
import Character from '#models/character'
import UserMap from '#models/user_map'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['identifier'],
  passwordColumnName: 'password',
})
export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare identifier: string

  @column()
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  // user can have many characters
  @hasMany(() => Character)
  declare characters: HasMany<typeof Character>

  // user can have many created maps
  @hasMany(() => UserMap)
  declare maps: HasMany<typeof UserMap>

  // user can have one role
  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
}
