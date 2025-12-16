import api from '../index'

export default {
  list: (data: {
    name?: string
    from: number
    limit: number
  }) => api.get('table/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('table/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('table/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('table/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('table/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
  preview: (data: any) => api.get('table/preview', {
    params: data,
    baseURL: '/mock/',
  }),
}
