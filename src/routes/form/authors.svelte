<script lang="ts">
	import { goto } from '$app/navigation';
	import { authors } from '../../store/cff';
	import type { Author } from '../../store/cff';
	import { expanded } from '../../store/stepper';
	import StepperActions from '../../components/StepperActions.svelte';
	import {
		Form,
		FormGroup,
		Button,
		Input,
		Label,
		NavLink,
		Container,
		Row,
		Col,
		Icon,
		FormText
	} from 'sveltestrap/src';

	let editing = -1;

	function addMoreProperties() {
		expanded.set(true);
		goto('identifiers');
	}

	function addAuthor() {
		const newAuthor: Author = {};
		$authors = [...$authors, newAuthor];
		editing = $authors.length - 1;
	}
	function deleteAuthor(index: number) {
		$authors = $authors.filter((_, i) => i !== index);
	}

	function editAuthor(index: number) {
		editing = index;
	}
</script>

<div class="overflow-auto">
	<ul>
		{#each $authors as author, index}
			<li>
				{#if index === editing}
					<Form>
						<Container>
							<Row>
								<Col>
									<FormGroup>
										<Label>Given name(s)</Label>
										<Input bind:value={author.given_names} />
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<Label
											title="e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt')."
											>Name particle</Label
										>
										<Input bind:value={author.name_particle} />
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<Label>Family name(s)</Label>
										<Input bind:value={author.family_names} />
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<Label
											title="e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III."
											>Suffix</Label
										>
										<Input bind:value={author.name_suffix} />
									</FormGroup>
								</Col>
								<Col>
									<Button on:click={() => deleteAuthor(index)}><Icon name="trash" /></Button>
								</Col>
							</Row>
							<Row>
								<Col>
									<FormGroup>
										<Label>Email</Label>
										<Input type="email" bind:value={author.email} />
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col>
									<FormGroup>
										<Label>Affiliation</Label>
										<Input bind:value={author.affiliation} />
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<Label>ORCID identifier</Label>
										<Input
											bind:value={author.orcid}
											placeholder="https://orcid.org/XXXX-XXXX-XXXX-XXXX"
										/>
									</FormGroup>
								</Col>
							</Row>
						</Container>
					</Form>
				{:else}
					<p>
						{author.given_names}
						{author.name_particle}
						{author.family_names}
						{author.name_suffix}
					</p>
					<p>{author.email}</p>
					<p>{author.affiliation} {author.orcid}</p>
					<Button on:click={() => editAuthor(index)}><Icon name="pencil" /></Button>
				{/if}
			</li>
		{/each}
	</ul>
	<Button title="Add author" on:click={addAuthor}><Icon name="plus" /></Button>
</div>

<StepperActions back="title">
	<svelte:fragment slot="next">
		{#if $expanded}
			<NavLink active href="identifiers">Next</NavLink>
		{:else}
			<NavLink active on:click={addMoreProperties}>Add more properties</NavLink>
		{/if}
	</svelte:fragment>
</StepperActions>
