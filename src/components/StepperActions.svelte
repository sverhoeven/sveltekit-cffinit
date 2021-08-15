<script lang="ts">
	import { Nav, NavItem, NavLink } from 'sveltestrap/src';

	export let back = '';
	export let next = '';
	export let noback = false;
	export let nofinish = false;
</script>

<Nav pills class="justify-content-between">
	{#if !noback}
		<NavItem>
			<NavLink href={back}>Back</NavLink>
		</NavItem>
	{:else}
		<span />
	{/if}
	<div class="btn-group self-align-end">
		{#if !nofinish}
			<NavItem>
				<NavLink href="/finish">Finish</NavLink>
			</NavItem>
		{/if}
		<NavItem>
			<slot name="next">
				<NavLink active href={next}>Next</NavLink>
			</slot>
		</NavItem>
	</div>
</Nav>
