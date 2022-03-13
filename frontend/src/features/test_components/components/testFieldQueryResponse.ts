import { useTestFieldQuery } from '@/features/test_components/graphql/testField.generated'
import { useEffect, useState } from 'react'

export const useTestFieldQueryResponse = () => {
  const { data } = useTestFieldQuery()
  const [testField, setTestField] = useState('')
  useEffect(() => {
    setTestField(() => (data?.testField as string) || '')
  }, [data])

  return {
    testField,
  }
}
