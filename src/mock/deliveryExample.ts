import { faker } from '@faker-js/faker'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import pcasCode from '@/components/PcasCascader/pcas-code.json'

const AllList: any[] = []
for (let i = 0; i < 50; i++) {
  const address = []
  const length = faker.number.int(pcasCode.length - 1)
  address.push(pcasCode[length].name)
  const o = faker.number.int(pcasCode[length].children.length - 1)
  address.push(pcasCode[length].children[o].name)
  const a = faker.number.int(pcasCode[length].children[o].children.length - 1)
  address.push(pcasCode[length].children[o].children[a].name)
  AllList.push({
    id: faker.string.uuid(),
    title: faker.color.human(),
    address,
    method: faker.number.int({
      min: 1,
      max: 2,
    }),
    first_step: faker.number.int({
      min: 1,
      max: 5,
    }),
    first_price: faker.number.int({
      min: 1,
      max: 5,
    }),
    continued_step: faker.number.int({
      min: 5,
      max: 10,
    }),
    continued_price: faker.number.int({
      min: 5,
      max: 10,
    }),
    infos: [{
      list: ['43', '50'],
      first_step: faker.number.int({
        min: 1,
        max: 5,
      }),
      first_price: faker.number.int({
        min: 1,
        max: 5,
      }),
      continued_step: faker.number.int({
        min: 5,
        max: 10,
      }),
      continued_price: faker.number.int({
        min: 5,
        max: 10,
      }),
    }],
    status: faker.datatype.boolean(),
  })
}

export default defineFakeRoute(
  [
    {
      url: '/mock/delivery/list',
      method: 'get',
      response: ({ query }) => {
        const { title, from, limit } = query
        const list = AllList.filter((item) => {
          return title ? item.title.includes(title) : true
        })
        const pageList = list.filter((_item, index) => {
          return index >= ~~from && index < ~~from + ~~limit
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
      url: '/mock/delivery/detail',
      method: 'get',
      response: ({ query }) => {
        const info = AllList.filter(item => item.id === query.id)
        return {
          error: '',
          status: 1,
          data: info[0],
        }
      },
    },
    {
      url: '/mock/delivery/create',
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
      url: '/mock/delivery/edit',
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
      url: '/mock/delivery/delete',
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
      url: '/mock/delivery/change/status',
      method: 'post',
      response: () => ({
        error: '',
        status: 1,
        data: {
          isSuccess: true,
        },
      }),
    },
  ],
)
