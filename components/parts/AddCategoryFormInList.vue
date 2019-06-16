<template>
	<b-list-group-item v-if="$store.state.todos.isAddingCategory">
		<b-form-group
    	id="input-group-1"
    	label="Category name">
			<b-form-input v-model="categoryData.category_name" id="categoryName" name="name" type="text"></b-form-input>
		</b-form-group>

		<b-form-group
    	id="input-group-1"
    	label="Category color">
			<Sketch v-model="colors" />
		</b-form-group>
		
		<b-button type="submit" variant="primary" v-on:click="addCategory">Submit</b-button>

	</b-list-group-item>
</template>

<script>
import { Sketch } from 'vue-color'


export default {
  name: 'AddCategoryFormInList',
  components: {
	  Sketch
  },
  props:[],
  data:function(){
	  return{
		  categoryData:{
				category_id:"",
				category_name:"",
				color:"#aa66dd",
				todos:[]
		  },
		  colors : {
			hex: '#194d33',
			hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
			hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
			rgba: { r: 25, g: 77, b: 51, a: 1 },
			a: 1
		}
	  }
  },
  methods: {
	  	addCategory:function(event){

			let categoryData = {
				category_id:this.categoryData.category_id,
				category_name:this.categoryData.category_name,
				color:this.colors.hex,
				todos:[]
			}

			//Storeに保存
			this.$store.dispatch('todos/addCategory', categoryData)
			// this.$store.dispatch("todos/toggleTaskForm")
		}
  },
}
</script>
