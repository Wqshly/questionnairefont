<template>
  <div class="fill-contain background-pic">
    <section class="transform-global-centre form-container">
      <h1>系&nbsp;&nbsp;统&nbsp;&nbsp;登&nbsp;&nbsp;录</h1>
      <el-form>
        <el-form-item></el-form-item>
        <el-form-item></el-form-item>
        <el-form-item>
          <el-button style="float: left;width: 100px;" @click="login('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped lang="less">
  @import "../style/common";

  .background-pic {
    .background-img("../assets/img/login-bg.jpg")
  }
</style>
