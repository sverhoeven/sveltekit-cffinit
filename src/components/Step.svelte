<script lang="ts">
	import { page } from '$app/stores';
	import { NavLink, Icon } from 'sveltestrap';

	export let disabled = false;
	export let done = false;
	export let error = false;
	export let href: string;
	export let title: string;
	$: color = error ? 'danger' : 'primary';
</script>

<NavLink {href} {disabled} {color}>
	<!-- TODO icon -->
	<span class:current={$page.path == href}>
		{#if done}
			<Icon name="circle-fill" />
		{:else if error}
			<Icon name="x" />
		{:else}
			<Icon name="circle" />
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
