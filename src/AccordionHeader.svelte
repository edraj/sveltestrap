<script>
  import Icon from "./Icon.svelte";

  export let extraPrefix = null;
  export let extraSuffix = null;

  function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    extraPrefix.action();
  }
</script>

<div class="accordion-header" {...$$restProps}>
  <div class="mx-2 row">
    {#if extraPrefix}
        <input style="width: 1rem" type="checkbox" bind:checked={extraPrefix.value} on:change={handleChange} />
        <h5 class="content_title fw-bold m-0 text-center px-1" style="width: fit-content;"><slot /></h5>
    {:else}
      <h5 class="content_title fw-bold m-0 text-center px-1" style="width: fit-content;"><slot /></h5>
    {/if}

    <div class="col d-flex justify-content-end align-items-center p-0 m-0">
        {#if extraSuffix}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span class="far fa-trash-alt cercle-icons delete-icon" data-app-id="1" data-content-id="1"  on:click={extraSuffix.action}>
           <Icon name={extraSuffix.icon}/>
          </span>
        {/if}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div style="width: fit-content !important;" class="collapsed accordion-button px-1" data-bs-target="#item_1" data-bs-toggle="collapse" on:click></div>
    </div>

  </div>
</div>

<style>
    .accordion-button::after {
        margin-left: 0.5rem;
    }
    .content_title {
        display: flex;
        align-items: center;
    }
</style>
