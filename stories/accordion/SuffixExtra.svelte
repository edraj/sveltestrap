<script lang="ts">
  import { Accordion, AccordionItem } from 'sveltestrap';

  const extraSuffix = {
    action: (event: any)=>{
      event.stopPropagation();
    },
    icon: "plus-square-fill"
  }
</script>

<Accordion on:toggle={console.log}>
  <AccordionItem
    {extraSuffix}
    active
    header="Suffix"
  >
    Extra Suffix
  </AccordionItem>
</Accordion>
<hr />
