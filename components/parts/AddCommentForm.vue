<template>
	<div>
		<b-form-group id="input-group-1" label="Comment">
			<b-textarea v-model="commentData.content" type="text"></b-textarea>
		</b-form-group>

		<b-button type="submit" variant="primary" v-on:click="addComment">Submit</b-button>
	</div>
</template>

<script>


export default {
  name: 'AddCommentForm',
  components: {
  },
  props:[],
  data:function(){
	  return{
		  commentData:{
				date:"",
				content:"",
		  }
	  }
  },
  methods: {
	  	addComment:function(event){
			  
			let dateClass = new Date(); 
			//年・月・日・曜日を取得する
			let year = dateClass.getFullYear();
			let month = dateClass.getMonth()+1;
			let date = dateClass.getDate();

			//時・分・秒を取得する
			let hour = dateClass.getHours();
			let minute = dateClass.getMinutes();

			let commentData = {
				date:year+"/"+month+"/"+date+" "+hour+":"+minute,
				content:this.commentData.content,
			}

			//Storeに保存
			this.$store.dispatch('todos/addComment', commentData)
		}
  },
}
</script>
