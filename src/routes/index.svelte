<script lang="ts">
	import { Button, Container, Row, Col, Card } from 'sveltestrap/src';
</script>

<Container class="d-flex flex-column justify-content-around h-100 overflow-hidden">
	<Row>
		<Col>
			<h1>Welcome to Citation file initializer</h1>
		</Col>
		<Col>
			<div class="rotated">
				<Card class="p-3">
					<pre>
          cff-version: 1.2.0
  message: If you use this software, please cite it using these metadata.
  title: My Research Software
  abstract: This is my awesome research software. It does many things.
  authors:
    - family-names: Druskat
      given-names: Stephan
      orcid: "https://orcid.org/0000-0003-4925-7248"
  version: 0.11.2
  date-released: "2021-07-18"
  identifiers:
    - description: This is the collection of archived snapshots of all versions of My Research Software
      type: doi
      value: "10.5281/zenodo.123456"
    - description: This is the archived snapshot of version 0.11.2 of My Research Software
      type: doi
      value: "10.5281/zenodo.123457"
  license: Apache-2.0
  repository-code: "https://github.com/citation-file-format/my-research-software"

        </pre>
				</Card>
			</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<Button block color="primary" size="lg" href="/form/title">Get started</Button>
		</Col>
	</Row>
</Container>

<style>
	.rotated {
		transform: rotate(20deg);
		transform-origin: bottom left;
	}
</style>
