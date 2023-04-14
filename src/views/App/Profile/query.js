import { useMutation, useQuery } from '@tanstack/vue-query'
import { updatePhoto, getProfile } from '@/services/User/UserServices'

export const useUpdatePhoto = () => {
  return useMutation({
    mutationFn: async (params) => {
      const res = await updatePhoto(params)
      return res
    },
    onError: (error) => error
  })
}

export const useProfile = () => {
  return useQuery({
    queryKey: ['ProfileDetail'],
    queryFn: async () => await getProfile(),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })
}
