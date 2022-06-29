<template>
  <div class="container">
    <h3>자격인증 프로세스</h3>
    <hr class="my-5" />
    <div class="mt-5 minifooter">

      <div class="row align-items-center ">
        <div class="col-4 text-center">
          <h4>시험공고</h4>
        </div>
        <div class="col-8">
          <p>시험공고는 시험 실시 전 홈페이지에 공지됩니다. 공지된 일정을 참고하여 원하는 일정의 시험에 응시하십시오.</p>
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">

        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>시험실시</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
          <p>자격 분야별 일정에 따라 공지된 시험장에서만 실시합니다. </p>
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>결과</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
           <p>시험 결과는 15일 이내에 공지됩니다. </p>
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>자격등록신청</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
          <p>웹사이트 <a @click="goToRegister()"> 자격등록 신청페이지</a>를 이용하여 등록신청합니다. </p>
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>등록비용 납부</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>자격인증검토</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>보완 및 평가등록</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>평가</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>평가위원회 심의</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>승인 <br /> <span>(보완/거부)</span></h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <i class="fa-solid fa-circle-chevron-down fa-3x"></i>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>

      <div class="row align-items-center mb-3">
        <div class="col-4 text-center">
          <h4>인증서 발행</h4>
        </div>
        <!-- fa-10x -->
        <div class="col-8">
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() { },
  created() { },
  mounted() { },
  unmounted() { },
  methods: {
    goToRegister(){
      this.$router.push({path:'/register/apply'})
    }
  }
}
</script>
<style scoped>
.minifooter {
  margin-bottom: 150px;
}
</style>
