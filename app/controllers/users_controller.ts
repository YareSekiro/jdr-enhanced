import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

/** [TODO]: Faire l'implémentation des controllers des différents modèles */
export default class UsersController {
  async index({ inertia }: HttpContext) {
    const users = await User.find(1)
    return inertia.render('users/index', { users })
  }
}
