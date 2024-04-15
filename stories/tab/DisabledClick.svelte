<script>
  import { TabContent, TabPane } from 'sveltestrap';

  let status = 'alpha';
</script>

{#key status}
<h5>Current state: {status}</h5>
{/key}
<TabContent>
  <TabPane onClick={()=>status="Alpha"} tab="Alpha" active>
    <img
      alt="Alpha Flight"
      src="https://upload.wikimedia.org/wikipedia/en/4/49/Alpha_Flight_cast_picture_%28John_Byrne_era%29.gif"
    />
  </TabPane>
  <TabPane onClick={()=>status="Bravo"} tab="Bravo"></TabPane>
  <TabPane onClick={()=>status="Charlie"} tab="Charlie"></TabPane>
</TabContent>
