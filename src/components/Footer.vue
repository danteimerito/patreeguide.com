<template>
    <footer class="bg-green-trans">
        <div>
            <div>Copyright &copy; 2023 - {{ year }} patreeguide.com</div>
            <div class="below-copyright">
                <router-link to="/privacypolicy" rel="noopener noreferrer">Privacy Policy</router-link>
                <a href="mailto:patreeguide@gmail.com">Contact</a>
            </div>
            <div class="site-credit">
                <div>Website by &nbsp;</div>
                <a href="https://www.flobytedigital.com" target="_blank">FloByte Digital</a>
            </div>
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

.below-copyright {
    display: flex;
    flex-direction: row;
    gap: 15px;


}
</style>