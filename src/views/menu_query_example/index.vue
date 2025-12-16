<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <FaPageHeader title="带参导航" />
    <FaPageMain>
      {{ route.query }}
    </FaPageMain>
  </div>
</template>
