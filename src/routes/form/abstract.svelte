<script lang="ts">
	import { abstract } from '../../store/cff';
	import StepperActions from '../../components/StepperActions.svelte';
	import { Form, FormGroup, Input, Label } from 'sveltestrap/src';
	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);
</script>

<Form>
	<FormGroup>
		<Label for="abstract">What is the abstract of the work?</Label>
		<Input type="textarea" bind:value={$abstract} id="abstract" placeholder="abstract" rows="15" />
	</FormGroup>
</Form>

<StepperActions back="resources" next="keywords" />
