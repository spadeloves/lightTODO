<template>
	<b-row>
		<b-col>
			<h1>{{title}}</h1>
		</b-col>
	</b-row>
</template>

<script>
export default {
  	name: 'SectionHeader',
  	props:['title']	
}
</script>