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
            <fa :icon="['fas', 'circle-xmark']" class="close-drawer"/>
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
    flex: 0 auto;
    min-width: 30rem;
    height: calc(100vh - 10.4rem);
    overflow: auto;
    border-right: 0.1rem solid var(--border);
    padding: 1.5rem;
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
    flex: 1 auto;
    padding: 1.5rem;
    width: calc(100% - 30rem);
    height: calc(100vh - 23rem);
    overflow: auto;
}
.left-section a [class*='fa'] {
    width: 2rem;
    margin-right: 1rem;
}
.close-drawer{
    position: fixed;
    right: 1rem;
    bottom: 2.5rem;
    font-size: 3rem;
    color: var(--primary);
    cursor: pointer;
    left: 23rem;
}
</style>
