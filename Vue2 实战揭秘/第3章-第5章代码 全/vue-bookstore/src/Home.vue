<template>
  <div v-if="page_data">
    <div class="section">
      <!-- 父组建向子组建传值 -->
      <slider :slides="page_data.top"></slider>
      <div class="announcement">
        <label>快讯</label>
        <span>今日商家的图书全部8折</span>
      </div>
    </div>
    <div class="section">
      <book-list :books="page_data.promotions" heading="最新更新" @select="preview($event)"></book-list>
    </div>
    <div class="section">
      <book-list :books="page_data.recommended" heading="编辑推荐"></book-list>
    </div>
    <!-- this.$refs.dialog -->
    <modal-dialog ref="dialog">
      <div slot="heading"></div>
      <div>
        <div v-if="selected">
          <h2>{{ selected.title }}</h2>
        </div>
      </div>
    </modal-dialog>
  </div>
</template>
<style lang="less">
.announcement {
  font-size: 12px;
  padding: 5px;
  background: #fff;
  & > label {
    padding:  3px 10px;
    margin:  3xp 10px;
    background: #faccb8;
    border-radius: 3px;
    color: #ff5102;
  }
  & > span {
    padding:  3px 10px;
    color: #333;
    display: inline-block;
  }
}
</style>

 <script type="text/ecmascript-6">
import faker from './fixtures/faker'
import Slider from './components/Slider.vue'
import ModalDialog from './components/Dialog.vue'
import BookList from './books/list.vue'
// const testData = {
//   "announcement": {
//     "text": "看看大神们都在用什么前端工具吧",
//     "book_id": 1
//   },
//   "top": [
//     {
//       "id": 7,
//       "img_url": "t1.svg"
//     },
//     {
//       "id": 8,
//       "img_url": "t2.svg"
//     }
//   ],
//   "promotions": [
//     {
//       "id": 1,
//       "title": "揭开数据真相：从小白到数据分析达人",
//       "authors": [
//         "Edward Zaccaro, Daniel Zaccaro"
//       ],
//       "img_url": "1.svg"
//     },
//     {
//       "id": 2,
//       "title": "Android 高级进阶",
//       "authors": [
//         "顾浩鑫"
//       ],
//       "img_url": "2.svg"
//     },
//     {
//       "id": 3,
//       "title": "淘宝天猫电商运营与数据化选品完全手册",
//       "authors": [
//         "老夏"
//       ],
//       "img_url": "3.svg"
//     },
//     {
//       "id": 4,
//       "title": "大数据架构详解：从数据获取到深度学习",
//       "authors": [
//         "朱洁",
//         "罗华霖"
//       ],
//       "img_url": "4.svg"
//     },
//     {
//       "id": 5,
//       "title": "Meteor全栈开发",
//       "authors": [
//         "杜亦舒"
//       ],
//       "img_url": "5.svg"
//     },
//     {
//       "id": 6,
//       "title": "Kubernetes权威指南：从Docker到Kubernetes实践全接触（第2版）",
//       "authors": [
//         "龚正",
//         "吴治辉",
//         "王伟",
//         "崔秀龙",
//         "闫健勇"
//       ],
//       "img_url": "6.svg"
//     }
//   ],
//   "recommended": [
//     {
//       "id": 1,
//       "title": "揭开数据真相：从小白到数据分析达人",
//       "authors": [
//         "Edward Zaccaro, Daniel Zaccaro"
//       ],
//       "img_url": "1.svg"
//     },
//     {
//       "id": 2,
//       "title": "Android 高级进阶",
//       "authors": [
//         "顾浩鑫"
//       ],
//       "img_url": "2.svg"
//     },
//     {
//       "id": 3,
//       "title": "淘宝天猫电商运营与数据化选品完全手册",
//       "authors": [
//         "老夏"
//       ],
//       "img_url": "3.svg"
//     },
//     {
//       "id": 4,
//       "title": "大数据架构详解：从数据获取到深度学习",
//       "authors": [
//         "朱洁",
//         "罗华霖"
//       ],
//       "img_url": "4.svg"
//     }
//   ]
// }

export default {
  data() {
    return {
      page_data: undefined,
      selected: undefined
    }
  },
  mounted() {
    document.title = 'Book store'
  },
  created() {
     this.page_data = faker.getHomeData()
    // this.page_data = testData
    alert(this.page_data)
  },
  components: { Slider, BookList, ModalDialog },
  methods: {
    preview(book) {
      this.selected = book
      this.$refs.dialog.open()
    }
  }
}
</script>
