import { get } from '@/services/http'

export const getTryOuts = async (params) => {
  const res = await get({
    url: '/tryouts',
    params
  })
  return res
}

export const getTryOut = async (id) => {
  const res = await get({
    url: `/tryouts/detail/${id}`
  })

  return res
}
