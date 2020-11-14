<template>
  <div class="fill-contain background-pic">
    <section class="transform-global-centre form-container respondents-form-style">
      <template v-for="(item,index) in entryPageList">
        <template v-if="index === optionChoice">
          <el-form v-bind:key="index" :model="item.form" label-width="90px">
            <h1 style="margin-bottom: 20px;">{{item.title}}</h1>
            <template v-for="(formItem,index) in item.formList">
              <el-form-item :key="index" :label="formItem.name">
                <template v-if="formItem.type === 'input'">
                  <el-input v-model="item.form[formItem.vModelValue]" :placeholder="formItem.placeholder"></el-input>
                </template>
                <template v-if="formItem.type === 'select'">
                  <el-select style="" v-model="item.form[formItem.vModelValue]" placeholder="请选择">
                    <el-option v-for="(selectOption,index) in formItem.option"
                               v-bind:key="index"
                               :value="selectOption">
                    </el-option>
                  </el-select>
                </template>
              </el-form-item>
            </template>
            <el-button style="float: left;width: 100px;" @click="checkIdentify">重选身份</el-button>
            <el-button style="float: right;width: 100px;" @click="login(item.form)" type="primary">登录</el-button>
          </el-form>
        </template>
      </template>
    </section>
    <el-dialog :visible.sync="dialogVisible" title="选择身份" custom-class="dialog-style"
               :close-on-click-modal="false" :show-close="false" ref="dialog">
      <el-radio-group style="margin-bottom: 15px;" v-model="optionChoice">
        <template v-for="(item,index) in entryPageList">
          <div :key="index" class="radio-style">
            <el-radio :label="index" @click.native="dialogVisible = false">{{item.identify}}</el-radio>
          </div>
        </template>
      </el-radio-group>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'entryPage',
  data () {
    return {
      title: '填写信息',
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
        nation: null,
        education: null
      },
      respondentsInfoForm: {
        name: null
      },
      identify: '',
      optionChoice: 0,
      entryPageList: [
        {
          identify: '学生',
          title: '基本信息填写',
          form: {
            code: null,
            education: null,
            grade: null,
            sex: null,
            nation: null
          },
          formList: [
            {
              name: '编码:',
              type: 'input',
              vModelValue: 'code',
              placeholder: '请输入4位编码'
            },
            {
              name: '受教育阶段:',
              type: 'select',
              vModelValue: 'education',
              option: ['小学', '初中', '高中', '大学']
            },
            {
              name: '年级:',
              type: 'select',
              vModelValue: 'grade',
              option: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
            },
            {
              name: '性别:',
              type: 'select',
              vModelValue: 'sex',
              option: ['男', '女']
            },
            {
              name: '民族:',
              type: 'select',
              vModelValue: 'nation',
              option: ['汉族', '蒙古族', '藏族', '壮族', '回族', '其他']
            }
          ]
        },
        {
          identify: '家长',
          title: '基本信息填写'
        },
        {
          identify: '校方人员',
          title: '基本信息填写'
        },
        {
          identify: '常见病监测专业技术人员',
          title: '信息挑选'
        },
        {
          identify: '疾病预防控制中心专业人员',
          title: '信息挑选'
        },
        {
          identify: '后台管理员',
          title: '后台人员登录入口'
        }
      ]
    }
  },
  methods: {
    login (option) {
      console.log(option)
    },
    checkIdentify () {
      this.dialogVisible = true
    },
    manageEnter () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../style/common";

  @media screen and (max-width: 750px) {
    .respondents-form-style {
      width: 300px;
    }
    .title-style {}
  }

  @media screen and (min-width: 750px) and (max-width: 1200px) {
    .respondents-form-style {
      width: 500px;
    }
    .radio-style {
      float: left;
      margin-right: 10px;
    }
    .title-style {}
  }

  @media screen and (min-width: 1200px) {
    .respondents-form-style {
      width: 650px;
    }
    .radio-style {
      float: left;
      margin-right: 30px;
    }
    .title-style {}
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
