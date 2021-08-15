<script lang="ts">
	import { dump } from 'js-yaml';
	import { obj } from '../store/cff';
	import { Button, Card, CardBody, CardFooter, CardText, Icon, Toast } from 'sveltestrap/src';
	$: body = dump($obj, {
		indent: 4
	});

	$: download = `data:text/vnd.yaml,${encodeURIComponent(body)}`;
	export let real = false;
	$: color = real ? 'primary' : 'secondary';
	let mouseover = false;

	let copy_done = false;
	async function copyToClipboard() {
		await navigator.clipboard.writeText(body); // TODO use proper mime type
		copy_done = true;
	}
</script>

<div />

<Card>
	<CardBody>
		<div class="position-absolute p-3 top-0 end-0">
			<Toast
				style="max-width: 80px"
				autohide
				body
				delay={2000}
				isOpen={copy_done}
				on:close={() => (copy_done = false)}
			>
				Copied!
			</Toast>
		</div>
		<CardText>
			<div
				class="copy-container"
				class:mouseover
				on:mouseenter={() => (mouseover = true)}
				on:mouseleave={() => (mouseover = false)}
			>
				<Button size="sm" on:click={copyToClipboard} disabled={copy_done} title="Copy to clipboard"
					><Icon name="file-code" /></Button
				>
			</div>

			<pre
				on:mouseenter={() => (mouseover = true)}
				on:mouseleave={() => (mouseover = false)}>
			{ body }
			</pre>
		</CardText>
	</CardBody>
	<CardFooter>
		<Button {color} block={true} href={download} download="CITATION.cff"
			><Icon name="download" /> Download</Button
		>
	</CardFooter>
</Card>

<style>
	.copy-container {
		position: relative;
		float: right;
		display: none;
	}
	.mouseover {
		display: inline;
	}
</style>
