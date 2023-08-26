<script>
    import NavBar from '$lib/navBar.svelte'
	import Footer from '$lib/footer.svelte';
    import '../global.css'
</script>

<header>
    <NavBar />
</header>
<main>
    <slot></slot>
</main>
<footer>
    <Footer />
</footer>

<style lang="scss">
    header{
        position: fixed;
        z-index: 5;
    }
    footer{
        text-align: center;
        z-index: 1;
    }
</style>