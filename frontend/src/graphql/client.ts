import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// TODO: 本番環境のドメインが確定したら向け先を追加する必要がある
const uri =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000/graphql'

const httpLink = createHttpLink({ uri })

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
