export const useMenuBadgeStore = defineStore(
  // 唯一ID
  'menuBadge',
  () => {
    const dot = ref(true)
    const number = ref(10)
    const text = ref('热门')
    const variant = ref<'default' | 'secondary' | 'destructive'>('destructive')

    function switchDot() {
      dot.value = !dot.value
    }

    function setNumber(val: number) {
      number.value = val
    }

    function setText(val: string) {
      text.value = val
    }

    function setVariant(val: 'default' | 'secondary' | 'destructive') {
      variant.value = val
    }
    function $reset() {
    }
    return {
      $reset,
      dot,
      number,
      text,
      variant,
      switchDot,
      setNumber,
      setText,
      setVariant,
    }
  },
)
