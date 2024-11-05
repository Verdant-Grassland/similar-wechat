<script lang="ts" setup>
  // 定义props类型
  const props = defineProps({
    changeAccount: {
      type: Function,
      required: true
    },
    isLogin: {
      type: Boolean,
      required: true
    }
  })
  const imgUrl = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F22%2F20210622154903_3c36a.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672907135&t=77ba3e01d433d87c1e0ea51f9aa39dd3'
  const loginFun = () => {
    console.log('Logging in...')
  }
</script>

<template>
  <div class="content">
    <ElImage :src="imgUrl" class="avatar" draggable="false" />
    <div class="username">爱芳芳</div>
    <ElButton type="success" class="login-button" size="small" @click="loginFun">进入微信</ElButton>
    <div class="action-links">
        <ElLink :underline="false" class="action-link" @click="props.changeAccount" v-if="props.isLogin">切换账号</ElLink>
        <ElLink :underline="false" class="action-link">仅传输文件</ElLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .avatar {
    width: 62px;
    height: 62px;
    border-radius: 4px;
    margin-bottom: 10px;
    -webkit-app-region: no-drag;
  }
  .username {
    font-size: 16px;
    margin-bottom: 30px;
  }
  .login-button {
    width: 141px;
    height: 28px;
    border-radius: 4px;
    -webkit-app-region: no-drag;
  }
  .action-links {
    display: flex;
    justify-content: space-between;
    width: 110px;
    -webkit-app-region: no-drag;
    .action-link {
      color: #576b95;
      font-size: 11px;
      padding: 0;
      height: auto;
      &:hover {
        color: #576b96;
      }
      &:not(.is-disabled) {
        &:active {
          color: #576b97;
        }
      }
    }
  }
}
</style>