<template>
    <section class="home">
        <div class="left-section">
            <router-link to="/">
                <fa :icon="['far', 'user']" /> individual
            </router-link>
            <router-link to="/home/team">
                <fa :icon="['fas', 'people-group']" /> team
            </router-link>
            <router-link to="/home/company">
                <fa :icon="['far', 'building']" /> company
            </router-link>
        </div>
        <div class="right-section">
            <router-view />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home',
    props: [],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-wrap: wrap;
}

.left-section {
    width: 20%;
    max-width: 300px;
    height: calc(100vh - 13.5rem);
    overflow: auto;
    border-right: 0.1rem solid var(--border);
    padding-right: 1.5rem;
}

.left-section a {
    display: block;
    text-transform: capitalize;
    padding: 2rem 1.5rem;
}

.left-section a:hover {
    color: #41b983;
}

.left-section a.router-link-active {
    background: #41b983;
    color: var(--light);
    border-radius: 2rem;
    transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
}

.right-section {
    width: 80%;
    padding: 1.5rem;
}

.left-section a [class*='fa'] {
    width: 2rem;
    margin-right: 1rem;
}
</style>
