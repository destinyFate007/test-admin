<route lang="yaml">
meta:
  enabled: false
</route>

<script setup lang="ts">
const settingsStore = useSettingsStore()
const userStore = useUserStore()
function handleClick(loginExpiredMode: 'redirect' | 'popup') {
  settingsStore.$patch((state) => {
    state.settings.app.loginExpiredMode = loginExpiredMode
  })
  userStore.requestLogout()
}
</script>

<template>
  <div>
    <FaPageHeader title="登录过期">
      <template #description>
        <div class="space-y-2">
          <p>接口请求遇到拦截器判定为登录过期时，框架提供了 2 种重新登录的方式:</p>
          <p>1、重定向到登录页（默认）</p>
          <p>2、弹出登录窗口</p>
        </div>
      </template>
    </FaPageHeader>
    <FaPageMain title="重定向到登录页">
      <FaButton @click="handleClick('redirect')">
        点击模拟
      </FaButton>
    </FaPageMain>
    <FaPageMain title="弹出登录窗口">
      <FaButton @click="handleClick('popup')">
        点击模拟
      </FaButton>
    </FaPageMain>
  </div>
</template>
