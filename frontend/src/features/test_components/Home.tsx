import { Link } from 'react-router-dom'
import { useTestFieldQueryResponse } from '@/features/test_components/components/testFieldQueryResponse'

export default function Home() {
  const { testField } = useTestFieldQueryResponse()

  return (
    <div>
      <p>{testField}</p>
      <p>
        <Link to="articles">Articles</Link>
      </p>
      <p>
        <Link to="users">Users</Link>
      </p>
    </div>
  )
}
