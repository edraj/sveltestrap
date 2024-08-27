<script>
  import { classnames } from '../utils';

  /**
   * Additional CSS class names for the nav item.
   * @type {string}
   */
  let className = '';
  export { className as class };

  /**
   * Indicates whether the nav item is active.
   * @type {boolean}
   */
  export let active = false;

  $: classes = classnames(className, 'nav-item', active ? 'active' : false);
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li {...$$restProps} class={classes} on:click>
  <slot />
</li>
