<template>
  <section class="biography">
      <div class="top-content">
        <div class="photo">
            <img draggable="false" class="skeleton lazyload" src="../assets/img/vrizas.jpg" alt="Vrizas Izza Izzuddin" ref="photo">
            <h1><span class="firstname">Vrizas</span> Izza<span class="lastname"> Izzuddin</span></h1>
            <p>(2001 - Sekarang)</p>
        </div>
        <div class="action">
            <div class="socials">
                <a href="https://github.com/vrizas" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
                <a href="https://www.linkedin.com/in/vrizasizza/" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
            </div>
        </div>
      </div>
      <article>
          <h3>Cerita Singkat</h3>
          <p>Vrizas Izza Izzuddin atau yang biasa dipanggil Vrizas dilahirkan di Malang, Jawa Timur pada tanggal 9 Maret 2001. Dia adalah anak kedua dari 3 (tiga) bersaudara. Semasa kecil dia suka sekali bermain sepeda sampai terjatuh ke selokan dan membuat dia terluka dan menangis karena ulahnya sendiri.</p>
      </article>
      <article>
          <h3>Pendidikan</h3>
          <p>Pendidikan yang ditempuh olehnya diawali dengan pendidikan Sekolah Dasar di SDN Dinoyo 2 Malang pada tahun 2007 dan selesai pada tahun 2013, melanjutkan ke Sekolah Menengah Pertama di SMPN 13 Malang, selesai pada tahun 2016. Kemudian Penulis melanjutkan Pendidikan ke Sekolah Menengah Atas di SMA Laboratorium UM, Malang dan selesai pada tahun 2019. Setelah lulus SMA, dia melanjutkan pendidikan Strata-1 (S1) di Univertas Brawijaya pada Jurusan Teknik Informatika.</p>
      </article>
      <article>
          <h3>Pengalaman</h3>
          <p>Vrizas bercita-cita menjadi Front-End Web Developer, sehingga ketertarikannya belajar teknologi sangatlah besar. Dia merupakan lulusan dari program ID Camp 2021 yang diselenggarakan oleh Indosat Ooredoo Hutchison. Pada program tersebut dia mengambil jalur belajar Front-End Web Developer. Selain itu pada saat berkuliah di semester 6, dia mengikuti program Kampus Merdeka yaitu SIB Dicoding Batch Kedua dengan jalur belajar Pengembang Front-End Web dan Back-End.</p>
      </article>
  </section>
</template>

<script>
import { gsap } from "gsap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'BiographyView',
  data() {
    return {
      
    }
  },
  mounted() {
    AOS.init()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    const routeName = this.$route.name
    if(routeName === 'biography') {
        document.querySelector('.indicator').style.display = 'none'
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .biography {
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 10px 20px 60px 20px;
    overflow: hidden;

    h1 {
        font-size: $fs-h4;
        font-weight: $fwBold;
        letter-spacing: 0.07em; 
        text-transform: uppercase;
        margin-top: 20px;

        .firstname {
            color: $primaryColor;
        }
    }

    h3 {
      width: fit-content;
      font-size: $fs-sm;
      margin: 0 auto;
      margin-bottom: 25px;
      border-bottom: 1px solid $primaryColor;
    }

    p {
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
    }

    .top-content {
        .photo {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            img {
                position: relative;
                z-index: 1;
                width: 50vw;
                height: 50vw;
                border-radius: 50%;
                box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
                border: 5px solid #2B2A2A;
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
        }
    }

    @media screen and (max-width: 375px) {
      h1 span.lastname {
        display: none;
      }
    }
  }

  @media screen and (min-width: 640px) {
    .biography {
      padding: 10px 50px 60px 50px;
      h3 {
        font-size: $fs-base;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .biography {
      padding: 50px 100px;
      gap: 120px;

      h1 {
        font-size: $fs-h3;
      }

      h3 {
        border-width: 0;
        position: relative;
        font-size: $fs-h5;
        margin-bottom: 60px;

        &::after {
          content: '';
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          z-index: -1;
          width: 70px;
          height: 70px;
          background-color: $secondaryColor;
          border-radius: 50%;
        }
      }

      p {
          padding: 0 150px;
      }

      .top-content {
          .photo {
              img {
                width: 20vw;
                height: 20vw;
              }
          }
      }
    }
  }

  @media screen and (min-width: 1920px) {
    .biography  {
      padding: 50px 150px;
      
      h3 {
        font-size: 1.3vw;

        &::after {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
</style>
