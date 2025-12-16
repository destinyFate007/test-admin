import api from '@/api/modules/dictionaryExample'

export const useDictionaryStore = defineStore(
  // 唯一ID
  'dictionary',
  () => {
    const isLoaded = ref(false)
    // 字典缓存
    const dictCache = ref<Record<string, any[]>>({})

    /** 初始化字典（加载全部基础字典） */
    const init = async () => {
      if (isLoaded.value) {
        return
      }
      const res = await api.get()
      dictCache.value = res.data.list
      isLoaded.value = true
    }

    /** 获取指定编码的字典列表 */
    const get = async (code: string): Promise<any[]> => {
      // 缓存存在则直接返回
      if (dictCache.value[code]) {
        return dictCache.value[code]
      }
      // 缓存不存在则请求接口并存储
      const res = await api.get(code)
      dictCache.value[code] = res.data.list
      return dictCache.value[code]
    }

    /** 根据value获取name */
    const getName = (code: string, value: string | number): Promise<string | undefined> | string | undefined => {
      // 缓存存在则同步获取
      if (dictCache.value[code]) {
        const item = dictCache.value[code].find(item => item.value === value)
        return item?.name
      }
      // 缓存不存在则异步获取
      return get(code).then((list) => {
        const item = list.find(item => item.value === value)
        return item?.name
      })
    }

    /** 根据name获取value */
    const getValue = (code: string, name: string): Promise<string | number | undefined> | string | number | undefined => {
      // 缓存存在则同步获取
      if (dictCache.value[code]) {
        const item = dictCache.value[code].find(item => item.name === name)
        return item?.value
      }
      // 缓存不存在则异步获取
      return get(code).then((list) => {
        const item = list.find(item => item.name === name)
        return item?.value
      })
    }

    return {
      init,
      get,
      getName,
      getValue,
    }
  },
)
