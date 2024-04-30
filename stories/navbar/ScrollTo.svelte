<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">sveltestrap</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="#section-1">Section 1</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#section-2">Section 2</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#section-3">Section 3</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>

<h3 class="my-5" id="section-1">Section 1</h3>
<h3 class="my-5" id="section-2">Section 2</h3>
<h3 class="my-5" id="section-3">Section 3</h3>
