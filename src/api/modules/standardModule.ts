import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('standard_module/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('standard_module/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('standard_module/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('standard_module/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('standard_module/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
