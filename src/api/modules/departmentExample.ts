import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('department/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('department/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('department/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('department/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('department/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
