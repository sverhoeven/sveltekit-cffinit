<script>
	import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Icon } from 'sveltestrap/src';
</script>

<Navbar color="light" light expand="md">
	<NavbarBrand href="/">Citation file initializer</NavbarBrand>

	<Nav class="ms-auto" navbar>
		<NavItem>
			<NavLink title="Report an issue" href="https://github.com/citation-file-format/cffinit/issues"
				><Icon name="bug" /></NavLink
			>
		</NavItem>
		<NavItem>
			<NavLink
				title="Documentation"
				href="https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md"
				><Icon name="map" /></NavLink
			>
		</NavItem>
		<NavItem>
			<NavLink title="About" href="/about"><Icon name="question-square" /></NavLink>
		</NavItem>
	</Nav>
</Navbar>
