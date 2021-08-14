<script lang="ts">
	import { page } from '$app/stores';

	export let disabled = false;
	export let done = false;
	export let error = false;
	export let href: string;
	export let title: string;
</script>

<span class:current={$page.path == href}>
	<!-- TODO icon -->
	{#if done}
		V
	{:else if error}
		X
	{:else}
		_
	{/if}
	{#if disabled}
		{title}
	{:else}
		<a {href}>{title}</a>
	{/if}
</span>

<style>
	/* TODO color */

	.current {
		font-weight: bold;
	}
</style>
