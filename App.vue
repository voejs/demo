<template>
  <flex class="app" align="left" valign="top">
    <transition name="slide-left" mode="out-in" appear>
      <div class="side-bar">
        <flex blocked fulled direction="column">
          <div class="logo">H</div>
          <flex :span="1" class="list" blocked>
            <ul>
              <li>
                <Icon type="cube"></Icon>
                <div class="detail">
                  <div class="name">Dash Broad</div>
                  <ul>
                    <li>dfafsa1</li>
                    <li>dfafsa2</li>
                    <li>dfafsa3</li>
                  </ul>
                </div>
              </li>
              <li>
                <Icon type="pie-graph"></Icon>
                <div class="detail">
                  <div class="name">大盘数据</div>
                  <ul>
                    <li>dfafsa4</li>
                    <li>dfafsa5</li>
                    <li>dfafsa6</li>
                  </ul>
                </div>
              </li>
              <li>
                <Icon type="battery-charging"></Icon>
              </li>
              <li>
                <Icon type="nuclear"></Icon>
              </li>
            </ul>
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
        <div class="content">
          <render></render>
        </div>
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

  @side-color-logo: #27203A;
  @side-color-bg: #3D315B;
  @side-color-hover: #4F446B;

  html,body,.app{
    overscroll-behavior: contain;
    background-color: #f0f2f5;
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
        & > ul{
          list-style: none;
          padding: 0;
          margin: 0;
          display: block;
          height: 100%;
          & > li{
            font-size: 20px;
            position: relative;
            color:#fff;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
            transition: all .3s ease-in-out;
            .detail{
              display: none;
              min-width: 200px;
              text-align: left;
              position: absolute;
              top: 0;
              left:60px;
              background-color: #fff;
              font-size: 12px;
              box-shadow: 4px 4px 1px rgba(0,0,0,.05);
              .name{
                height: 50px;
                line-height: 50px;
                padding: 0px 20px;
                background-color: @side-color-hover;
                font-weight: bold;
              }
              & > ul{
                list-style: none;
                padding: 0;
                margin: 0;
                color: #333;
                li{
                  height: 40px;
                  line-height: 40px;
                  padding: 0px 20px;
                  border-bottom: 1px solid #f9f9f9;
                  transition: all .3s ease;
                  &:hover{
                    background-color: #f9f9f9;
                  }
                }
              }
            }
            &:hover{
              background-color: @side-color-hover;
              .detail{
                display: block;
              }
            }
          }
        }
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
              color: #999;
            }
            &:hover{
              color: #333;
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