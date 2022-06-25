<template>
  <HeaderLayout />
  <router-view />
  <FooterLayout />
</template>
<script>
// 메뉴를 별도 컴포넌트로 관리하려고 하는것임.
import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'

export default {
  components: { HeaderLayout, FooterLayout }
}
</script>
