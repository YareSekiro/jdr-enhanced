/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.on('/').render('pages/home')
router.on('/inertia').renderInertia('home', { version: 6 })
router.get('/users', [UsersController, 'index'])
