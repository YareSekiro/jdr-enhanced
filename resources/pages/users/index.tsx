import { Head } from '@inertiajs/react'

export default function User(props: { users: any }) {
  return (
    <>
      <Head title="User" />

      <div className="container">
        <div className="title">AdonisJS {props.users.password} x Inertia x React</div>

        <span>
          Salamat
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>
    </>
  )
}
