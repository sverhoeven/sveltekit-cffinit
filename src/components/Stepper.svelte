<script lang="ts">
	import Step from './Step.svelte';
	import { expanded, last_step } from '../store/stepper';
	import {
		is_valid_title_step,
		is_valid_license_step,
		is_valid_abstract_step,
		is_valid_keywords_step,
		is_valid_version_step,
		is_valid_identifiers_step,
		is_valid_resources_step,
		is_valid_authors_step
	} from '../store/cff';
	import { beforeUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { Nav } from 'sveltestrap';

	beforeUpdate(() => {
		last_step.set($page.path);
	});
</script>

<Nav vertical>
	<Step done={$is_valid_title_step} href="/form/title" title="Start" />
	<Step done={$is_valid_authors_step} href="/form/authors" title="Authors" />
	{#if $expanded}
		<Step done={$is_valid_identifiers_step} href="/form/identifiers" title="Identifiers" />

		<Step done={$is_valid_resources_step} href="/form/resources" title="Related resources" />

		<Step done={$is_valid_abstract_step} href="/form/abstract" title="Abstract" />
		<Step done={$is_valid_keywords_step} href="/form/keywords" title="Keywords" />
		<Step done={$is_valid_license_step} href="/form/license" title="License" />
		<Step done={$is_valid_version_step} href="/form/version" title="Version" />
	{/if}
	<Step disabled={true} href="/finish" title="Finish" />
</Nav>
