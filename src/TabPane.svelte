<script>
  import { getContext, onMount } from 'svelte';
  import NavItem from './NavItem.svelte';
  import NavLink from './NavLink.svelte';
  import classnames from './utils.ts';

  let className = '';
  export { className as class };
  export let active = false;
  export let disabled = false;
  export let tab = undefined;
  export let tabId = undefined;
  export let onClick = undefined;

  const tabs = getContext('tabs');
  const { activeTabId, setActiveTab } = getContext('tabContent');

  onMount(() => {
    if (active) setActiveTab(tabId);
  });

  let tabOpen = active;
  $: if ($activeTabId !== undefined) tabOpen = $activeTabId === tabId;
  $: classes = classnames('tab-pane', className, {
    active: tabOpen,
    show: tabOpen
  });
</script>

{#if tabs}
  <NavItem on:click={onClick}>
    <NavLink active={tabOpen} {disabled} on:click={() => setActiveTab(tabId)}>
      {#if tab}{tab}{/if}
      <slot name="tab" />
    </NavLink>
  </NavItem>
{:else}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div {...$$restProps} class={classes} on:click={onClick}>
    <slot />
  </div>
{/if}
