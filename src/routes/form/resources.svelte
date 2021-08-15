<script lang="ts">
	import { repository, repository_artifact, repository_code, url } from '../../store/cff';
	import StepperActions from '../../components/StepperActions.svelte';
	import { Form, FormGroup, Input, Label } from 'sveltestrap/src';

	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);
</script>

<Form>
	<FormGroup>
		<Label for="url">The URL of a landing page/website for the work</Label>
		<Input id="url" bind:value={$url} placeholder="url" />
	</FormGroup>
	<FormGroup>
		<Label for="repository">The URL of the work in a repository</Label>
		<Input id="repository" bind:value={$repository} placeholder="repository" />
	</FormGroup>
	<FormGroup>
		<Label for="repository_artifact">
			The URL of the work in a build artifact/binary repository</Label
		>
		<Input
			id="repository_artifact"
			bind:value={$repository_artifact}
			placeholder="repository_artifact"
		/>
	</FormGroup>
	<FormGroup>
		<Label for="repository_code">The URL of the work in a source code repository</Label>
		<Input id="repository_code" bind:value={$repository_code} placeholder="repository_code" />
	</FormGroup>
</Form>

<StepperActions back="identifiers" next="abstract" />
