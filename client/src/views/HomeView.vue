<template>
  <div>
    <section id="top">
      <div
        class="
          section-content
          overlay
          d-flex
          justify-content-center
          align-items-center
        "
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
                  <h4 class="letsgo-title card-title text-dark mb-3 fw-bold">
                    개인자격조회
                  </h4>
                  <p class="card-text text-secondary">
                    자격번호와 성명을 입력하여 개인자격현황을 조회할 수
                    있습니다.
                  </p>
                </div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="main" class="container mt-5">
      <div class="row text-center">
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
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  setup () { },
  created () { },
  mounted () {

  },
  unmounted () { },
  methods: {
    goToMenu (path) {
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

@media screen and (max-width: 767px) {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
