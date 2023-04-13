import { post } from '@/services/http'

export const updatePhoto = async (params) => {
  console.log(params)
  const res = await post({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: '/users/profile/photo',
    params
  })

  return res
}
