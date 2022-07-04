<template>
	<div>
		<section id="top">
			<div
				class="section-content overlay d-flex justify-content-center align-items-center"
			>
				<div class="container-xxl">
					<div class="row align-items-center">
						<div class="col-md-9" welcome>
							<h1 class="welcome-title fw-light text-white">
								Welcome to
								<span class="text-warning fw-bold">IEA !</span> <br />
								글로벌 개인자격인증기관에 오신 것을 환영합니다.
							</h1>
							<div class="divider"></div>
							<div class="row welcome-desc">
								<p class="col-sm-10 col-md-12 lead text-white">
									IEA는 최고의 전문가 집단입니다
								</p>
								<!-- <p class="col-sm-2 col-md-12">
                  <a href="#" class="btn btn-primary">Read more</a>
                </p> -->
							</div>
						</div>
						<div class="col-md-3 d-none d-md-block letsgo">
							<div class="card card-body letsgo-card">
								<div class="letsgo my-3">
									<h4 class="letsgo-title card-title text-dark mb-3">
										심사원자격조회
									</h4>
									<p class="card-text text-secondary">
										자격번호와 성명을 입력하여 개인자격현황을 조회할 수
										있습니다.
									</p>
								</div>
								<div class="letsgo-card-form">
									<div>
										<div class="mb-3">
											<input
												type="text"
												class="form-control"
												placeholder="성명"
												v-model="searchName"
											/>
										</div>
										<div class="mb-3">
											<input
												type="text"
												class="form-control"
												placeholder="자격번호"
												v-model="searchLicenseNo"
											/>
										</div>
										<div class="form-check mb-3">
											<input
												type="checkbox"
												class="form-check-input"
												id="flexCheckDefault"
                        value="1"
                        v-model="agreement"
											/>
											<label
												for="flexCheckDefault"
												class="form-check-label text-secondary"
											>
												개인정보제공에 동의합니다.
											</label>
										</div>
										<p class="mb-3">
											<button
												class="btn btn-primary w-100"
												type="button"
												:disabled="searchName === '' || searchLicenseNo===''|| agreement.length===0 "
											>
												자격조회
											</button>
										</p>
									</div>
								</div>
								<!-- <div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">자격번호</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">성명</label>
                  </div>
                  <div class="d-grid mt-3">
                    <button class="btn btn-primary" type="button">
                      조회하기
                    </button>
                  </div>
                </div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="main" class="container mt-5">
			<div class="row d-flex justify-content-center text-center">
				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">자격인증소개</div>
					<div>
						<i class="mt-3 fa-regular fa-file-lines fa-5x"></i>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">자격인증절차</div>
					<i class="mt-3 fa-solid fa-list-check fa-5x"></i>
				</div>
				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">자격인증등록신청</div>
					<i class="mt-3 fa-regular fa-address-card fa-5x"></i>
				</div>
				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">로고사용지침</div>
					<i class="mt-3 fa-regular fa-folder-open fa-5x"></i>
				</div>
				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">자격인증등록비용</div>
					<i class="mt-3 fa-solid fa-wallet fa-5x"></i>
				</div>

				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">자격시험가이드</div>
					<i class="mt-3 fa-regular fa-pen-to-square fa-5x"></i>
				</div>
				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">개인자격조회</div>
					<i class="mt-3 fa-solid fa-magnifying-glass fa-5x"></i>
				</div>

				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">연수기관등록신청</div>
					<i class="mt-3 fa-regular fa-building fa-5x"></i>
				</div>
				<div class="col-lg-3 col-md-6 border p-5 m-1">
					<div class="fs-4 fw-bold">고객센터</div>
					<i class="mt-3 fa-solid fa-headset fa-5x"></i>
				</div>
			</div>
		</section>

		<!-- <section id="intro">
      <div class="section-content">
        <div class="container intro">
          <div class="row align-items-center">
            <div class="col-md-6 intro-first">
              <div class="row px-md-3">
                <div class="col-6">
                  <div
                    class="
                      card card-body
                      my-3
                      position-relative
                      rounded-3
                      shadow-lg
                      intro-first-card
                    "
                  >
                    <div
                      class="
                        overlay
                        d-flex
                        justify-content-center
                        align-items-center
                        position-absolute
                        h-100
                        w-100
                        shadow-lg
                      "
                    >
                      <h3 class="fw-light">
                        <a href="#" class="link-light text-decoration-none"
                          >Page 1</a
                        >
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div
                    class="
                      card card-body
                      my-3
                      position-relative
                      rounded-3
                      shadow-lg
                      intro-first-card
                    "
                  >
                    <div
                      class="
                        overlay
                        d-flex
                        justify-content-center
                        align-items-center
                        position-absolute
                        h-100
                        w-100
                        shadow-lg
                      "
                    >
                      <h3 class="fw-light">
                        <a href="#" class="link-light text-decoration-none"
                          >Page 2</a
                        >
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div
                    class="
                      card card-body
                      my-3
                      position-relative
                      rounded-3
                      shadow-lg
                      intro-first-card
                    "
                  >
                    <div
                      class="
                        overlay
                        d-flex
                        justify-content-center
                        align-items-center
                        position-absolute
                        h-100
                        w-100
                        shadow-lg
                      "
                    >
                      <h3 class="fw-light">
                        <a href="#" class="link-light text-decoration-none"
                          >Page 3</a
                        >
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div
                    class="
                      card card-body
                      my-3
                      position-relative
                      rounded-3
                      shadow-lg
                      intro-first-card
                    "
                  >
                    <div
                      class="
                        overlay
                        d-flex
                        justify-content-center
                        align-items-center
                        position-absolute
                        h-100
                        w-100
                        shadow-lg
                      "
                    >
                      <h3 class="fw-light">
                        <a href="#" class="link-light text-decoration-none"
                          >Page 4</a
                        >
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 intro-second">
              <h5 class="fw-light">Greeting</h5>
              <h1 class="mb-4">Introduce our Website.</h1>
              <div class="intro-text">
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  fugiat quas quasi natus eum mollitia expedita sed sit in,
                  deleniti nam unde eligendi vel laudantium eius? Ad commodi
                  doloribus ipsum!
                </p>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  voluptas iusto pariatur dolorem, vitae repudiandae illum,
                  doloribus autem veritatis nobis et earum. A nostrum nulla
                  alias at placeat delectus! Optio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

		<!-- <section id="services">

      <div class="section-content">
        <div class="container services">
          <div class="services-header text-center mb-5">
            <h1 class="display-5">Our amazing services</h1>
            <div class="divider"></div>
            <p class="lead text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
              officiis? Eaque deleniti ducimus explicabo sapiente suscipit
              fugiat, optio illum aut libero magni, dolore repudiandae odit ad!
              Omnis voluptate sit rem?
            </p>
          </div>
          <div id="slick-slide" class="services-body">
            <div class="services-col mx-2 my-3">
              <div class="card">
                <a href="#"
                  ><img
                    src="@/assets/greyBackground.jpg"
                    alt=""
                    class="card-img-top"
                /></a>
                <div class="card-body">
                  <h4 class="card-title">Slide title</h4>
                  <p class="card-text fw-light mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto nobis esse numquam? Perspiciatis dolorum inventore
                    eligendi nulla voluptates blanditiis, consequatur ea illum
                    sapiente odit assumenda sint aliquid esse modi delectus!
                  </p>
                  <a href="#" class="btn btn-primary">View more...</a>
                </div>
              </div>
            </div>
            <div class="services-col mx-2 my-3">
              <div class="card">
                <a href="#"
                  ><img
                    src="@/assets/greyBackground.jpg"
                    alt=""
                    class="card-img-top"
                /></a>
                <div class="card-body">
                  <h4 class="card-title">Slide title</h4>
                  <p class="card-text fw-light mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto nobis esse numquam? Perspiciatis dolorum inventore
                    eligendi nulla voluptates blanditiis, consequatur ea illum
                    sapiente odit assumenda sint aliquid esse modi delectus!
                  </p>
                  <a href="#" class="btn btn-primary">View more...</a>
                </div>
              </div>
            </div>
            <div class="services-col mx-2 my-3">
              <div class="card">
                <a href="#"
                  ><img
                    src="@/assets/greyBackground.jpg"
                    alt=""
                    class="card-img-top"
                /></a>
                <div class="card-body">
                  <h4 class="card-title">Slide title</h4>
                  <p class="card-text fw-light mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto nobis esse numquam? Perspiciatis dolorum inventore
                    eligendi nulla voluptates blanditiis, consequatur ea illum
                    sapiente odit assumenda sint aliquid esse modi delectus!
                  </p>
                  <a href="#" class="btn btn-primary">View more...</a>
                </div>
              </div>
            </div>
            <div class="services-col mx-2 my-3">
              <div class="card">
                <a href="#"
                  ><img
                    src="@/assets/greyBackground.jpg"
                    alt=""
                    class="card-img-top"
                /></a>
                <div class="card-body">
                  <h4 class="card-title">Slide title</h4>
                  <p class="card-text fw-light mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto nobis esse numquam? Perspiciatis dolorum inventore
                    eligendi nulla voluptates blanditiis, consequatur ea illum
                    sapiente odit assumenda sint aliquid esse modi delectus!
                  </p>
                  <a href="#" class="btn btn-primary">View more...</a>
                </div>
              </div>
            </div>
            <div class="services-col mx-2 my-3">
              <div class="card">
                <a href="#"
                  ><img
                    src="@/assets/greyBackground.jpg"
                    alt=""
                    class="card-img-top"
                /></a>
                <div class="card-body">
                  <h4 class="card-title">Slide title</h4>
                  <p class="card-text fw-light mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto nobis esse numquam? Perspiciatis dolorum inventore
                    eligendi nulla voluptates blanditiis, consequatur ea illum
                    sapiente odit assumenda sint aliquid esse modi delectus!
                  </p>
                  <a href="#" class="btn btn-primary">View more...</a>
                </div>
              </div>
            </div>
            <div class="services-col mx-2 my-3">
              <div class="card">
                <a href="#"
                  ><img
                    src="@/assets/greyBackground.jpg"
                    alt=""
                    class="card-img-top"
                /></a>
                <div class="card-body">
                  <h4 class="card-title">Slide title</h4>
                  <p class="card-text fw-light mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto nobis esse numquam? Perspiciatis dolorum inventore
                    eligendi nulla voluptates blanditiis, consequatur ea illum
                    sapiente odit assumenda sint aliquid esse modi delectus!
                  </p>
                  <a href="#" class="btn btn-primary">View more...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

		<section id="cta" class="position-relative mt-3">
			<div
				class="section-content overlay d-flex flex-column justify-content-center align-items-center position-absolute h-100 w-100"
			>
				<div class="container text-center cta">
					<h3 class="display-6 text-primary">Contact us anytime!</h3>
					<h2 class="display-4 text-light">IEA는 언제나 열려있습니다.</h2>
					<p class="lead text-light mb-4">
						개인자격인증은 IEA가 가장 잘 알고 있습니다.
					</p>
					<h1 class="m-0">
						<a
							href="mailto:info@ieacert.org"
							class="link-warning text-decoration-none"
							>info@ieacert.org</a
						>
					</h1>
				</div>
			</div>
		</section>

		<section id="find-us" class="">
			<div class="container-fluid px-0 mb-3">
				<div id="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.0196159326324!2d126.81109885137323!3d37.57815577969671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c9d2486206d%3A0xd949310547d4bd5d!2z7ISc7Jq47Yq567OE7IucIOqwleyEnOq1rCDquIjrgq3tmZTroZwgMTQ2!5e0!3m2!1sko!2skr!4v1656487179175!5m2!1sko!2skr"
						width="100%"
						height="600"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-4 offset-md-8 col-10 find-us">
						<h3>Contact us!</h3>
						<div class="divider"></div>
						<p class="text-secondary">
							IEA는 수 많은 글로벌 전문가들과 소통하고 있습니다.
						</p>
						<div class="d-flex text-secondary">
							<!-- <p class="fw-bold me-5">
                <span class="text-uppercase">phone</span>:
                <a href="tel:02-2661-8505" class="text-decoration-none"
                  >02-2661-8505</a
                >
              </p> -->
							<p class="fw-bold">
								<span class="text-uppercase">email</span>:
								<a href="mailto:info@ieacert.org" class="text-decoration-none"
									>info@ieacert.org</a
								>
							</p>
						</div>

						<!-- form태그 -->
						<form action="">
							<div class="mb-3">
								<input
									type="text"
									class="form-control"
									placeholder="Your name"
								/>
							</div>
							<div class="mb-3">
								<input
									type="email"
									class="form-control"
									placeholder="Your email"
								/>
							</div>
							<div class="mb-3">
								<textarea
									class="form-control"
									rows="3"
									placeholder="궁금하신 내용을 입력해주세요!"
								></textarea>
							</div>
							<div class="mb-3">
								<input
									type="checkbox"
									id="checkDefault"
									class="form-check-input"
								/>
								<label for="checkDefault" class="form-check-labe text-secondary"
									>개인정보활용에 동의합니다.</label
								>
							</div>
							<p class="mb-3">
								<button class="btn btn-primary w-100">Send!</button>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
		<footer id="footer">
			<div class="section-content">
				<div class="container">
					<div class="row">
						<div class="col-md-3 mb-4 footer-1">
							<img
								src="@/assets/IEALogo.png"
								alt="logo"
								class="img-fluid footer-logo"
							/>
						</div>
						<div class="col-md-3 mb-4 footer-2">
							<h4 class="mb-5">개인자격</h4>
							<ul>
								<li>자격인증소개</li>
								<li>자격인증신청</li>
								<li>자격인증조회</li>
								<li>자격인증시험가이드</li>
							</ul>
						</div>
						<div class="col-md-3 mb-4 footer-3">
							<h4 class="mb-5">교육기관</h4>
							<ul>
								<li>교육기관신청</li>
								<li>교육기관양식</li>
								<!-- <li></li>
                <li>Lorem ipsum dolor sit</li> -->
							</ul>
						</div>
						<div class="col-md-3 mb-4 footer-4">
							<h4 class="mb-4">Our Infos</h4>
							<div class="info-body">
								<p class="mb-2"><i class="fas fa-user"></i> 대표이사: 박수빈</p>
								<p class="mb-2">
									<i class="fas fa-map-marked-alt"></i> 주소: 서울특별시 강서구
									금낭화로 146, 719호
								</p>
								<p class="mb-2">
									<i class="fas fa-phone-square-alt"></i> 전화번호: 02-2661-8505
								</p>
								<p class="mb-2">
									<i class="fas fa-hospital"></i> 사업자등록번호: 112-86-01460
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			sampleData: '',
			searchName: '',
			searchLicenseNo: '',
      agreement: []
		}
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		goToMenu(path) {
			this.$router.push({ path: path })
		}
	}
}
</script>
<style scoped>
/* Golbal */
.section-content {
	padding: 4rem 0;
}
#top {
	background-image: url('@/assets/aaron-burden-QJDzYT_K8Xg-unsplash.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 80vh;
	position: relative;
}
#top .overlay {
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.65);
}

