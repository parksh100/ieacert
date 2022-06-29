<template>
  <div class="container">
    <h3>자격인증 등록신청</h3>
    <hr class="my-5" />
    <div class="mt-5 minifooter">
      <div class="row mb-3">
        <div class="col-md-4 text-center">신청규격</div>
        <div class="col-md-8">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="qms"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >ISO9001</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="ems"
            />
            <label class="form-check-label" for="inlineCheckbox2"
              >ISO14001</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="ohsms"
            />
            <label class="form-check-label" for="inlineCheckbox3"
              >ISO45001</label
            >
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 text-center">신청유형</div>
        <div class="col-md-8">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="new"
            />
            <label class="form-check-label" for="inlineRadio1">최초인증</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="trans"
            />
            <label class="form-check-label" for="inlineRadio2">전환인증</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="renew"
            />
            <label class="form-check-label" for="inlineRadio3">갱신인증</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              value="add"
            />
            <label class="form-check-label" for="inlineRadio4">규격추가</label>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 text-center">신청등급</div>
        <div class="col-md-8">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="grade1"
              value="auditor"
            />
            <label class="form-check-label" for="grade1">심사원</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="grade2"
              value="leader"
            />
            <label class="form-check-label" for="grade2">선임심사원</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="grade3"
              value="senior"
            />
            <label class="form-check-label" for="grade3">검증심사원</label>
          </div>

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
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.minifooter {
  margin-bottom: 100px;
}
</style>
