<template>
  <HeaderLayoutIea class="sticky-top" />
  <router-view />
  <FooterLayout />
</template>
<script>
// 메뉴를 별도 컴포넌트로 관리하려고 하는것임.
// import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
import HeaderLayoutIea from './components/layouts/HeaderLayoutIea.vue'
// import FooterLayoutIea from './components/layouts/FooterLayoutIea.vue'
// import HeaderLayoutIea from './components/layouts/HeaderLayoutIea.vue'

export default {
  components: { HeaderLayoutIea, FooterLayout }
}
</script>
<style>
* {
  font-family: 'Nanum Gothic', sans-serif;
}
</style>
