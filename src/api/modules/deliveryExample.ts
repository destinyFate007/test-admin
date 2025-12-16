import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('delivery/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('delivery/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('delivery/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('delivery/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('delivery/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
  changeStatus: (data: { id: string, status: boolean }) => api.post(`delivery/change/status`, data, {
    baseURL: '/mock/',
  }),

}
