<script>
  import { createEventDispatcher, getContext, onMount } from 'svelte';

  import { AccordionHeader } from '../AccordionHeader';
  import { Collapse } from '../Collapse';

  import { classnames } from '../utils';
  import { Icon } from '../Icon/index.js';

  /**
   * Additional CSS classes for container element.
   * @type {string}
   * @default ''
   */
  let className = '';
  export { className as class };

  /**
   * The header text or content for the accordion item.
   * @type {string}
   * @default ''
   */
  export let header = '';

  /**
   * Indicates whether the accordion item is initially active (open).
   * @type {boolean}
   * @default false
   */
  export let active = false;

  const dispatch = createEventDispatcher();

  const { stayOpen, toggle, open } = getContext('accordion');

  /**
   * The Accordion DOM element.
   * @type {HTMLDivElement}
   */
  let accordionRef;

  onMount(() => {
    if (active) {
      toggle(accordionRef);
    }
  });

  const onToggle = () => {
    if (stayOpen) {
      active = !active;
    }

    toggle(accordionRef);

    dispatch('toggle', !isOpen);
  };

  $: classes = classnames(className, 'accordion-item');
  $: isOpen = stayOpen ? active : $open === accordionRef;

  export let extraPrefix = null;
  export let extraSuffix = null;

  function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    extraPrefix.action();
  }
</script>

<div class={classes} bind:this={accordionRef}>
  <AccordionHeader on:click={onToggle} class={!isOpen && 'collapsed'}>

    {#if extraPrefix}
      <input style="width: 1rem;margin-right: 0.25rem" type="checkbox" bind:checked={extraPrefix.value} on:change={handleChange} />

      <slot name="header" />
      {header}
    {:else}
      <slot name="header" />
      {header}
    {/if}

    {#if extraSuffix}
      <div style="margin-right: 0.5rem!important;" class="col d-flex justify-content-end align-items-center p-0 m-0">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span class="far fa-trash-alt cercle-icons delete-icon" data-app-id="1" data-content-id="1"  on:click={extraSuffix.action}>
            <Icon name={extraSuffix.icon}/>
          </span>
      </div>
    {/if}

  </AccordionHeader>
  <Collapse {isOpen} class="accordion-collapse" on:introstart on:introend on:outrostart on:outroend>
    <div class="accordion-body">
      <slot />
    </div>
  </Collapse>
</div>
