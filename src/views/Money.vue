<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex; //使用flex布局
  flex-direction: column; //竖着布局
  height: 100vh; //高度就是100%
}

.content {
  border: 1px solid blue;
  overflow: auto; //滚动条
  flex-grow: 1; //让蓝色的区域尽量占满
}

</style>