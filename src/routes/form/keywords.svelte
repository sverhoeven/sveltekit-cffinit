<script lang="ts">
	import { keywords } from '../../store/cff';
	import StepperActions from '../../components/StepperActions.svelte';
	import { Button, Input, Icon } from 'sveltestrap/src';

	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);

	function addKeyword() {
		$keywords = [...$keywords, ''];
	}

	function deleteKeyword(keyword2delete: string) {
		$keywords = $keywords.filter((keyword) => keyword !== keyword2delete);
	}
</script>

<div>
	<ol>
		{#each $keywords as keyword, index}
			<li>
				<div class="d-flex justify-content-between gap-1">
					<!-- svelte-ignore a11y-autofocus -->
					<Input placeholder={`keyword[${1 + index}]`} bind:value={keyword} autofocus />
					<Button title="Delete keyword" on:click={() => deleteKeyword(keyword)}
						><Icon name="trash" /></Button
					>
				</div>
			</li>
		{/each}
	</ol>
	<Button title="Add keyword" on:click={addKeyword}><Icon name="plus" /></Button>
</div>

<StepperActions back="abstract" next="license" />
