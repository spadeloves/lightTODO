<template>
	<b-row>
		<b-col>
			<h1 :style="styles">{{title}}</h1>
		</b-col>
	</b-row>
</template>

<script>
export default {
  	name: 'SectionHeader',
  	props:['title','color'],
  	computed: {
    // バインドするスタイルを生成
	    styles () {
	      	return {
	        	'--color': this.color
	      	}
	    }
  	}
}
</script>

<style>
h1{
	color:var(--color);
}
</style>