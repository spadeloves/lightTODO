<template>
	<div class="category_list_wrap">
	    <b-row>
				<b-col>
					<ul>
						<b-list-group-item
						v-on:click="setActive"
						v-for='(category,index) in $store.state.todos.todoData' :key='index'
						:href="'#'+category.category_id"
						:data-categoryid="category.category_id"
						:active="$store.state.todos.activeCategory==category.category_id">
						<i class="fas fa-circle" v-bind:style="{color:category.color}"></i> {{category.category_name}}
					</b-list-group-item>
					<AddCategoryFormInList></AddCategoryFormInList>
				</ul>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import AddCategoryFormInList from '~/components/parts/AddCategoryFormInList.vue'

export default {
	name: 'CategoryList',
	components:{
		AddCategoryFormInList
	},
	props:['activeCategory'],
	methods: {
		//クリックされたCategoryを活性化する
		setActive:function(event){
			this.$store.dispatch('todos/setActiveCategory', event.target.dataset.categoryid)
			this.$store.dispatch('todos/setActiveTask', 0)
		}
	}
}
</script>

<style>

</style>
