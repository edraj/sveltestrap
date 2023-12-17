<script lang="ts">
  import { Accordion, AccordionItem } from 'sveltestrap';

  let checkedOuter = true;
  const extraPrefixOuter = {
    action: () => {
      checkedOuter = !checkedOuter;
    },
    value: checkedOuter
  }

  let checkedInner = true;
  const extraPrefixInner = {
    action: () => {
      checkedInner = !checkedInner;
    },
    value: checkedInner
  }
</script>

<Accordion>
  <AccordionItem
    active
    header="Prefix"
    extraPrefix={extraPrefixOuter}
  >
    <Accordion>
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