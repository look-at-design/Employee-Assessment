<template>
    <div class="rs-container-fluid">
    
    
        <div class="rs-row">
            <div class="rs-col-4 text-left">
                <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="50" height="50" />
            </div>
            <div class="rs-col-4 tab-menu">
                <router-link to="/home/individual">
                    <fa :icon="['fas', 'bullseye']" /> 
                    Goals
                </router-link>
                <router-link to="/reviews"> <fa :icon="['far', 'comment']" /> Reviews   </router-link>
                <router-link to="/feedback"> <fa :icon="['fas', 'rotate-right']" /> Feedback</router-link>
            </div>
            <div class="rs-col-4 ">
                <button class="button-stroke button-pill stroke-light" @click="openRightDrawer()">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThblJWElKs6XqWakTKy0LZTfvzJxjl-EtRCw&usqp=CAU" alt="dp" class="dp">
                <fa :icon="['fas', 'angle-down']" class="color-light me-sm"/>
            </button>
    
            </div>
        </div>
    
    </div>
</template>

<script>
 export default  {
      name: 'topBar',
      props: [],
      mounted () {
  
      },
      data () {
        return {
  
        }
      },
      methods: {
        openRightDrawer(){
          document.getElementById('rightDrawer').classList.add('show')
        },
        
      },
      computed: {
  
      }
  }
</script>

<style scoped>
[class*="rs-col-"] {
    background: var(--headerBg);
    box-shadow: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.dp {
    width: 50px;
    border-radius: 100%;
    box-shadow: 0.5rem 0rem 4rem #ffffff;
}

button {
    gap: 15px;
    padding: 0;
    margin-left: auto;
    overflow: hidden;
}

img.logo {
    border-radius: 100%;
    object-fit: none;
}
.router-link-active{
  position: relative;
  /* border-bottom: 0.2rem solid #41b983; */
  color: #41b983;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.router-link-active::after {
    position: absolute;
    top: -1rem;
    bottom: auto;
    content: '';
    display: block;
    width: 100%;
    height: 0.4rem;
    background: #41b983;
}
.tab-menu a {
    display: flex;
    height: 100%;
    align-items: center;
    gap:1rem;
}
.color-light {
    color: var(--light);
}
.me-sm {
    margin-right: 1.5rem;
}
.stroke-light {
    border: 0.2rem solid var(--light);
}
</style>