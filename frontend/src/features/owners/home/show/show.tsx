import { useCurrentOwnerQueryResponse } from '@/features/owners/home/show/composables/useCurrentOwnerQueryResponse'

export default function Home() {
  const { currentOwner } = useCurrentOwnerQueryResponse()

  return (
    <div>
      <p>{currentOwner?.uuid}</p>
    </div>
  )
}
