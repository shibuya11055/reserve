import * as Types from '../../../../../gen/types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CurrentOwnerQueryVariables = Types.Exact<{ [key: string]: never }>

export type CurrentOwnerQuery = {
  __typename?: 'Query'
  currentOwner: { __typename?: 'Owner'; uuid: string }
}

export const CurrentOwnerDocument = gql`
  query currentOwner {
    currentOwner {
      uuid
    }
  }
`

/**
 * __useCurrentOwnerQuery__
 *
 * To run a query within a React component, call `useCurrentOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentOwnerQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentOwnerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentOwnerQuery,
    CurrentOwnerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CurrentOwnerQuery, CurrentOwnerQueryVariables>(
    CurrentOwnerDocument,
    options
  )
}
export function useCurrentOwnerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentOwnerQuery,
    CurrentOwnerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CurrentOwnerQuery, CurrentOwnerQueryVariables>(
    CurrentOwnerDocument,
    options
  )
}
export type CurrentOwnerQueryHookResult = ReturnType<
  typeof useCurrentOwnerQuery
>
export type CurrentOwnerLazyQueryHookResult = ReturnType<
  typeof useCurrentOwnerLazyQuery
>
export type CurrentOwnerQueryResult = Apollo.QueryResult<
  CurrentOwnerQuery,
  CurrentOwnerQueryVariables
>
