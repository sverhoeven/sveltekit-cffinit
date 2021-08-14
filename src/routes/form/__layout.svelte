<script lang="ts">
	import Stepper from '../../components/Stepper.svelte';
	import Preview from '../../components/Preview.svelte';
</script>

<div>
	<Stepper />
	<div>
		<slot />
	</div>
	<Preview />
</div>
