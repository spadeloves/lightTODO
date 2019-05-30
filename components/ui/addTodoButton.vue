<template>
	<i class="fas fa-plus float-right" v-on:click="showNewTaskInput" v-bind:style="{fontSize: size + 'em', color: color}"></i>
</template>

<script>
export default {
  name: 'addTodoButton',
  props:[
    "size",
  	"color",
  ],
  methods: {
  	showNewTaskInput:function(){
  		//ここに追加フォームを表示する
      this.$store.dispatch("todos/toggleTaskForm");
  	}
  },
}
</script>