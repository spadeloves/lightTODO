<template>
    <b-row>
		<b-col>
			<ul>
				<li v-for='(category,index) in categoryList' :key='index'>
					{{category.name}}
				</li>
			</ul>
		</b-col>
	</b-row>
</template>

<script>
export default {
  	name: 'CategoryList',
  	data: function() {
  		return {	
		    categoryList: [
		    	{
			  		category_id: 1,
			  		name: "Category1",
			  		color:"#11ff11"
				},
				{
			  		category_id: 2,
			  		name: "Category2",
			  		color:"#ff1143"
				},
		    ]
		}
	}
}
</script>