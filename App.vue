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
      <flex :span="1" overflow="auto" blocked>
        <render class="page"></render>
      </flex>
    </flex>
  </flex>
</template>

<script src="./app/lib/app.js"></script>
<style lang="less" src="./app/lib/app.less"></style>