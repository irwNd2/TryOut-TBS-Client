import { useMutation } from '@tanstack/vue-query'
import { updatePhoto } from '@/services/User/UserServices'

export const useUpdatePhoto = () => {
  return useMutation({
    mutationFn: async (params) => {
      const res = await updatePhoto(params)
      return res
    },
    onError: (error) => error
  })
}
