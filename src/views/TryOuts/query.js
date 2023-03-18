import { useQuery } from '@tanstack/vue-query'
import { getTryOuts, getTryOut } from '@/services/TryOuts/TryOutServices'

export const useTryOuts = ({ params }) => {
  console.log('useTryOuts', params)
  return useQuery({
    queryKey: ['ListTryouts'],
    queryFn: async () => await getTryOuts({ ...params.query }),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })
}

export const useTryOut = ({ id }) => {
  return useQuery({
    queryKey: ['DetailTryout', id],
    queryFn: async () => await getTryOut(id),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })
}
