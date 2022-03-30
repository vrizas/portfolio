<template>
  <section class="home">
    <div class="photo">
      <div class="img-layer-1"></div>
      <div class="img-layer-2"></div>
      <img src="../assets/img/vrizas.png" alt="Vrizas Photo">
      <span class="back-text">VRIZAS</span>
    </div>
    <article>
      <h1>Vrizas Izza<span> Izzuddin</span></h1>
      <h2>Web Developer</h2>
      <p>Halo, saya adalah seorang Website Developer berdomisili di Malang. Saya telah menyelesaikan beberapa project web development dengan pengalaman dalam pengerjaan Web Design, Front-end Web Development, dan Back-end Web Development.</p>
      <div class="action">
        <div class="socials">
          <a href="#"><ion-icon name="logo-github"></ion-icon></a>
          <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
        <router-link to="/contact" class="contact-btn">HUBUNGI SAYA <ion-icon name="arrow-forward-circle"></ion-icon></router-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  mounted() {
  
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
    padding: 10px 20px 60px 20px;

    .photo {
      width: 100%;
      text-align: center;
      position: relative;
      margin-top: 20px;

      img {
        position: relative;
        z-index: 1;
        width: 70%;
        border-radius: 50%;
        box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
        border: 5px solid #2B2A2A;
      }

      .back-text {
        position: absolute;
        top: 50%;
        left: -80px;
        transform: translateY(-50%) rotate(-90deg);
        font-weight: $fwBold;
        font-size: 54px;
        letter-spacing: 0.05em;
        color: $secondaryColor; 
      }
    }

    article {
      text-align: center;

      h1,h2 {
         text-transform: uppercase;
      }

      h1 {
        font-size: $fs-h4;
        font-weight: $fwBold;
        letter-spacing: 0.07em; 
      }

      h2 {
        font-size: $fs-h5;
        font-weight: $fwSemiBold;
        letter-spacing: 0.05em;
        color: $primaryColor;
      }

      p {
        margin-top: 15px;
        font-weight: $fwRegular;
        line-height: 18px;
      }
    }

    .action {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      margin-top: 25px;

      .socials {
        display: flex;
        gap: 15px;

        a {
          background-color: $secondaryColor;
          border-radius: 50%;
          min-width: 35px;
          min-height: 35px;
          box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
          filter: drop-shadow(.5px .5px 2px rgba(0, 0, 0, 0.25)) drop-shadow(-.5px -.5px 2px rgba(255, 255, 255, 0.25));

          ion-icon {
            font-size: $fs-base;
          }
        }
      }

      .contact-btn {
        font-family: $ff-inter;
        font-weight: $fwSemiBold;
        font-size: $fs-xs;
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

    @media screen and (max-width: 375px) {
      .back-text {
        display: none;
      }

      h1 span {
        display: none;
      }
    }
  }

  @media screen and (min-width: 640px) {
    .home {
      flex-direction: row-reverse;
      padding: 150px 50px 60px 50px;

      .photo {
        width: 350%;

        .img-layer-1 {
          width: 70%;
          height: 100%;
          background-color: $primaryColor;
          border-radius: 15px;
          position: absolute;
          top: 3%;
          right: 10%;
          z-index: 1;
        }
        .img-layer-2 {
          width: 70%;
          height: 100%;
          background-color: $secondaryColor;
          border-radius: 15px;
          position: absolute;
          top: 10%;
          right: 5%;
        }
        img {
          border-radius: 15px;
          border-width: 0;
        }

        .back-text {
          font-size: $fs-h1;
        }
      }

      article {
        text-align: left;

        h1 {
          font-size: $fs-h3;
        }

        h1 span {
          display: none;
        }

        h2 {
          font-size: $fs-h4;
        }

        p {
          font-size: $fs-sm;
        }

        .action {
          align-items: flex-start;
          margin-top: 50px;
          

          .socials a, button {
            min-width: 44px;
            min-height: 44px;
          }

          .socials ion-icon {
            font-size: $fs-h4;
          }

          .contact-btn {
            font-size: $fs-sm;
          }

        }
      }

    }
  }

  @media screen and (min-width: 1000px) {
    .home {
      padding: 50px 100px;
      min-height: calc(100vh - (60px * 2));

      .photo {
        width: 100%; 

        .back-text {
          font-size: $fs-h2;
          top: 20%;
          left: -35px;
          transform: translateY(0) rotate(-90deg);
        }
      }

      article {
        text-align: left;

        h1 {
          font-size: $fs-h1;
        }

        h1 span {
          display: inline;
        }

        h2 {
          font-size: $fs-h2;
        }

        p {
          font-size: $fs-sm;
        }

        .action {
          align-items: flex-start;
          margin-top: 50px;
          

          .socials a, button {
            min-width: 44px;
            min-height: 44px;
          }

          .socials ion-icon {
            font-size: $fs-h4;
          }

          .contact-btn {
            font-size: $fs-sm;
          }

        }
      }

    }
  }
</style>
