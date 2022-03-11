import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
// TODO: 本番環境のドメインが確定したら向け先を追加する必要がある
const uri =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000/graphql'

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri,
  }),
})
