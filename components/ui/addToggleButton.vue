<template>
	<i class="fas fa-plus float-right" v-on:click="toggleForm" v-bind:style="{fontSize: size + 'em', color: color}"></i>
</template>

<script>
export default {
  name: 'addToggleButton',
  props:[
    "size",
  	"color",
		"target",
  ],
  methods: {
  	toggleForm:function(){
  		//ここに追加フォームを表示する
      this.$store.dispatch("todos/"+this.target);
  	}
  },
}
</script>
