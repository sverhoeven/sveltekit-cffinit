<script>
	import { Styles } from 'sveltestrap/src';
	import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Icon } from 'sveltestrap/src';
</script>

<Styles />

<Navbar color="light" light expand="md">
	<NavbarBrand href="/">Citation file initializer</NavbarBrand>

	<Nav class="ms-auto" navbar>
		<NavItem>
			<NavLink title="Report an issue" href="https://github.com/citation-file-format/cffinit/issues"><Icon name="bug"/></NavLink>
		</NavItem>
		<NavItem>
			<NavLink href="https://github.com/citation-file-format/citation-file-format">Docs</NavLink>
		</NavItem>
		<NavItem>
			<NavLink href="/about">About</NavLink>
		</NavItem>
	</Nav>
</Navbar>

<div style="padding-top: 30px">
	<slot />
</div>
