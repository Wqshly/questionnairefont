<template>
  <div class="fill-contain background-pic">
    <div class="manage-button" @click="manageEnter()">
      管理员入口
    </div>
    <section class="transform-global-centre form-container respondents-form-style">
      <template v-if="identify === 1">
        <h1>基 本 信 息 填 写</h1>
        <el-form :model="studentsForm" style="margin-top: 20px">
          <el-form-item v-model="studentsForm.grade">
            <el-input prop="name"  placeholder="请输入年级"></el-input>
          </el-form-item>
          <el-form-item v-model="studentsForm.code">
            <el-input prop="name"  placeholder="输入4位编码"></el-input>
          </el-form-item>
          <el-form-item label-width="45px" label="性别">
            <el-radio-group v-model="studentsForm.sex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label-width="90px" label="受教育阶段">
            <el-select v-model="studentsForm.education" placeholder="请选择">
              <el-option
                v-for="item in education"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button style="float: left;width: 100px;" @click="login('studentOption')">登录</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template v-else-if="identify === 2">
        <h1>信 息 填 写</h1>
        <el-form :model="respondentsInfoForm">
          <el-form-item></el-form-item>
          <el-form-item></el-form-item>
          <el-form-item>
            <el-button style="float: left;width: 100px;" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template v-else-if="identify === 3">
        <h1>学 校 信 息 填 写</h1>
        <el-form :model="respondentsInfoForm">
          <el-form-item></el-form-item>
          <el-form-item></el-form-item>
          <el-form-item>
            <el-button style="float: left;width: 100px;" @click="login()">登入</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template v-else-if="identify === 0">
        <h1>后  台  登  录</h1>
        <el-form :model="respondentsInfoForm">
          <el-form-item></el-form-item>
          <el-form-item></el-form-item>
          <el-form-item>
            <el-button style="float: left;width: 100px;" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </template>
    </section>
    <el-dialog :visible.sync="dialogVisible" title="选择身份" custom-class="dialog-style"
               :close-on-click-modal="false" :show-close="false" ref="dialog">
      <el-radio-group style="margin-bottom: 15px;" v-model="identify">
        <el-radio :label="1" @click.native="dialogVisible = false">学生</el-radio>
        <el-radio :label="2" @click.native="dialogVisible = false">家长</el-radio>
        <el-radio :label="3" @click.native="dialogVisible = false">校方人员</el-radio>
        <el-radio :label="0" @click.native="dialogVisible = false">后台管理员</el-radio>
      </el-radio-group>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'respondents',
  data () {
    return {
      dialogVisible: true,
      education: [{
        value: '小学',
        label: '小学'
      }, {
        value: '中学',
        label: '中学'
      }, {
        value: '大学',
        label: '大学'
      }],
      studentsForm: {
        grade: null,
        code: null,
        sex: 0,
        education: null
      },
      respondentsInfoForm: {
        name: null
      },
      identify: 1
    }
  },
  methods: {
    login (option) {
      this.$router.push(option)
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
    .respondents-form-style {
      width: 300px;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 900px) {
    .respondents-form-style {
      width: 500px;
    }
  }

  @media screen and (min-width: 900px) {
    .respondents-form-style {
      width: 650px;
    }
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

</style>

<style>

  .dialog-style {
    border-radius: 15px;
  }
</style>
