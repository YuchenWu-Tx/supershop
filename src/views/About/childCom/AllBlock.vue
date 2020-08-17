<template>
  <div class="allblock">
    <div class="fir-img-block">
      <img src="~assets/wu.png" alt />
      <block-container :titObj="titObjUl[0]" class="fir-block">
        <template #content>
          <div class="context">
            <table>
              <tr>
                <td>姓<span class="emsp">名：</span></td>
                <td>吴宇琛</td>
              </tr>
              <tr>
                <td>毕业学校：</td>
                <td>华南农业大学</td>
              </tr>
              <tr>
                <td>专<span class="emsp">业：</span></td>
                <td>信息与计算科学</td>
              </tr>
              <tr>
                <td>求职意向：</td>
                <td>初级前端开发工程师</td>
              </tr>
              <tr>
                <td>联系方式：</td>
                <td>15813366617</td>
              </tr>
              <tr>
                <td>邮<span class="emsp">箱：</span></td>
                <td>lves.wu@qq.com</td>
              </tr>
            </table>
          </div>
        </template>
      </block-container>
    </div>

    <block-container :titObj="titObjUl[1]">
      <template #content>
        <block-content :blockmsg="BlockMsg[0]">
          <template #context>
            <p>主修课程：</p>
            <p style="text-indent:2em">数学分析、高等代数、C语言程序设计、Java程序设计、离散数学、概率论、数据结构、常微分方程、数值分析、数学建模、算法分析与设计、计算机网络、数据库原理与方法。</p>
            <p>GPA：3.29/5</p>
          </template>
        </block-content>
      </template>
    </block-container>

    <block-container :titObj="titObjUl[2]">
      <template #content>
        <block-content :blockmsg="BlockMsg[1]">
          <template #context>
            <p>协助公司进行《“天河部落”教研管理综合云服务平台》项目的文档编写</p>
          </template>
        </block-content>
        <block-content :blockmsg="BlockMsg[2]">
          <template #context>
            <p>主要任务：协助公司进行《银狐运维数据分享服务子系统》项目的前端页面编写；</p>
            <p>具体模块：完成运维统计分析模块前端功能，对界面的基础设计以及页面代码编写，使用图表以及文字对数据进行展示，要求做到数据完整性和可视性都需要达标。展示的数据通过ajax接收后端收集的终端基础信息，包括电脑性能数据，电脑使用数据，软件使用数据，网站浏览数据等</p>
          </template>
        </block-content>
      </template>
    </block-container>

    <block-container :titObj="titObjUl[3]">
      <template #content>
        <div class="context">
          <p>专业技能：</p>
          <p>1.精通前端基础技能HTML/HTML5和CSS/CSS3以及JAVASCRIPT；</p>
          <p>2.熟悉前端常用UI框架bootstrap；</p>
          <p>3.精通nodeJS，熟悉使用webpack等构建工具；</p>
          <p>4.具备MVVM框架开发经验，如VueJS；</p>
          <p>5.对后端语言和数据库mongodb、mysql语言有一定的认识。</p>
        </div>
      </template>
    </block-container>

    <block-container :titObj="titObjUl[4]">
      <template #content>
        <div class="context">
          <p>为人乐观开朗，对待工作踏实负责，肯吃苦；学习方面肯下心思，不断学习；对于工作我坚持：做好在做的事。相信自己能够胜任给予的工作</p>
        </div>
      </template>
    </block-container>
  </div>
</template>

<script>
// @ is an alias to /src
import BlockContainer from "./BlockMsg";
import BlockContent from "./BlockContent";
export default {
  name: "AllBlock",
  data() {
    return {
      titObjUl: [
        { title: "个人信息", 
          imglink: require("assets/img/about/mymsg.svg") 
        },
        {
          title: "教育背景(Education)",
          imglink: require("assets/img/about/education.svg")
        },
        {
          title: "工作经历(Practical experience)",
          imglink: require("assets/img/about/experience.svg")
        },
        {
          title: "专业技能(Professional skill)",
          imglink: require("assets/img/about/skill.svg")
        },
        {
          title: "自我评价(Self-assessment)",
          imglink: require("assets/img/about/self.svg")
        }
      ],
      BlockMsg: [
        {
          time: "2016.09-2020.06",
          address: "华南农业大学",
          work: "信息与计算科学"
        },
        {
          time: "2019.07-08",
          address: "广州市乐庚有限公司",
          work: "技术部实习生"
        },
        {
          time: "2019.09-11",
          address: "广州市众盟有限公司",
          work: "前端实习工程师"
        }
      ]
    };
  },
  components: {
    BlockContainer,
    BlockContent
  }
};
</script>
<style lang="less" scoped>
.allblock {
  padding: 20px 0;
}
.context {
  font-size: 13px;
  line-height: 16px;
}
.fir-img-block {
  display: flex;
  img {
    width: 110px;
    margin: 0 10px;
  }
  .fir-block {
    flex: 1;
  }
}
.emsp{
  display: inline-block;
  text-indent: 2em;
}
</style>