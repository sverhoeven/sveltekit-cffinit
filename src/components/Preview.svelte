<script lang="ts">
	import { dump } from 'js-yaml';
	import { obj } from '../store/cff';
	import {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardSubtitle,
		CardText,
		CardTitle
	} from 'sveltestrap/src';
	$: body = dump($obj, {
		indent: 4
	});

	$: download = `data:text/vnd.yaml,${encodeURIComponent(body)}`;
</script>

<div />

<Card>
	<CardBody>
		<CardText>
			<pre>
			{ body }
			</pre>
		</CardText>
	</CardBody>
	<CardFooter>
		<Button href={download} download="CITATION.cff">Download</Button>
	</CardFooter>
</Card>
