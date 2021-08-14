<script lang="ts">
	import { abstract } from '../../store/cff';
	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);
</script>

ABSTRACT

<labe>
	What is the abstract of the work?
	<textarea bind:value={$abstract} />
</labe>

<ol>
	<li><a href="resoures">Back</a></li>
	<li><a href="/finish">Finish</a></li>
	<li><a href="keywords">Next</a></li>
</ol>

<style>
	textarea {
		width: 100%;
		height: 200px;
	}
</style>
