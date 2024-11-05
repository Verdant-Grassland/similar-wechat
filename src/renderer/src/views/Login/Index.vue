<script lang="ts" setup>
  import { ref } from 'vue'
  import BasePanel from "@renderer/components/BasePanel/Index.vue"
  import AutoLogin from "@renderer/views/AutoLogin/Index.vue"
  import GeneralLogin from "@renderer/views/GeneralLogin/Index.vue"

  const isLogin = ref(true)
  const changeAccount = () => {
    isLogin.value = !isLogin.value
  }
</script>

<template>
  <BasePanel title="微信">
    <!-- 快速登录页面 -->
    <AutoLogin :changeAccount="changeAccount" :isLogin="isLogin" v-if="isLogin" />
    <!-- 普通登录页面 -->
    <GeneralLogin v-else />
  </BasePanel>
</template>

<style lang="scss" scoped>

</style>