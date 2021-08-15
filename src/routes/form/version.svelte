<script lang="ts">
	import { Form, FormGroup, Input, Label, NavLink } from 'sveltestrap/src';
	import StepperActions from '../../components/StepperActions.svelte';
	import { commit, version, date_released } from '../../store/cff';
	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);
</script>

<Form>
	<FormGroup>
		<Label for="commit">What is the commit identifier of the work?</Label>
		<Input bind:value={$commit} id="commit" placeholder="commit" />
	</FormGroup>

	<FormGroup>
		<Label for="version">What is the version of the work?</Label>
		<Input bind:value={$version} id="version" placeholder="version" />
	</FormGroup>

	<FormGroup>
		<Label for="date_released">When was the version released?</Label>
		<Input
			type="date"
			min="1970-01-01"
			bind:value={$date_released}
			id="date_released"
			placeholder="date_released"
		/>
	</FormGroup>
</Form>

<StepperActions back="license" nofinish={true}>
	<NavLink slot="next" active href="/finish">Finish</NavLink>
</StepperActions>
