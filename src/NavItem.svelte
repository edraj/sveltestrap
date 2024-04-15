<script>
  import classnames from './utils.ts';

  let className = '';
  export { className as class };
  export let active = false;

  $: classes = classnames(className, 'nav-item', active ? 'active' : false);
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li {...$$restProps} class={classes} on:click>
  <slot />
</li>
