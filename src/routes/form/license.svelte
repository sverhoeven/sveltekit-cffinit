<script lang="ts">
	import StepperActions from '../../components/StepperActions.svelte';
	import { FormGroup, Label } from 'sveltestrap/src';
	import { license } from '../../store/cff';
	import available_licenses from 'spdx-license-ids/index.json';
	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);
</script>

<div>
	<FormGroup>
		<Label for="license">What is the license of the work?</Label>
		<input
			class="form-control"
			id="license"
			placeholder="Type to search..."
			list="available_licenses"
			bind:value={$license}
		/>
		<datalist id="available_licenses">
			{#each available_licenses as available_license}
				<option value={available_license}>
					{available_license}
				</option>
			{/each}
		</datalist>
	</FormGroup>

	<p>
		Don’t have a license? Have a look at <a href="https://choosealicense.com/" rel="external"
			>https://choosealicense.com/</a
		>
	</p>
</div>

<StepperActions back="keywords" next="version" />
