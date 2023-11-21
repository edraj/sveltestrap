<script lang="ts">
  import { Accordion, AccordionItem } from 'sveltestrap';

  let checkedOuter = true;
  const extraPrefixOuter = {
    action: (event: any) => {
      event.stopPropagation();
      checkedOuter = !checkedOuter;
    },
    value: checkedOuter
  }

  let checkedInner = true;
  const extraPrefixInner = {
    action: (event: any) => {
      event.stopPropagation();
      checkedInner = !checkedInner;
    },
    value: checkedInner
  }
</script>

<Accordion on:toggle={console.log}>
  <AccordionItem
    active
    header="Prefix"
    extraPrefix={extraPrefixOuter}
  >
    <Accordion on:toggle={console.log}>
      <AccordionItem
        active
        header="Prefix"
        extraPrefix={extraPrefixInner}
      >
        Extra Prefix
      </AccordionItem>
    </Accordion>
  </AccordionItem>
</Accordion>
<hr />
Is checkedOuter: {checkedOuter}
<br>
Is checkedInner: {checkedInner}