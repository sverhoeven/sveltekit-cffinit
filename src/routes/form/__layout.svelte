<script lang="ts">
	import Stepper from '../../components/Stepper.svelte';
	import Preview from '../../components/Preview.svelte';
	import { Col, Container, Row } from 'sveltestrap/src';
</script>

<Container class="h-100">
	<Row class="h-100">
		<Col xs="2">
			<Stepper />
		</Col>
		<Col xs="7" class="d-flex flex-column justify-content-between h-100">
			<slot />
		</Col>
		<Col xs="3">
			<Preview />
		</Col>
	</Row>
</Container>
