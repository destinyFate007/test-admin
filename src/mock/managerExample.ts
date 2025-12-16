import { fakerZH_CN } from '@faker-js/faker'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

const AllList: any[] = []
for (let i = 0; i < 50; i++) {
  AllList.push({
    id: i + 1,
    account: fakerZH_CN.person.firstName(),
    name: fakerZH_CN.person.fullName(),
    sex: fakerZH_CN.number.int(2),
    mobile: fakerZH_CN.phone.number({
      style: 'international',
    }),
    status: fakerZH_CN.datatype.boolean(),
  })
}

export default defineFakeRoute([
  {
    url: '/mock/manager/list',
    method: 'get',
    response: ({ query }) => {
      const { account, name, mobile, sex, from, limit } = query
      let list = AllList.filter((item) => {
        return account ? item.account.includes(account) : true
      })
      list = AllList.filter((item) => {
        return name ? item.name.includes(name) : true
      })
      list = AllList.filter((item) => {
        return mobile ? item.mobile === mobile : true
      })
      list = AllList.filter((item) => {
        return sex ? item.sex === ~~sex : true
      })
      const pageList = list.filter((_item, index) => {
        return index >= ~~from && index < (~~from + ~~limit)
      })
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: list.length,
        },
      }
    },
  },
  {
    url: '/mock/manager/detail',
    method: 'get',
    response: ({ query }) => {
      const info = AllList.filter(item => item.id === ~~query.id)
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/manager/create',
    method: 'post',
    response: () => {
      return {
        error: '',
        status: 1,
        data: {
          isSuccess: true,
        },
      }
    },
  },
  {
    url: '/mock/manager/edit',
    method: 'post',
    response: () => {
      return {
        error: '',
        status: 1,
        data: {
          isSuccess: true,
        },
      }
    },
  },
  {
    url: '/mock/manager/delete',
    method: 'post',
    response: () => {
      return {
        error: '',
        status: 1,
        data: {
          isSuccess: true,
        },
      }
    },
  },
  {
    url: '/mock/manager/password/reset',
    method: 'post',
    response: () => ({
      error: '',
      status: 1,
      data: {
        isSuccess: !0,
      },
    }),
  },
  {
    url: '/mock/manager/change/status',
    method: 'post',
    response: () => ({
      error: '',
      status: 1,
      data: {
        isSuccess: !0,
      },
    }),
  },
  {
    url: '/mock/manager/check',
    method: 'post',
    response: ({ body }) => {
      const { key, value, id } = body
      let exist = false
      exist = AllList.some((item) => {
        let flag
        switch (key) {
          case 'account':
            if (item.account === value && (id ? id !== item.id : true)) {
              flag = true
            }
            break
          case 'mobile':
            if (item.mobile === value && (id ? id !== item.id : true)) {
              flag = true
            }
            break
        }
        return flag
      })
      return {
        error: '',
        status: 1,
        data: {
          exist,
        },
      }
    },
  },
])
