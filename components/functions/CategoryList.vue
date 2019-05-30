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
				</ul>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	name: 'CategoryList',
	props:['activeCategory'],
	methods: {
		//クリックされたCategoryを活性化する
		setActive:function(event){
			this.$store.dispatch('todos/setActiveCategory', event.target.dataset.categoryid)
		}
	}
}
</script>

<style>

</style>