import request from '@/config/axios'

// 获得专题分页
export const getMapTopicPage = async () => {
  return await request.get({ url: '/graph/topic/page' })
}

// 专题详情
export const getMapTopicDetails= async () => {
  return await request.get({ url: '/graph/topic/get' })
}

// 更新专题
export const putMapTopic = async (data) => {
  return await request.put({
    url: '/graph/topic/update',
    data: data
  })
}

// 创建专题
export const postMapTopic = async (data) => {
  return await request.post({
    url: '/graph/topic/create',
    data: data
  })
}

// 删除专题

export const deleteMapTopic = async (id: number, reason: string) => {
  const data = {
    id: id,
    reason: reason
  }
  return await request.delete({ url: '/graph/topic/delete', data: data })
}
