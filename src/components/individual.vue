<template>

  <section class="individual">
    <div class="rs-container">
      <div class="rs-row">
        <div class="rs-col-12">

          <div class="rs-card">
            <div class="rs-card-head">
              <div class="heading-medium">your objective</div>
              <div class="bg-primary text-light new-group">
                <fa :icon="['fas', 'plus']" style="font-size: 1.15rem"/>  New group
              </div>
            </div>
            <div class="rs-card-body">
            
              <div class="d-grid-4">
                <span class="points">
                  <div class="heading-display-large">3</div>
                  <p>active goals</p>
                </span>
                <span class="points">
                  <div class="heading-display-large">20%</div>
                  <p>progress</p>
                </span>
                <span class="points">
                  <div class="heading-display-large">16</div>
                  <p>completed</p>
                </span>
                <span class="points">
                  <div class="heading-display-large">1</div>
                  <p>due in 30 days</p>
                </span>

              </div>
            </div>
            <!-- <div class="rs-card-footer">
              <div class="button-group">
                <button class="button-gray button-block">save</button>
                <button class="button-dark button-block">cancel</button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'individual',
    props: [],
    mounted () {

    },
    data () {
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
  .absolute-top-right {
    position: absolute;
    top: 0;
    right: 0;
  }
.new-group {
  padding: 0.75rem;
  border-radius: 0.5rem;
} 
.points p {
  text-transform: capitalize;
}
.points:not(last-child) {
  border-right: 0.1rem solid var(--border);
  text-align: left;
}
.points .heading-display-large {
  font-weight: 200;
}
</style>
