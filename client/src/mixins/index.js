// 전역으로 사용하기 위해 믹스인 파일을 index.js에 만듬. 이파일을 main.js에 등록함.
// 모든 화면에 공통으로 사용하는 함수는 믹스인에 넣어서,
// main.js에 등록하여 사용하면 되지만 몇몇 화면에서만 사용하는 함수까지 모두 전역으로 등록하면 매화면마다
// 사용하지도 않는 함수를 불러들여야 하므로 퍼포먼스에 영향이 있음.
// 따라서 그때는 컴포넌트를 import하여 사용하는 방식으로 하는 것이 좋음.

import axios from 'axios'
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'
axios.defaults.baseURL = 'http://localhost:3000' // url에서 요청할 때 이부분을 타이핑 하지 않아도 되도록 편리하게 만듬. 실제 서버 구조가 바뀌었을때 적용이 편리함.
axios.defaults.headers['Content-type'] = 'application/json;charset=utf-8' // cors를 처리하기 위함
axios.defaults.headers['Access-Control-Allow-Origin'] = '*' // cors를 처리하기 위함

export default {
  created() {},
  mounted() {
    console.log('mixin에서 출력')
  },
  unmounted() {},
  methods: {
    // 데이터 조회 함수. 앞으로 조회할 때는  this.$get으로 사용하면 그만.
    async $get(url) {
      return (
        await axios.get(url).catch((e) => {
          console.log(e)
        })
      ).data
    },

    // 데이터 생성하기 위한 함수, 생성할 데이터를 파라미터로 보냄.
    async $post(url, data) {
      return await axios.post(url, data).catch((e) => {
        console.log(e)
      })
    },

    // 데이터 수정하기 위한 함수, 수정할 데이터를 파라미터로 보냄.
    async $put(url, data) {
      return await axios.put(url, data).catch((e) => {
        console.log(e)
      })
    },

    // 데이터 삭제하기 위한 함수. url만 있으면 됨. 전역으로 사용할 수 있게 됨.

    async $delete(url) {
      return await axios.delete(url).catch((e) => {
        console.log(e)
      })
    },

    // 파일업로드 위해 upload하나 만듬.
    async $upload(url, file) {
      const formData = new FormData() // FormData()는 자바스크립트 기본 객체
      formData.append('attachment', file) // html에서 form tag 쓰는것과 똑같음. 파일을 업로드 하려면 반드시 form태그로 해야 하는데 자바스크립트에서 form태그를 쓰지 않고도 동일한 효과를 봄
      // form태그 안에 input type='file'을 만들었는데 그 네임속성이 attachment인것과 동일한 것임.
      return (
        await axios
          .post(url, formData, {
            headers: { 'Content-Type': 'multipart/form-data' } // 위에서 content-type을 ['Content-type'] = 'application/json;charset=utf-8' 로 정의 했으나 이때만큼은 파일을 업로드 할때는 타입을 변경해줘야 함.
          })
          .catch((e) => {
            console.log(e)
          })
      ).data
    },

    // 엑셀다운로드 함수. 미리 만들어 놓은 함수가 있으니 그걸 사용하자
    // npm install exceljs  설치
    // npm install file-saver 하나더 설치

    async $ExcelFromTable(
      header = [],
      rows = [],
      fileName = 'excel',
      option = {}
    ) {
      header = header.filter((h) => h.title && h.key)
      // https://github.com/exceljs/exceljs#tables
      const wb = new ExcelJS.Workbook()
      const ws = wb.addWorksheet()
      // name,{pageSetup:https://github.com/exceljs/exceljs#page-setup}
      ws.addTable({
        name: 'myTable',
        ref: 'A1',
        headerRow: true,
        // style: { theme: 'TableStyleDark3', showRowStripes: true },
        columns: header.map((h) => ({
          name: h.title
        })), // width 설정가능, total함수 가능
        rows: rows.map((r) => header.map((h) => r[h.key])),
        ...option
      })

      saveAs(new Blob([await wb.xlsx.writeBuffer()]), `${fileName}.xlsx`)
    }
  }
}
