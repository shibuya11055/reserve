import {
  useCurrentOwnerQuery,
  CurrentOwnerQuery,
} from '@/features/owners/home/show/graphql/current_owner.generated'
import { useEffect, useState } from 'react'
import { GQueryFieldType } from '@/submodules/graphql.types'

type CurrentOwnerType = GQueryFieldType<
  CurrentOwnerQuery,
  'currentOwner',
  'Owner'
>

export const useCurrentOwnerQueryResponse = () => {
  const { data } = useCurrentOwnerQuery()
  const [currentOwner, setCurrentOwner] = useState<CurrentOwnerType | null>(
    null
  )
  useEffect(() => {
    setCurrentOwner(() => (data?.currentOwner as CurrentOwnerType) || null)
  }, [data])

  return {
    currentOwner,
  }
}
