import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <p>
        <Link to="articles">Articles</Link>
      </p>
      <p>
        <Link to="users">Users</Link>
      </p>
    </div>
  )
}
