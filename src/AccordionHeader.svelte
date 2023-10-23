<script>
  import classnames from './utils';
  // import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";
  let className = '';
  export { className as class };

  $: classes = classnames(className, 'accordion-button collapsed d-flex');
</script>

<h2 class="accordion-header" {...$$restProps}>
  <div class={classes} data-bs-toggle="collapse" data-bs-target="#item_1" on:click>
    <h5 class="content_title fw-bold"><slot /></h5>
    <div class="ms-auto">
      <span class="far fa-trash-alt cercle-icons delete-icon" data-app-id="1" data-content-id="1" aria-hidden="true"><Icon name="globe2" /></span>
    </div>
  </div>
<!--  <button type="button" class={classes} on:click>-->
<!--    <p>-->
<!--      <Button>Action</Button>-->
<!--    </p>-->
<!--  </button>-->
</h2>
