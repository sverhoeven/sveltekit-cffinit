<script lang="ts">
	import Stepper from '../../components/Stepper.svelte';
	import Preview from '../../components/Preview.svelte';
	import { Col, Container, Row } from 'sveltestrap/src';
</script>

<Container>
	<Row>
		<Col xs="2">
			<Stepper />
		</Col>
		<Col xs="7">
			<slot />
		</Col>
		<Col xs="3">
			<Preview />
		</Col>
	</Row>
</Container>
