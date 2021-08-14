<script lang="ts">
	import { goto } from '$app/navigation';
	import { authors } from '../../store/cff';
	import type { Author } from '../../store/cff';
	import { expanded } from '../../store/stepper';
	import {
		Form,
		FormGroup,
		Button,
		Input,
		Label,
		Nav,
		NavItem,
		NavLink,
		Container,
		Row,
		Col,
		Icon
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
	function deleteAuthor(index) {
		$authors = $authors.filter((_,i) => i !== index);
	}

	function editAuthor(index) {
		editing = index;
	}
</script>

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
									<Label>Name particle</Label>
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
									<Label>Suffix</Label>
									<Input bind:value={author.name_suffix} />
								</FormGroup>
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
									<Input bind:value={author.orcid} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col>
						<Button on:click={() => deleteAuthor(index)}><Icon name="trash"/></Button>
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
				<Button on:click={() => editAuthor(index)}><Icon name="pencil"/></Button>
			{/if}
		</li>
	{/each}
</ul>
<Button on:click={addAuthor}><Icon name="plus"/></Button>

<Nav pills>
	<NavItem>
		<NavLink href="title">Back</NavLink>
	</NavItem>
	<NavItem>
		<NavLink href="/finish">Finish</NavLink>
	</NavItem>
	<NavItem>
		{#if $expanded}
			<NavLink active href="authors">Next</NavLink>
		{:else}
			<NavLink active on:click={addMoreProperties}>Add more properties</NavLink>
		{/if}
	</NavItem>
</Nav>
