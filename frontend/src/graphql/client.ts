import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getAuthDataFromStorage } from '@/submodules/auth'

// TODO: 本番環境のドメインが確定したら向け先を追加する必要がある
const uri =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000/graphql'

const httpLink = createHttpLink({ uri })
const authData = getAuthDataFromStorage()

const authLink = setContext(() => ({
  headers: { ...authData },
}))

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
