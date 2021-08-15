<script lang="ts">
	import type { Identifier } from '../../store/cff';
	import { available_identifier_types, identifier_type_label_lookup } from '../../store/cff';
	import { identifiers } from '../../store/cff';
	import StepperActions from '../../components/StepperActions.svelte';
	import { Form, FormGroup, Button, Input, Label, Icon } from 'sveltestrap/src';

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
	function deleteIdentifier(index: number) {
		$identifiers = [...$identifiers.slice(0, index)];
	}

	function editIdentifier(index: number) {
		editing = index;
	}
</script>

<div>
	<ul>
		{#each $identifiers as identifier, index}
			<li>
				{#if index === editing}
					<Form>
						<div class="d-flex justify-content-between gap-1">
							<FormGroup>
								{#each available_identifier_types as type_label}
									<Input
										type="radio"
										bind:group={identifier.type}
										value={type_label[0]}
										label={type_label[1]}
										class="form-check-inline"
									/>
								{/each}
							</FormGroup>
							<Button title="Delete" on:click={() => deleteIdentifier(index)}
								><Icon name="trash" /></Button
							>
						</div>
						<FormGroup>
							<Label>Value</Label>
							<Input bind:value={identifier.value} />
						</FormGroup>
						<FormGroup>
							<Label>Description</Label>
							<Input bind:value={identifier.description} />
						</FormGroup>
					</Form>
				{:else}
					<p>{identifier_type_label_lookup.get(identifier.type)}</p>
					<p>{identifier.value}</p>
					<p>{identifier.description}</p>
					<Button title="Edit" on:click={() => editIdentifier(index)}><Icon name="pencil" /></Button
					>
				{/if}
			</li>
		{/each}
	</ul>
	<Button title="Add identifier" on:click={addIdentifier}><Icon name="plus" /></Button>
</div>

<StepperActions back="authors" next="resources" />
