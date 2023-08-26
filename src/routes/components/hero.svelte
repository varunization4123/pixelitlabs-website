<script>
  import { onMount } from 'svelte';

  let currentImageIndex = 0;
  const images = [
    '/As-seen-on-Mandalorian.png',
    '/As-seen-on-Aevy.png',
    '/As-seen-on-Tech-Patriot-Act.png'
    // Add more image paths here
  ];

  onMount(() => {
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 5000); // Change image every 5 seconds
  });
</script>

<section class="hero">
  <div class="hero-carousel">
    {#each images as image, index}
      <div
        style="background-image: url({image}); opacity: {index === currentImageIndex ? 1 : 0};"
        class:active={index === currentImageIndex}
        key={index}
      ></div>
    {/each}
  </div>
  <div class="hero-content">
    <h1>Welcome to Our Website</h1>
    <p>Your go-to destination for amazing products.</p>
    <a href="#" class="cta-button">Explore Now</a>
  </div>
</section>

<style lang="scss">
   .hero {
    position: relative;
    height: 60vh;
    overflow: hidden;
    color: #fff;
  }

  .hero-carousel {
    display: flex;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-item {
    flex: 0 0 100vw;
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .cta-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .cta-button:hover {
    background-color: #0056b3;
  }
</style>
