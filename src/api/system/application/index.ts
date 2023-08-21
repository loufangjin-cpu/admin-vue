import request from '@/config/axios'

// 获得应用分页
export const getMapApplicationPage = async () => {
  return await request.get({ url: '/graph/application/page' })
}

// 应用详情
export const getMapApplicationDetails= async () => {
  return await request.get({ url: '/graph/application/get' })
}

// 更新应用
export const putMapApplication = async (data) => {
  return await request.put({
    url: '/graph/application/update',
    data: data
  })
}

// 创建应用
export const postMapApplication = async (data) => {
  return await request.post({
    url: '/graph/application/create',
    data: data
  })
}

// 删除应用

export const deleteMapApplication = async (id: number, reason: string) => {
  const data = {
    id: id,
  }
  return await request.delete({ url: '/graph/application/delete', data: data })
}
