<template>
	<!-- form태그는 div로 변경 -->
	<div>
		<nav
			class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-lg sticky-top mb-5"
		>
			<div class="container">
				<!-- <a href="/" class="navbar-brand align-middle">
          <h3 class="m-0 fw-bold">
            <img
              src="@/assets/IEALogo.png"
              alt="logo"
              height="24px"
              width="30"
              class="d-inline-block"
            />
            IEA Certification
          </h3>
        </a> -->
				<div class="container-fluid">
					<a class="navbar-brand fw-bold" href="/">
						<img
							src="@/assets/IEALogo.png"
							alt=""
							width=""
							height="40"
							class="d-inline-block"
						/>
						아이이에이인증원
					</a>
				</div>
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
							<a
								class="nav-link"
								:class="{ active: $route.path == '/' }"
								@click="goToMenu('/')"
								>Home</a
							>
						</li>

						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								IEA
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/aboutiea/about' }"
										@click="goToMenu('/aboutiea/about')"
										>About IEA</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/aboutiea/ethic' }"
										@click="goToMenu('/aboutiea/ethic')"
										>IEA윤리강령</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/aboutiea/impartial' }"
										@click="goToMenu('/aboutiea/impartial')"
										>공평성선언문</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/aboutiea/policy' }"
										@click="goToMenu('/aboutiea/policy')"
										>IEA방침</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/aboutiea/logo' }"
										@click="goToMenu('/aboutiea/logo')"
										>로고사용지침</a
									>
								</li>
								<!-- <li>
                  <a
                    class="nav-link"
                    :class="{ active: $route.path == '/aboutiea/location' }"
                    @click="goToMenu('/aboutiea/location')"
                    >찾아오시는길</a
                  >
                </li> -->
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								개인자격
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/certification/intro' }"
										@click="goToMenu('/certification/intro')"
										>자격소개</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/certification/search' }"
										@click="goToMenu('/certification/search')"
										>자격조회</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/certification/faq' }"
										@click="goToMenu('/certification/faq')"
										>FAQ</a
									>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								등록신청
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/register/process' }"
										@click="goToMenu('/register/process')"
										>등록절차</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/register/apply' }"
										@click="goToMenu('/register/apply')"
										>등록신청</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/register/fee' }"
										@click="goToMenu('/register/fee')"
										>등록비용</a
									>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								고객센터
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<!-- <li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/contact/notice' }"
										@click="goToMenu('/contact/notice')"
										>공지사항</a
									>
								</li> -->
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/contact/appeal' }"
										@click="goToMenu('/contact/appeal')"
										>부정심사원고발</a
									>
								</li>
								<li>
									<a
										class="nav-link"
										:class="{ active: $route.path == '/contact/complaint' }"
										@click="goToMenu('/contact/complaint')"
										>고객불만/이의제기</a
									>
								</li>
								<!-- <li><a class="dropdown-item" href="#">이메일문의</a></li> -->
							</ul>
						</li>

						<!-- <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/product/category' }"
                @click="goToMenu('/product/category')"
                >Category</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/supplier/create' }"
                @click="goToMenu('/supplier/create')"
                >Supplier</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/supplier/list' }"
                @click="goToMenu('/supplier/list')"
                >Supplier List</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/product/create' }"
                @click="goToMenu('/product/create')"
                >Product Create</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/product/list' }"
                @click="goToMenu('/product/list')"
                >Product List</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/order/create' }"
                @click="goToMenu('/order/create')"
                >Order</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: $route.path == '/shipper' }"
                @click="goToMenu('/shipper')"
                >Shipper</a
              >
            </li> -->
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
.nav-link {
	cursor: pointer;
}

.dropdown-menu {
	font-size: 0.8rem;
}
</style>
