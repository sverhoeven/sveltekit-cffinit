<script lang="ts">
	import { goto } from '$app/navigation';

	import { reset } from '../store/cff';
	import Preview from '../components/Preview.svelte';
	import { last_step } from '../store/stepper';

	function createAnother() {
		reset();
		goto('/form/title');
	}
</script>

FINISH

<a href={$last_step}>Back to form</a>
<button on:click={createAnother}>Create another</button>

<Preview />
