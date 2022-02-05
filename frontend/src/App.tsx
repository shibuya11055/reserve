import { ApolloProvider } from '@apollo/client'
import TestComponent from '@/test_graphql/testComponent'
import client from '@/graphql/client'

function App() {
  return (
    <ApolloProvider client={client}>
      <TestComponent />
    </ApolloProvider>
  )
}

export default App
