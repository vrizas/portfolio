<template>
  <section class="home">
    <div class="photo">
      <div class="img-layer-1" ref="imgLayer1"></div>
      <div class="img-layer-2" ref="imgLayer2"></div>
      <div class="img-container">
        <img draggable="false" class="skeleton lazyload" src="../assets/img/vrizas.jpg" alt="Vrizas Izza Izzuddin" ref="photo">
        <span class="back-text">VRIZAS</span>
      </div>
    </div>
    <article ref="homeArticle">
      <h1>Vrizas Izza<span> Izzuddin</span></h1>
      <h2>Web Developer</h2>
      <p>Halo, saya adalah seorang Website Developer berdomisili di Malang. Saya telah menyelesaikan beberapa project web development dengan pengalaman dalam pengerjaan Web Design, Front-end Web Development, dan Back-end Web Development.</p>
      <div class="action">
        <div class="socials">
          <a href="https://github.com/vrizas" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/vrizasizza/" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
        <router-link to="/contact" class="contact-btn">HUBUNGI SAYA <ion-icon name="arrow-forward-circle"></ion-icon></router-link>
      </div>
    </article>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: 'HomeView',
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    gsap.from(this.$refs.homeArticle, {duration: 0.5, x: -200, opacity: 0, ease: 'power2'})
    gsap.from(this.$refs.imgLayer2, {duration: 0.5, x: 200, opacity: 0, ease: 'power2'})
    gsap.from(this.$refs.imgLayer1, {duration: 0.5, x: 200, opacity: 0, ease: 'power2'})
    gsap.from(this.$refs.photo, {duration: 0.5, x: 200, ease: 'power2'})

    document.querySelector('.indicator').style.display = 'block'
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .home {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    gap: 25px;
    padding: 10px 20px 60px 20px;
    overflow: hidden;

    .photo {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      margin-top: 20px;

      img {
        position: relative;
        z-index: 1;
        width: 60vw;
        height: 60vw;
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
        // box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
        // filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.25)) drop-shadow(-1px -1px 3px rgba(255, 255, 255, 0.25));
        
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
      grid-template-columns: repeat(2, 1fr);
      padding: 150px 50px 60px 50px;

      .photo {
        justify-content: flex-end;
        grid-column-start: 2;
        grid-row-start: 1;
    
        .img-layer-1 {
          width: 70%;
          height: 100%;
          background-color: $primaryColor;
          border-radius: 15px;
          position: absolute;
          top: 4%;
          right: -3.5%;
          z-index: 1;
        }

        .img-layer-2 {
          width: 70%;
          height: 100%;
          background-color: $secondaryColor;
          border-radius: 15px;
          position: absolute;
          top: 10%;
          right: -7%;
        }

        .img-container {
          width: fit-content;
          position: relative;
        }

        img {
          width: 30vw;
          height: 30vw;
          border-radius: 15px;
          border-width: 0;
        }

        .back-text {
          font-size: $fs-h1;
          left: -18vw;
          transform: translate(0, -50%) rotate(-90deg);
        }
      }

      article {
        grid-row-start: 1;
        grid-column-start: 1;
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

            ion-icon {
              font-size: $fs-h4;
            }
          }

        }
      }

    }
  }

  @media screen and (min-width: 1000px) {
    .home {
      min-height: calc(100vh - (60px * 2));
      padding: 50px 100px;
      
      .photo {
        .back-text {
          font-size: 3.5vw;
          top: 25%;
          left: -10vw;
          transform: translate(0, -50%) rotate(-90deg);
        }
      }

      article {
        width: 100%;
        text-align: left;

        h1 {
          font-size: $fs-h1;
        }

        h2 {
          font-size: $fs-h2;
        }

        p {
          font-size: $fs-sm;
          padding-right: 25%;
          line-height: 1.3rem;
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

            ion-icon {
              font-size: $fs-h4;
            }
          }

        }
      }

    }
  }

  @media screen and (min-width: 1338px) {
    .home article h1 span {
      display: inline;
    }
  }

  @media screen and (min-width: 1920px) {
    .home  {
      padding: 50px 150px;
      
      article {
        h1 {
          font-size: 2.5vw;
        }

        h2 {
          font-size: 2vw;
        }

        p {
          font-size: 1vw;
          line-height: 1.2vw;
        }
        
        .action {
          .socials {
            a {
              min-width: 2.5vw;
              min-height: 2.5vw;
            }
            ion-icon {
              font-size: 1.5vw;
            }
          }

          .contact-btn {
            padding: .6vw .8vw;
            font-size: 1vw;

            ion-icon {
              font-size: 1.5vw;
            }
          }

        }
      }
    }
  }
</style>
