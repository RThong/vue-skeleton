<template>
	<div class="test">
		{{content}}
	</div>
</template>
<script>
	export default {
		data(){
			return {
				content: 'test'
			}
		}
	}
</script>
<style scoped>
	.test{
		color: red;
	}
</style>