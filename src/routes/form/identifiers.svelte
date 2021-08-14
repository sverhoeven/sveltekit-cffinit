<script lang="ts">
	import type { Identifier } from '../../store/cff';
	import { available_identifier_types, identifier_type_label_lookup}from '../../store/cff';
	import { identifiers } from '../../store/cff';

	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);

	let editing = -1;

	function addIdentifier() {
		const newIdentifier: Identifier = {
			type: 'doi',
			value: ''
		};
		$identifiers = [...$identifiers, newIdentifier];
		editing = $identifiers.length - 1;
	}
	function deleteIdentifier(index) {
		$identifiers = [...$identifiers.slice(0, index)];
	}

	function editIdentifier(index) {
		editing = index;
	}
</script>

IDENTIFIERS

<ul>
	{#each $identifiers as identifier, index}
		<li>
			{#if index === editing}
				<div>
					Type
					{#each available_identifier_types as type_label}
						<label>
							<input type="radio" bind:group={identifier.type} value={type_label[0]} />
							{type_label[1]}
						</label>
					{/each}
				</div>

				<label>
					Value
					<input bind:value={identifier.value} />
				</label>

				<label>
					Description
					<input bind:value={identifier.description} />
				</label>

				<button on:click={() => deleteIdentifier(index)}>X</button>
			{:else}
				<p>{identifier_type_label_lookup.get(identifier.type)}</p>
				<p>{identifier.value}</p>
				<p>{identifier.description}</p>
				<button on:click={() => editIdentifier(index)}>E</button>
			{/if}
		</li>
	{/each}
</ul>
<button on:click={addIdentifier}>+</button>

<ol>
	<li><a href="authors">Back</a></li>
	<li><a href="/finish">Finish</a></li>
	<li><a href="resources">Next</a></li>
</ol>
