<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(todo, index, key) in todos" :id="index" :key="key">
        <label>{{index + 1}}. {{todo.value}}</label>
      </li>
    </ul>
    <h2>渲染对象属性</h2>
    <ul>
      <li v-for="(value,key) in object" :key="key">{{key}}: {{value}}</li>
    </ul>
  </div>
</template>

<script>
import './assets/todos.less'
export default {
  name: 'app',
  data () {
    return {
      title: 'vue-todos',
      todos: [
        {value: '阅读一本关于前端开发的书', done: false},
        {value: '补充范例代码', done: true},
        {value: '写心得', done: false}
      ],
      object: {
        first_name: 'Ray',
        last_name: 'Liang'
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>
