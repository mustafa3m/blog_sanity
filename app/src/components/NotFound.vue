<template>
	<div class="notfound">
		<h1>Wooooops!</h1>
		<p>Page Not Found<</p>
		<router-link class="notfound__button" to="/">
			<button>Click here and we'll guide you back to home!</button>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style>
.notfound {
	text-align: center;
	margin: var(--large-spacing);
}
.notfound__button {
	display: block;
	max-width: 500px;
	margin: var(--medium-spacing) auto;
	background: rgb(243, 243, 243);
	border: 2px solid rgb(49, 49, 49);
	padding: 1em;
}
</style>