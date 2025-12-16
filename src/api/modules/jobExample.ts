import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('job/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (data: {
    department_id: number | string
    id: number | string
  }) => api.get('job/detail', {
    params: data,
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('job/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('job/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('job/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
