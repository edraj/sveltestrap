<script>
  import classnames from './utils';
  import Icon from "./Icon.svelte";

  let className = '';
  export { className as class };
  export let extra = null;

  $: classes = classnames(className, 'accordion-button collapsed d-flex');
</script>

<h2 class="accordion-header" {...$$restProps}>
  <div class={classes} data-bs-toggle="collapse" data-bs-target="#item_1" on:click>
    <h5 class="content_title fw-bold"><slot /></h5>

    <div class="ms-auto">
      {#if extra}
        <span class="far fa-trash-alt cercle-icons delete-icon" data-app-id="1" data-content-id="1" aria-hidden="true" on:click={extra.action}>
          <h4><Icon name={extra.icon}/></h4>
        </span>
      {/if}
    </div>

  </div>
  <!--  <button type="button" class={classes} on:click>-->
  <!--    <p>-->
  <!--      <Button>Action</Button>-->
  <!--    </p>-->
  <!--  </button>-->
</h2>

<style>
    .accordion-button::after {
        margin-left: 1.1rem;
    }
</style>
