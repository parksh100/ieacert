<template>
  <!-- form태그는 div로 변경 -->
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-lg sticky-top mb-5"
    >
      <div class="container">
        <a href="/" class="navbar-brand align-middle">
          <h3 class="m-0">
            <img src="@/assets/IEALogo.png" alt="logo" height="36px" class="" />
            IEA Certification
          </h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-3 mb-lg-0">
            <li class="nav-item">
              <!-- <a href="#top" class="nav-link">Home</a> -->
                         <a
                class="nav-link"
                :class="{ active: $route.path == '/' }"
                @click="goToMenu('/')"
                >Home</a
              >
            </li>
            <li class="nav-item">
               <a
                class="nav-link"
                :class="{ active: $route.path == '/product/category' }"
                @click="goToMenu('/product/category')"
                >Category</a>
            </li>
            <li class="nav-item">
               <a
                class="nav-link"
                :class="{ active: $route.path == '/supplier/create' }"
                @click="goToMenu('/supplier/create')"
                >Supplier</a>
            </li>
            <li class="nav-item">
             <a
                class="nav-link"
                :class="{ active: $route.path == '/supplier/list' }"
                @click="goToMenu('/supplier/list')"
                >Supplier List</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/product/create' }"
                @click="goToMenu('/product/create')"
                >Product Create</a>
            </li>
            <li class="nav-item">
              <a href="#top" class="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
.nav-link{
  cursor: pointer;
}
</style>
