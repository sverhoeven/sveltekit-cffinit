<script lang="ts">
	import { commit, version, date_released } from '../../store/cff';
	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);
</script>

VERSION

<label>
	What is the commit identifier of the work?
	<input bind:value={$commit} />
</label>

<label>
	What is the version of the work?
	<input bind:value={$version} />
</label>

<label>
	When was the version released?
	<input type="date" min="1970-01-01" bind:value={$date_released} />
</label>

<ol>
	<li><a href="license">Back</a></li>
	<li><a href="/finish">Finish</a></li>
</ol>
