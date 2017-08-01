<template>
  <div id="app">
    <div class="content">
      <tabs></tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

 <script type="text/ecmascript-6">
import Tabs from './components/Tabs.vue'
import '!style-loader!css-loader!less-loader!./assets/less/site.less'

export default {
  components: { Tabs }
}
</script>

