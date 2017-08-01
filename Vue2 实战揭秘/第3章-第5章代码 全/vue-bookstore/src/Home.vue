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
  },
  components: { Slider, BookList, ModalDialog },
  methods: {
    preview(book) {
      this.selected = book
      console.log(this.selected)
      this.$refs.dialog.open()
    }
  }
}
</script>
