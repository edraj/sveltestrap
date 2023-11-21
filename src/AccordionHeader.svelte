<script>
  import classnames from './utils';
  import Icon from "./Icon.svelte";
  import Input from "./Input.svelte";

  let className = '';
  export { className as class };
  export let extraPrefix = null;
  export let extraSuffix = null;

  $: classes = classnames(className, 'accordion-button collapsed d-flex');
  function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    extraPrefix.action();
  }

</script>

<div class="accordion-header" {...$$restProps}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class={classes} data-bs-target="#item_1" data-bs-toggle="collapse" on:click>
    {#if extraPrefix}
        <span><Input type="checkbox" bind:checked={extraPrefix.value} on:change={handleChange} /></span>
    {/if}

    <h5 class="content_title fw-bold m-0"><slot /></h5>

    <div class="ms-auto">
      {#if extraSuffix}
        <span class="far fa-trash-alt cercle-icons delete-icon" data-app-id="1" data-content-id="1"  on:click={extraSuffix.action}>
         <Icon name={extraSuffix.icon}/>
        </span>
      {/if}
    </div>
  </div>
  <!--  <button type="button" class={classes} on:click>-->
  <!--    <p>-->
  <!--      <Button>Action</Button>-->
  <!--    </p>-->
  <!--  </button>-->
</div>

<style>
    .accordion-button::after {
        margin-left: 1.1rem;
    }
</style>
