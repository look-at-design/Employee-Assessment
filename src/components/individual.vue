<template>
  <section class="individual">
    <div class="rs-container">
      <div class="rs-row">
        <div class="rs-col-6">
          <div class="rs-card">
            <div class="rs-card-head">
              <div class="heading-medium">your objective</div>
              <button class="bg-primary text-light new-group">
                <fa :icon="['fas', 'plus']" style="font-size: 1.15rem" /> New
                group
              </button>
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
        <div class="rs-col-6">
          <div class="rs-card">
            <div class="rs-card-body">
              <div class="chip-group">
                <div class="rs-chips-group">
                  <div class="rs-chips">Base</div>
                  <div class="rs-chips fill">Base</div>
                  <div class="rs-chips fill chip-remove chip-right">
                    Base
                    <fa :icon="['fas', 'close']" />
                  </div>
                  <div class="rs-chips fill chip-remove chip-right">
                    Base
                    <fa :icon="['fas', 'close']" />
                  </div>
                  <div class="rs-chips chip-remove">
                    Base
                    <fa :icon="['fas', 'close']" />
                  </div>
                  <div class="rs-chips chip-remove chip-dark">
                    Base
                    <fa :icon="['fas', 'close']" />
                  </div>
                  <div class="rs-chips chip-dark">
                    Base
                    <fa :icon="['fas', 'close']" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rs-row">
        <div class="rs-col-12">
          <div class="rs-card">
            <div class="rs-card-body">
              <div class="space-between-flex">
                <div class="chip-group">
                  <div class="rs-chips-group">
                    <div class="rs-chips">Base</div>
                    <div class="rs-chips fill">Base</div>
                    <div class="rs-chips fill chip-remove chip-right">
                      Base
                      <fa :icon="['fas', 'close']" />
                    </div>
                    <div class="rs-chips fill chip-remove chip-right">
                      Base
                      <fa :icon="['fas', 'close']" />
                    </div>
                    <div class="rs-chips chip-remove">
                      Base
                      <fa :icon="['fas', 'close']" />
                    </div>
                    <div class="rs-chips chip-remove chip-dark">
                      Base
                      <fa :icon="['fas', 'close']" />
                    </div>
                    <div class="rs-chips chip-dark">
                      Base
                      <fa :icon="['fas', 'close']" />
                    </div>
                  </div>
                </div>
                <div class="input-field select-filter select-field">
                  <button
                    class="button-block filter-button"
                    @click="toggleFilter()"
                    id="filterButton"
                  >
                    Select option <fa :icon="['fas', 'angle-down']" />
                  </button>
                  <ul id="dataSelect">
                    <div class="search-group">
                      <svg
                        class="icon icon-search"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                      >
                        <use xlink:href="#rsIconSearch"></use>
                      </svg>
                      <input type="text" required="" id="filterValue" />
                    </div>
                    <li>Adambakkam</li>
                    <li>villivakkam</li>
                    <li>anna nagar</li>
                    <li>guindy</li>
                    <li>besant nagar</li>
                    <li>velachery</li>
                    <li>baby nagar</li>
                  </ul>
                </div>
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
export default {
  name: "individual",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    toggleFilter() {
      var buttontFilter, selectFilter, selectFilterText;
      buttontFilter = document.getElementById("filterButton");
      selectFilter = document.getElementById("dataSelect");
      if (selectFilter) {
        selectFilterText = selectFilter.children;
        buttontFilter.addEventListener("click", () => {
          if (selectFilter.style.display == "block") {
            selectFilter.style.display = "none";
          } else {
            selectFilter.style.display = "block";
          }
        });
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.absolute-top-right {
  position: absolute;
  top: 0;
  right: 0;
}
.new-group {
  min-height: 3rem;
    line-height: 3rem;
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
.space-between-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
}
.filter-button {
  gap: 1.5rem;
    min-height: fit-content;
    line-height: 2;
    justify-content: space-between;
}
.rs-chips .fa-xmark {
  font-size: 1.15rem;
}
.select-filter {
  margin-bottom: 0;
  min-width: 23rem;
}
</style>
