<template>
  <flex class="app" align="left" valign="top">
    <transition name="slide-left" mode="out-in" appear>
      <div class="side-bar">
        <flex blocked fulled direction="column">
          <div class="logo" v-redirect="'/'">H</div>
          <flex :span="1" class="list" blocked>
            <page-nav></page-nav>
          </flex>
        </flex>
      </div>
    </transition>
    <flex class="page-content" :span="1" fulled blocked align="left" valign="top" direction="column">
      <transition name="slide-up" appear>
        <flex class="header" blocked align="between" valign="middle">
          <flex class="left">
            <a href="javascript:void(0);" class="link">GitLab</a>
            <a href="javascript:void(0);" class="link">YGG oAuth</a>
            <a href="javascript:void(0);" class="link">Image Store</a>
          </flex>
          <flex class="right">
            <Icon type="social-github" class="item big-icon"></Icon>
            <Badge dot class="item"><Icon type="android-notifications-none" class="big-icon"></Icon></Badge>
            <header-user class="item" account="shenyunjie"></header-user>
          </flex>
        </flex>
      </transition>
      <transition name="fade" appear>
        <render></render>
      </transition>
    </flex>
  </flex>
</template>

<script>
  import Vue from 'vue';
  import iView from 'iview';
  Vue.use(iView);
  
  export default {
    name: "App"
  }
</script>

<style lang="less">
  @import "~normalize.css";
  @import "~iview/dist/styles/iview.css";
  @import "~vue-animate/src/vue-animate";
  @import "./app/lib/style";

  html,body,.app{
    overscroll-behavior: contain;
    background-color: @bg;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    SimSun, sans-serif;
    font-size: 12px;
  }
  .app{
    .side-bar{
      height: 100%;
      width: 60px;
      background-color: @side-color-bg;
      .logo{
        width: 100%;
        background-color: @side-color-logo;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color:#fff;
        font-size: 24px;
        cursor: pointer;
      }
      .list{
        z-index: 9999;
        overflow: visible;
      }
    }
    .page-content{
      .header{
        background-color: #fff;
        height: 50px;
        padding: 0px 20px;
        .left{
          .link{
            margin-right: 20px;
            font-size: 14px;
            transition:all .3s ease;
            &:link,&:visited{
              color: #666;
            }
            &:hover{
              color: @side-color-logo;
            }
          }
        }
        .right{
          .item{
            margin-left: 20px;
            cursor: pointer;
          }
          .big-icon{
            font-size: 20px;
          }
        }
      }
      .content{
        padding: 20px;
      }
    }
  }
</style>