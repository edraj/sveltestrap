<script lang="ts">
  import { Accordion, AccordionItem } from 'sveltestrap';

  let checked = true;
  const extraPrefix = {
    action: () => {
      checked = !checked;
    },
    value: checked
  }
</script>

<Accordion>
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