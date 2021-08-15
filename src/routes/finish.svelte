<script lang="ts">
	import { Button, Container, Row, Col } from 'sveltestrap/src';
	import { goto } from '$app/navigation';

	import { reset } from '../store/cff';
	import Preview from '../components/Preview.svelte';
	import { last_step } from '../store/stepper';

	function createAnother() {
		reset();
		goto('/form/title');
	}
</script>

<Container class="d-flex flex-column justify-content-between h-100">
	<Row>
		<Col>
			<h1>Congratulations!</h1>

			<Button href={$last_step}>Back to form</Button>
			<Button on:click={createAnother}>Create another</Button>
		</Col>
		<Col>
			<Preview real={true} />
		</Col>
	</Row>
</Container>
