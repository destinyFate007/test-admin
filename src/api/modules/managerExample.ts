import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('manager/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('manager/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('manager/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('manager/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('manager/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
  passwordReset: (id: number | string) => api.post('manager/password/reset', {
    id,
  }, {
    baseURL: '/mock/',
  }),
  changeStatus: (data: any) => api.post('manager/change/status', data, {
    baseURL: '/mock/',
  }),
  check: (data: any) => api.post('manager/check', data, {
    baseURL: '/mock/',
  }),
}
