<script lang="ts">
	import { license } from '../../store/cff';
	import available_licenses from 'spdx-license-ids/index.json';
	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);
</script>

LICENSE
<label>
	What is the license of the work?
	<select bind:value={$license}>
		<option value={undefined}>No license</option>
		{#each available_licenses as available_license}
			<option value={available_license}>
				{available_license}
			</option>
		{/each}
	</select>
	<p>
		Don’t have a license? Have a look at <a href="https://choosealicense.com/" rel="external"
			>https://choosealicense.com/</a
		>
	</p>
</label>

<ol>
	<li><a href="keywords">Back</a></li>
	<li><a href="/finish">Finish</a></li>
	<li><a href="version">Next</a></li>
</ol>
