<script lang="ts">
  import { Accordion, AccordionItem } from 'sveltestrap';

  let checked = true;
  const extraPrefix = {
    action: (event: any) => {
      event.stopPropagation();
      checked = !checked;
    },
    value: checked
  }
</script>

<Accordion on:toggle={console.log}>
  <AccordionItem
    active
    header="Prefix"
    extraPrefix={extraPrefix}
  >
    Extra Prefix
  </AccordionItem>
</Accordion>
<hr />
Is prefix checked: {checked}