import { ApolloProvider } from '@apollo/client'
import client from '@/graphql/client'
import ReserveRoutes from '@/router'

function App() {
  return (
    <ApolloProvider client={client}>
      <ReserveRoutes />
    </ApolloProvider>
  )
}

export default App