#top .divider {
	width: 10%;
	margin-top: 2rem;
	margin-bottom: 2rem;
	border-top: 2px solid #fff;
}
#main .divider {
	width: 10%;
	margin-top: 2rem;
	margin-bottom: 2rem;
	border-top: 2px solid #fff;
}

#top .welcome {
	padding-right: 8rem;
	color: #fff;
}
#intro .intro-first-card {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 12rem;
}
#intro .col-6:nth-of-type(1) .intro-first-card {
	background-image: url('@/assets/greyBackground.jpg');
}
#intro .col-6:nth-of-type(2) .intro-first-card {
	background-image: url('@/assets/greyBackground.jpg');
}
#intro .col-6:nth-of-type(3) .intro-first-card {
	background-image: url('@/assets/greyBackground.jpg');
}
#intro .col-6:nth-of-type(4) .intro-first-card {
	background-image: url('@/assets/greyBackground.jpg');
}

#intro .intro-first-card .overlay {
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.4);
}

#intro .intro-first-card .overlay a {
	transition: hover 0.4s ease;
}

#intro .intro-first-card .overlay a:hover {
	color: #fafa6f;
}
#services {
	background-color: rgba(96, 125, 139, 0.1);
}

#services .divider {
	width: 10%;
	margin: 2rem auto;
	border-top: 0.5rem solid rgb 255, 112, 3;
}

#services .services-col .card {
	transition: 0.4s;
}

#services .services-col .card:hover {
	transform: translateY(-0.8rem);
	box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgab(0, 0, 0, 0.15);
}

#services .services-col img {
	height: 13rem;
	object-fit: cover;
	object-position: center;
}

#cta {
	background-image: url('@/assets/greyBackground.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	height: 30vh;
}

#cta .section-content {
	background-color: rgba(96, 125, 139, 0.3);

	top: 0;
	left: 0;
}

#find-us {
	position: relative;
}

#find-us .find-us {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 2rem;
	padding: 1.5rem;
	height: auto;
	background-color: rgba(255, 255, 255, 0.85);
	transition: all 0.45 ease-in;
}

#find-us .find-us:hover {
	background-color: #fff;
	box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

@media screen and (max-width: 767px) {
	padding-left: 1rem;
	padding-right: 1rem;
}
</style>
