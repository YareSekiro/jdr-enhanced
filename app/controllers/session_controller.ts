import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class SessionController {
  async store({ request, auth, response }: HttpContext) {
    /** Get user credentials */
    const { identifier, password } = request.only(['identifier', 'password'])

    /** Verify user credentials */
    const user = await User.verifyCredentials(identifier, password)

    /** Login user */
    await auth.use('web').login(user)

    /** Redirect to app */
    response.redirect('/app')
  }
}
