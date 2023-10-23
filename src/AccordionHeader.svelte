<script>
  import classnames from './utils';
  import Button from "./Button.svelte";
  let className = '';
  export { className as class };

  $: classes = classnames(className, 'accordion-button d-flex justify-content-between');
</script>

<h2 class="accordion-header" {...$$restProps}>
  <button type="button" class={classes} on:click>
    <slot />
    <Button>Action</Button>
  </button>
</h2>
