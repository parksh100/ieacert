<template>
  <!-- form태그는 div로 변경 -->
  <div>
  </div>
</template>
<script>
export default {
  // computed: {
  //   userInfo () {
  //     return this.$store.state.user.userInfo
  //   }
  // },
  methods: {
    goToMenu(path) {
      this.$router.push({ path: path })
    }
    // login과 똑같은데 user정보를 모두 지워준다.
    // logout () {
    //   this.$store.commit('user/logout')

    //   this.$router.push({ path: '/' })
    //   // 화면 리프레쉬할때마다 사용자 정보가 날아가버리므로 안날아가게 하는 방법은 store/index.js에 가보면 user정보를 유지하게 작업
    // }
  }
}
</script>
<style scoped>
</style>
