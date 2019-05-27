<template>
	<div class="category_list_wrap">
	    <b-row>
				<b-col>
					<ul>
						<b-list-group-item 
						v-on:click="setActive" 
						v-for='(category,index) in todoData' :key='index' 
						:href="'#'+category.category_id" 
						:data-categoryid="category.category_id" 
						:active="active_id==category.category_id">
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
	data: function() {
		return {
			active_id:"none",
		}
	},
	props:['todoData','activeCategory'],
	methods: {
		//クリックされたCategoryを活性化する
		setActive:function(event){
			this.active_id = event.target.dataset.categoryid;
			this.$emit('changeCategory', this.active_id);
		}
	}
}
</script>

<style>

</style>