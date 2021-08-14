<script lang="ts">
	import { goto } from '$app/navigation';
import { authors } from '../../store/cff';
import type { Author } from '../../store/cff';
	import { expanded } from '../../store/stepper';
	let editing = -1;

	function addMoreProperties() {
		expanded.set(true);
		goto('identifiers');
	}

	function addAuthor() {
		const newAuthor: Author = {
		};
		$authors = [...$authors, newAuthor];
		editing = $authors.length - 1;
	}
	function deleteAuthor(index) {
		$authors = [...$authors.slice(0, index)];
	}

	function editAuthor(index) {
		editing = index;
	}
</script>

AUTHORS

<ul>
	{#each $authors as author, index}
		<li>
			{#if index === editing}
				<label>
					Given name(s)
					<input bind:value={author.given_names} />
				</label>

				<label>
					Name particle
					<input bind:value={author.name_particle} />
				</label>

				<label>
					Family name(s)
					<input bind:value={author.family_names} />
				</label>

				<label>
					Suffix
					<input bind:value={author.name_suffix} />
				</label>

				<label>
					Email
					<input bind:value={author.email} />
				</label>

				<label>
					Affiliation
					<input bind:value={author.affiliation} />
				</label>

				<label>
					ORCID identifier
					<input bind:value={author.orcid} />
				</label>

				<button on:click={() => deleteAuthor(index)}>X</button>
			{:else}
				<p>{author.given_names} {author.name_particle} {author.family_names} {author.name_suffix}</p>
				<p>{author.email}</p>
				<p>{author.affiliation} {author.orcid}</p>
				<button on:click={() => editAuthor(index)}>E</button>
			{/if}
		</li>
	{/each}
</ul>
<button on:click={addAuthor}>+</button>

<ol>
	<li><a href="title">Back</a></li>
	<li><a href="/finish">Finish</a></li>
	<li>
		{#if $expanded}
			<li><a href="authors">Next</a></li>
		{:else}
			<button on:click={addMoreProperties}>Add more properties</button>
		{/if}
	</li>
</ol>
