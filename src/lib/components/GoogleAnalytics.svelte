<script lang="ts">
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Ensure the dataLayer exists
      window.dataLayer = window.dataLayer || [];
  
      // Define the gtag function
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
  
      // Load the Google Tag Manager script dynamically
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-R1G27RBPKP";
      document.head.appendChild(script);
  
      // Initialize Google Analytics when the script loads
      script.onload = () => {
        gtag('js', new Date());
        gtag('config', 'G-R1G27RBPKP');
      };
    });
  </script>