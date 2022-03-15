<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <section class="home">
    <div class="photo">
      <img src="../assets/img/vrizas.png" alt="Vrizas Photo">
      <span class="back-text">VRIZAS</span>
    </div>
    <article>
      <h1>Vrizas Izza Izzuddin</h1>
      <h2>Web Developer</h2>
      <p>Halo, saya adalah seorang Website Developer berdomisili di Malang. Saya telah menyelesaikan beberapa project web development dengan pengalaman dalam pengerjaan Web Design, Front-end Web Development, dan Back-end Web Development.</p>
    </article>
    <div class="action">
      <div class="socials">
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
      </div>
      <router-link to="/contact" class="contact">HUBUNGI SAYA <ion-icon name="arrow-forward-circle"></ion-icon></router-link>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/variables';

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    .photo {
      width: 100%;
      text-align: center;
      position: relative;

      img {
        position: relative;
        z-index: 1;
        width: 220px;
        border-radius: 50%;
        box-shadow: inset 5px 5px 6px rgba(0, 0, 0, 0.25);
        filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25)) drop-shadow(-4px -4px 6px rgba(255, 255, 255, 0.25));
      }

      .back-text {
        position: absolute;
        top: 50%;
        left: -55px;
        transform: translateY(-50%) rotate(-90deg);
        font-weight: $fwBold;
        font-size: $fs-h1;
        color: $secondaryColor; 
      }
    }

    article {
      text-align: center;

      h1,h2 {
         text-transform: uppercase;
      }

      h1 {
        font-size: $fs-h5;
        font-weight: $fwBold;
        letter-spacing: 0.07em; 
      }

      h2 {
        font-size: $fs-base;
        font-weight: $fwSemiBold;
        letter-spacing: 0.05em;
        color: $primaryColor;
      }

      p {
        margin-top: 15px;
        font-weight: $fwRegular;
        font-size: $fs-xs;
        line-height: 18px;
      }
    }

    .action {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;

      .socials {
        display: flex;
        gap: 15px;

        a {
          background-color: $secondaryColor;
          border-radius: 50%;
          min-width: 35px;
          min-height: 35px;
          box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
          filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.25)) drop-shadow(-1px -1px 3px rgba(255, 255, 255, 0.25));

          ion-icon {
            font-size: $fs-base;
          }
        }
      }

      .contact {
        font-family: $ff-inter;
        font-weight: $fwSemiBold;
        font-size: $fs-sm;
        background-color: $primaryColor;
        color: $blackColor;
        padding: 10px 15px;
        border-radius: 5px;
        min-width: 30px;
        min-height: 30px;
        box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
        filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.25)) drop-shadow(-1px -1px 3px rgba(255, 255, 255, 0.25));
        
        ion-icon {
          font-size: $fs-h5;
          margin-left: 5px;
        }
      }
    }
  }
</style>
