<template>
    <footer class="bg-green-trans">
        <div>
            Copyright &copy; 2023 - {{ year }} patreeguide.com <a href="/privacypolicy" rel="noopener noreferrer">Privacy Policy</a>
        </div>
    </footer>
</template>

<script setup>
    const d = new Date();
    const year = d.getFullYear();
</script>

<style scoped>
    footer a:hover {
        color: chartreuse;
    }
</style>