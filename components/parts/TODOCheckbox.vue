<template>
	<i class="far fa-check-square" v-if='todoIsCompleted' v-on:click="changeTODOStatus(false)"></i>
    <i class="far fa-square" v-on:click="changeTODOStatus(true)" v-else></i>
</template>

<script>
export default {
  name: 'TODOCheckbox',
  props:['todoId','categoryId','todoIsCompleted'],
  methods: {
  	changeTODOStatus:function(status){
  		console.log(this.todoIsCompleted);
  		this.todoIsCompleted = status;
  		console.log(this.todoIsCompleted);
  	}
  },
}
</script>