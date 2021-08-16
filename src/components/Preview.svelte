<script lang="ts">
	import { dump } from 'js-yaml';
	import { obj } from '../store/cff';
	import { Button, Card, CardBody, CardFooter, CardText, Icon, Toast } from 'sveltestrap/src';
	import Highlight from 'svelte-highlight';
	import YAML from 'svelte-highlight/src/languages/yaml';
	import github from 'svelte-highlight/src/styles/github';
	import { is_yaml_valid } from '../store/validate';

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

<svelte:head>
	{@html github}
</svelte:head>

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
			<div
				class="w-100"
				on:mouseenter={() => (mouseover = true)}
				on:mouseleave={() => (mouseover = false)}
			>
				<Highlight language={YAML} code={body} />
			</div>
		</CardText>
	</CardBody>
	<CardFooter>
		{#if $is_yaml_valid.valid}
			<p>File is valid</p>
		{:else}
			<p>File is invalid</p>
			<ul>
				{#each $is_yaml_valid.errors as e}
					<li title={JSON.stringify(e, undefined, 2)}>{e.message}</li>
				{/each}
			</ul>
		{/if}
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
