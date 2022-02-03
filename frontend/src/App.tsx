// import TestComponent from './test_graphql/testComponent'
import TestComponent from '@/test_graphql/testComponent'
import client from '@/graphql/client'
import { ApolloProvider } from '@apollo/client'

function App() {
  return (
    <ApolloProvider client={ client }>
      <TestComponent />
    </ApolloProvider>
  )
}

export default App
