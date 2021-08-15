<script>
	import { Styles } from 'sveltestrap/src';
	import Header from '../components/Header.svelte';
</script>

<Styles />

<svelte:head>
	<title>Citation file initializer</title>
	<meta name="description" content="Wizard form to create a CITATION.cff file." />
</svelte:head>

<div class="w-100 h-100">
	<Header />
	<div class="page_container w-100 p-3">
		<slot />
	</div>
</div>

<style>
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
	}

	:global(body) {
		height: 100vh;
		width: 100vw;
	}

	:global(#svelte) {
		height: 100%;
		width: 100%;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.page_container {
		/* Exclude navbar from total height */
		height: calc(100% - 56px);
	}
</style>
