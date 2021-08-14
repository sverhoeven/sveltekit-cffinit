<script lang="ts">
	import { keywords } from '../../store/cff';

	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);

	function addKeyword() {
		$keywords = [...$keywords, '']
	}

	function deleteKeyword(todo2delete) {
		$keywords = $keywords.filter((todo) => todo !== todo2delete);
	}
</script>

KEYWORDS

<ul>
	{#each $keywords as keyword}
		<li>
			<!-- svelte-ignore a11y-autofocus -->
			<input type="text" bind:value={keyword} autofocus/>
			<button on:click={() => deleteKeyword(keyword)}>X</button>
		</li>
	{/each}
</ul>
<button on:click={addKeyword}>+</button>

<ol>
	<li><a href="abstract">Back</a></li>
	<li><a href="/finish">Finish</a></li>
	<li><a href="license">Next</a></li>
</ol>
