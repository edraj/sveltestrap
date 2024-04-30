<script>
  import classnames from './utils.ts';

  let className = '';
  export { className as class };
  export let disabled = false;
  export let active = false;
  export let href = '#';

  $: classes = classnames(className, 'nav-link', {
    disabled,
    active
  });

  function handleClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(e.target.getAttribute('href'));
      if (!el) return;
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
</script>

<li>
  <a {...$$restProps} {href} on:click on:click={handleClick} class={classes}>
    <slot />
  </a>
</li>
