<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let { params } = page;
  let dataReceived = params.dataToSend;

  let decodedData = decodeURIComponent(dataReceived);
</script>

<p>Data received: {decodedData}</p>
