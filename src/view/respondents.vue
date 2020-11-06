<template>
  <div class="fill-contain background-pic">
    <div class="manage-button" @click="manageEnter()">
      管理员入口
    </div>
    <section class="transform-global-centre form-container">
      <h1>信&nbsp;&nbsp;息&nbsp;&nbsp;填&nbsp;&nbsp;写</h1>
      <el-form :model="respondentsInfoForm">
        <el-form-item></el-form-item>
        <el-form-item></el-form-item>
        <el-form-item>
          <el-button style="float: left;width: 100px;" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </section>
    <el-dialog :visible.sync="dialogVisible" title="选择身份" class="dialog-style"
               :close-on-click-modal="false" :show-close="false" ref="dialog">
      <el-radio-group v-model="radio">
        <el-radio :label="1">学生</el-radio>
        <el-radio :label="2">家长</el-radio>
        <el-radio :label="3">校方人员</el-radio>
        <el-radio :label="0">后台管理员</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'respondents',
  data () {
    return {
      dialogVisible: true,
      respondentsInfoForm: {
        name: null
      },
      radio: 3
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    manageEnter () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../style/common";

  @media screen and (max-width: 600px) {
  }

  .background-pic {
    .background-img("../assets/img/login-bg.jpg")
  }

  .manage-button {
    float: right;
    margin-top: 1.5em;
    margin-right: 2.0em;
    color: #ffffff;
  }

  .manage-button:hover {
    color: #3399D0;
    cursor: pointer;
  }

  .dialog-style {
    position: fixed;
  }
</style>
