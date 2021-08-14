<script lang="ts">
	import { page } from '$app/stores';
	import { NavLink } from 'sveltestrap';

	export let disabled = false;
	export let done = false;
	export let error = false;
	export let href: string;
	export let title: string;
</script>

<NavLink {href} {disabled}>
	<!-- TODO icon -->
	<span class:current={$page.path == href}>
		{#if done}
			V
		{:else if error}
			X
		{:else}
			_
		{/if}
		{title}
	</span>
</NavLink>

<style>
	/* TODO color */
	.current {
		font-weight: bold;
	}
</style>
