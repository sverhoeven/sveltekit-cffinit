<script lang="ts">
	import { type, title, message } from '../../store/cff';
	import { Form, FormGroup, Input, Label } from 'sveltestrap/src';
	import StepperActions from '../../components/StepperActions.svelte';
</script>

<Form>
	<FormGroup>
		<Label for="title">What is the title of the work?</Label>
		<Input bind:value={$title} id="title" placeholder="title" />
	</FormGroup>

	<FormGroup>
		<Label for="message"
			>What do you want citers to do with the information provided in your CITATION.cff file?</Label
		>
		<Input bind:value={$message} id="message" placeholder="message" />
	</FormGroup>

	<FormGroup>
		<Label>What type of work does this CITATION.cff describe?</Label>
		<Input type="radio" bind:group={$type} value="software" label="Software" />
		<Input type="radio" bind:group={$type} value="dataset" label="Dataset" />
	</FormGroup>
</Form>

<StepperActions noback={true} nofinish={true} next="authors" />
