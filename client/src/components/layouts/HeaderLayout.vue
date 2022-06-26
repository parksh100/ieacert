<template>
  <!-- form태그는 div로 변경 -->
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">IEA Certification</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <!-- 클릭한 메뉴에 active걸리도록 처리 -->
              <a
                class="nav-link"
                :class="{ active: $route.path == '/home' }"
                aria-current="page"
                @click="goToMenu('/home')"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <!-- 클릭한 메뉴에 active걸리도록 처리 -->
              <a
                class="nav-link"
                :class="{ active: $route.path == '/product/category' }"
                @click="goToMenu('/product/category')"
                >Category</a
              >
            </li>
            <li class="nav-item">
              <!-- 클릭한 메뉴에 active걸리도록 처리 -->
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/singleedit' }"
                @click="goToMenu('/template/singleedit')"
                >SingleEdit</a
              >
            </li>
            <li class="nav-item">
              <!-- 클릭한 메뉴에 active걸리도록 처리 -->
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/multipleedit' }"
                @click="goToMenu('/template/multipleedit')"
                >MultipleEdit</a
              >
            </li>
            <li class="nav-item">
              <!-- 클릭한 메뉴에 active걸리도록 처리 -->
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/masterdetail' }"
                @click="goToMenu('/template/masterdetail')"
                >MasterDetail</a
              >
            </li>
            <li class="nav-item">
              <!-- 클릭한 메뉴에 active걸리도록 처리 -->
              <a
                class="nav-link"
                :class="{ active: $route.path == '/template/shuttle' }"
                @click="goToMenu('/template/shuttle')"
                >Shuttle</a
              >
            </li>
          </ul>
          <!-- <div class="d-flex">
            <span
              v-if="userInfo.name"
              class="text-white"
            >{{
              userInfo.name
            }}</span>
            <button
              class="btn btn-outline-success"
              @click="logout"
            >
              로그아웃
            </button>
          </div> -->
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  // computed: {
  //   userInfo () {
  //     return this.$store.state.user.userInfo
  //   }
  // },
  methods: {
    goToMenu (path) {
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
<style>

</style>
