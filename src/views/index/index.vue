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
<style lang="sass" scoped>
	.test{
		color: red;
		width: 100px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		background: #ccc;
		box-shadow: inset 0 -2px 1px rgba(0,0,0,.03);
		transform: translateX(50%);
	}
</style>