import request from '@/config/axios'

// 获得场景分页
export const getMapScenePage = async () => {
  return await request.get({ url: '/graph/map/page' })
}

// 更新场景
export const putMapScene = async (data) => {
  return await request.put({
    url: '/graph/map/update',
    data: data
  })
}
// 场景详情
export const getMapTopicDetails= async () => {
  return await request.get({ url: '/graph/map/get' })
}
// 创建场景
export const postMapScene = async (data) => {
  return await request.post({
    url: '/graph/map/create',
    data: data
  })
}

// 删除场景

export const deleteMapScene = async (id: number, reason: string) => {
  const data = {
    id: id,
    reason: reason
  }
  return await request.delete({ url: '/graph/map/delete', data: data })
}
