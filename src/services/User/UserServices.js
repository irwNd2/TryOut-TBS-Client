import { post, get } from '@/services/http'

export const updatePhoto = async (params) => {
  console.log(params)
  const res = await post({
    url: '/users/profile/photo',
    headers: {
      'Content-Type': params.type
    },
    params
  })

  return res
}

export const getProfile = async () => {
  const res = await get({
    url: 'users/profile'
  })

  return res
}
