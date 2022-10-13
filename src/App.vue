

<template>
  <header>
    <div class="wrapper">
      <Topbar />
    </div>
  </header>

  <main>
    <div class="rs-drawer drawer-right" id="rightDrawer">
    <div class="rs-drawer-inner">
      <div class="rs-drawer-head">
        <div class="heading-medium">drawer header</div>
        <div class="icon icon-close rounded" @click="closeRightDrawer()">
          <fa :icon="['fas', 'close']" style="color: #000"/>
        </div>
        
      </div>
      <div class="rs-drawer-body">
        <div class="input-box">
          <div class="input-field">
            <input type="text" required="" id="value1">
            <label for="value1">Enter the value</label>
          </div>
          <div class="input-field mandate">
            <input type="text" required="" id="value2">
            <label for="value2">Enter the value</label>
          </div>
          <div class="input-field baseline">
            <input type="text" required="" id="value3">
            <label for="value3">Enter the value</label>
          </div>
          <div class="input-field baseline mandate">
            <input type="text" required="" id="value4">
            <label for="value4">Enter the value</label>
          </div>
          <div class="heading-medium font-medium brightness-medium">Select</div>
          <div class="input-field select-field">
            <select name="country" id="countryList">
              <option value="india">Japan</option>
              <option value="brazil">england</option>
              <option value="german">maxico</option>
            </select>
          </div>
          <div class="input-field select-field">
            <label for="countryList">Enter the value</label>
            <select name="country" id="countryList">
              <option value="india">Japan</option>
              <option value="brazil">england</option>
              <option value="german">maxico</option>
            </select>
          </div>
          <div class="heading-medium font-medium brightness-medium">Select with filter</div>
          <div class="input-field select-filter select-field">
            <button class="button-block filter-button">Select option</button>
            <ul>
              <div class="search-group">
                <svg class="icon icon-search" width="24" height="24" viewBox="0 0 256 256">
                  <use xlink:href="#rsIconSearch"></use>
                </svg>
                <input type="text" required="" id="filterValue">
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
          <div class="heading-medium font-medium brightness-medium">checkbox</div>
          <div class="check-field">
            <input type="checkbox" name="one" id="checkOne">
            <label for="checkOne">this is the checkbox</label>
          </div>
          <div class="check-field">
            <input type="checkbox" name="one" id="checkTwo">
            <label for="checkTwo">this is the checkbox</label>
          </div>
      
          <div class="heading-medium font-medium brightness-medium">radio</div>
          <div class="radio-field">
            <input type="radio" name="one" id="radioOne">
            <label for="radioOne">this is radio</label>
          </div>
          <div class="radio-field">
            <input type="radio" name="one" id="radioTwo">
            <label for="radioTwo">this is radio</label>
          </div>
      
          <div class="heading-medium font-medium brightness-medium">file upload</div>
          <div class="rs-file-upload">
            <svg class="icon icon-upload" width="24" height="24" viewBox="0 0 256 256">
              <use xlink:href="#rsIconUpload"></use>
            </svg>
            <div class="rs-file">
              <input type="file" name="files[]" id="uploadFile" required="" multiple="multiple">
              <!-- <svg class="icon icon-close" width="18" height="18" viewBox="0 0 256 256">
                <use xlink:href="#rsIconClose"></use>
              </svg> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <router-view />
  </main>
</template>
<script setup>
  import Topbar from "./components/topBar.vue"
  </script>
  <script>

    export default  {
      name: 'App',
      props: [],
      mounted () {
  
      },
      data () {
        return {
  
        }
      },
      methods: {
        closeRightDrawer() {
          var rightDrawer, rightDrawerInner;
          rightDrawer = document.getElementById('rightDrawer');
          rightDrawerInner = rightDrawer.children[0];
          console.log(rightDrawerInner)
          rightDrawerInner.classList.add('drawer-hide');
          setTimeout(()=>{
              rightDrawerInner.classList.remove('drawer-hide');
              rightDrawer.classList.remove('show');

          }, 300)
          }
      },
      computed: {
  
      }
  }
  
  
  </script>
<style scoped>
header {
  position: sticky;
  border-radius: 20px 20px 0 0;
}

main {
  border-radius: 0 0 20px 20px;
    min-height: 200px;
    background: var(--light);
    overflow-y: auto;
    height: calc(100vh - 10.4rem);
}
[class*="fa-"]{
    color: var(--light);
 }
 .icon-close.rounded {
  display: flex;justify-content: center;align-items: center;
 }

</style>
