<template>
    <div id="app">
        <h1>{{title}}</h1>
        <ul class="todos">
            <li>
                <input v-model="newTodo" @keyup.13="addItem" placeholder="快写下您要我记住的事吧" autofocus="true">
            </li>
            <li v-for="(todo, index, key) in todos" :key="key" :class="{'checked': todo.done}">
                <input type="checkbox" @change="saveToStore" v-model="todo.done">
                <label>{{index+1}}.{{todo.value}}</label>
                <time>{{todo.created | date}}</time>
                <button @click.prevent="delItem(todo)">
                    <!--delItem-->
                </button>
            </li>
        </ul>
    </div>
</template>

 <script type="text/ecmascript-6">
import './assets/site.less';
import './assets/todos.less';

// JavaScript 日期处理类库 http://momentjs.cn/  
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default {
    // element id/class/
    name: 'app',

    data() {
        // 数据
        return {
            title: 'vue-todos',
            todos: [],
            newTodo: ''
        }
    },
    created() {
        // vue2 生命周期 created
        //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
        //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
        if (this._isInitialized) {
            this.todos = JSON.parse(localStorage.getItem('VUE-TODOS'));
        }

    },
    computed: {
        // 首次访问是没有数据的 返回false
        _isInitialized() {
            return localStorage.getItem('VUE-TODOS') != null;
        }
    },
    filters: {
        // 过滤器
        date(val) {
            return moment(val).calendar();
        }
    },
    methods: {
        // 添加记事
        addItem() {
            this.todos.push({
                value: this.newTodo,
                created: Date.now(),
                done: false
            });
            this.saveToStore();
            this.newTodo = '';
        },
        // 删除记事
        delItem(todo) {
            console.log('del');
            this.todos = this.todos.filter((p) => p !== todo);
            this.saveToStore();
        },
        // 所有记事保持到 localStorage
        saveToStore() {
            localStorage.setItem('VUE-TODOS', JSON.stringify(this.todos));
        }
    }
}
</script>
