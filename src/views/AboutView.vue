<template>
  <section class="about">
    <div class="top-content">
      <section class="personal-info">
        <h3>Tentang Saya</h3>
        <div class="item-container" ref="personalInfo">
          <div class="item name">
            <h4>Nama:</h4>
            <p>Vrizas Izza Izzuddin</p>
          </div>
          <div class="item email">
            <h4>Email:</h4>
            <p>vrizasizza@gmail.com</p>
          </div>
          <div class="item city">
            <h4>Domisili:</h4>
            <p>Malang, Indonesia</p>
          </div>
          <div class="item birthday">
            <h4>Tanggal Lahir:</h4>
            <p>9 Maret 2001</p>
          </div>
        </div>
      </section>
      <section class="my-services">
        <h3>Jasa Saya</h3>
        <div class="item-container" ref="myServices">
          <button class="item" @click="this.$router.push('/portfolio#webdev')">
            <i class="fa-solid fa-laptop-code"></i>
            <h4>Web Development</h4>
            <p>{{portfolio.webDev.length}} Project</p>
            <ion-icon name="arrow-forward-circle"></ion-icon>
          </button>
          <button class="item" @click="this.$router.push('/portfolio#webmaintenance')">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            <h4>Web Maintenance</h4>
            <p>{{portfolio.webMaintenance.length}} Project</p>
            <ion-icon name="arrow-forward-circle"></ion-icon>
          </button>
        </div>
      </section>
    </div>
    <section class="skills">
      <h3>Keahlian</h3>
      <div class="item-container">
        <div class="item" :class="skill.name" v-for="(skill, index) in skills" :key="index" data-aos="zoom-in-down">
          <div class="bar"><span :style="{width:skill.percentage}"></span></div>
          <div class="text">
            <h4>{{ skill.name }}</h4>
            <p>{{ skill.percentage }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="education-experience">
      <h3>Pendidikan & Pengalaman</h3>
      <div class="wrapper">
        <section class="education" data-aos="fade-up-right">
          <article class="item">
            <p>2019 - Sekarang</p>
            <h4>Universitas Brawijaya</h4>
            <p>S1 Teknik Informatika</p>
          </article>
          <article class="item">
            <p>2016 - 2019</p>
            <h4>SMA Laboratorium UM Malang</h4>
          </article>
        </section>
        <section class="experience">
          <div class="item-container">
            <div class="item" data-aos="fade-up-left" data-aos-delay="200">
              <article class="left-content">
                <h4>Peserta Jalur Belajar Front-End dan Back-End Web Developer</h4>
                <p>Feb 2022 - Sekarang</p>
                <span>Siswa</span>
              </article>
              <div class="divider"></div>
              <article class="right-content">
                <h5>Dicoding Indonesia</h5>
                <p>Saya menjadi peserta jalur belajar Front-End dan Back-End Web Developer di SIB Dicoding Indonesia Batch 2</p>
              </article>
            </div>
            <div class="item" data-aos="fade-up-left">
              <article class="left-content">
                <h4>Peserta Jalur Belajar Front-End Web Developer</h4>
                <p>Mei 2021 - Jan 2022</p>
                <span>Siswa</span>
              </article>
              <div class="divider"></div>
              <article class="right-content">
                <h5>ID Camp</h5>
                <p>Saya menjadi penerima beasiswa jalur belajar Front-End Web Developer di ID Camp 2021</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </section>
    <!-- <a href="" class="download-cv-btn" data-aos="fade-up-right" data-aos-offset="-10">Unduh CV <ion-icon name="download"></ion-icon></a> -->
  </section>
</template>

<script>
import { gsap } from "gsap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'AboutView',
  inject: ['portfolio'],
  data() {
    return {
      skills: [
        { name: 'HTML', percentage: '90%' },
        { name: 'CSS', percentage: '85%' },
        { name: 'Javascript', percentage: '80%' },
        { name: 'PHP', percentage: '75%' },
        { name: 'Bootstrap', percentage: '80%' },
        { name: 'Tailwind', percentage: '85%' },
        { name: 'VueJS', percentage: '70%' },
        { name: 'Laravel', percentage: '80%' },
        { name: 'Git/Github', percentage: '90%' }
      ]
    }
  },
  mounted() {
    AOS.init()
    window.scrollTo({ top: 0, behavior: 'smooth' })

    gsap.from(this.$refs.personalInfo, {duration: 0.5, x: -200, opacity: 0, ease: 'power2'})
    gsap.from(this.$refs.myServices, {duration: 0.5, x: 200, opacity: 0, ease: 'power2'})

    document.querySelector('.indicator').style.display = 'block'
  }
}
</script>


<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .about {
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 10px 20px 60px 20px;
    overflow: hidden;

    h3 {
      width: fit-content;
      font-size: $fs-sm;
      margin: 0 auto;
      margin-bottom: 25px;
      border-bottom: 1px solid $primaryColor;
    }

    .personal-info {
      margin-bottom: 60px;

      .item-container {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        
        .item {
          width: calc(50% - 5px);

          h4 {
            font-size: $fs-xs;
            font-weight: $fwRegular;
          }

          p {
            font-weight: $fwMedium;
            margin-top: 5px; 
          }
        }
      }
    }

    .my-services {
      .item-container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .item {
          position: relative;
          text-align: center;
          width: 100%;
          padding: 15px 0;
          border-bottom: 1px solid rgba(247, 247, 247, .5);
          font-family: $ff-poppins;
          
          i {
            font-size: $fs-h1;
            color: rgba(247, 247, 247, .5);
          }

          h4 {
            font-weight: $fwMedium;
            font-size: $fs-xs;
            margin: 7px 0 3px 0;
          }

          p {
            font-size: $fs-xxs;
          }

          ion-icon {
            font-size: $fs-h4;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
        }
      }
    }

    .skills {
      .item-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        
        .item {
          width: 100%;

          .bar {
            width: 100%;
            height: 7px;
            border-radius: 500px;
            background-color: $secondaryColor;

            span {
              display: block;
              height: 100%;
              border-radius: 500px;
              background-color: $primaryColor;
            }

          }

          .text {
            display: flex;
            justify-content: space-between;
            margin-top: 7px;

            h4 {
              font-weight: $fwRegular;
              font-size: $fs-xs;
            }
          }
        }
      }
    }

    .education-experience {

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        h4, h5 {
          font-weight: $fwSemiBold;
        }
        
        .education {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background-color: $secondaryColor;
          border-radius: 5px;
          padding: 20px 15px;
  
          p {
            font-family: $ff-poppins;
            font-weight: $fwLight;
          }
  
          p, h4 {
            font-size: $fs-xs;
          }
        }
  
        .experience {
          .item-container {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .item {
              display: grid;
              grid-template-columns: auto auto auto;
              gap: 15px;
              background-color: $secondaryColor;
              border-radius: 5px;
              padding: 20px 15px;

              h4, h5 {
                font-size: $fs-xs;
                margin-bottom: 5px;
              }

              p {
                font-size: $fs-xs;
                line-height: 1.2rem;
              }

              span {
                display: block;
                width: fit-content; 
                background-color: $primaryColor;
                color: $blackColor;
                font-family: $ff-inter;
                font-size: $fs-xs;
                font-weight: $fwSemiBold;
                padding: 4px 10px;
                border-radius: 3px;
                margin-top: 25px;
              }

              .left-content p {
                font-family: $ff-poppins;
              }

              .divider {
                width: 2px;
                background-color: rgba(25, 25, 25, 0.5);
              }
            }
          }
        }
      }
    }

    .download-cv-btn {
      font-family: $ff-inter;
      font-weight: $fwSemiBold;
      font-size: $fs-xs;
      background-color: $primaryColor;
      color: $blackColor;
      padding: 10px 15px;
      border-radius: 5px;
      width: fit-content;
      min-width: 30px;
      min-height: 30px;
      // box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
      // filter: drop-shadow(.5px .5px 3px rgba(0, 0, 0, 0.25)) drop-shadow(-.5px -.5px 3px rgba(255, 255, 255, 0.25));
      
      ion-icon {
        font-size: $fs-h5;
        margin-left: 5px;
      }
    }
  }

  @media screen and (min-width: 640px) {
    .about {
      padding: 10px 50px 60px 50px;
      h3 {
        font-size: $fs-base;
      }

      .top-content {
        .personal-info {
          .item-container {  
            .item {
              h4 {
                font-size: $fs-sm;
              }

              p {
                font-size: $fs-sm;
              }
            }
          }
        }

        .my-services {
          width: 100%;

          .item-container {
            flex-direction: row;
            gap: 24px;

            .item {
              width: calc(50% - 12px);

              h4 {
                font-size: $fs-sm;
              }

              p {
                font-size: $fs-xs;
              }
            }
          }
        }

      }

      .education-experience {
        .wrapper {
          .education {
            p, h4 {
              font-size: $fs-sm;
            }
          }

          .experience {
            .item-container {
              .item {
                h4, h5, p, span {
                  font-size: $fs-sm;
                }
              }
            }
          }
        }
      }

      .download-cv-btn {
        font-size: $fs-sm;

        ion-icon {
          font-size: $fs-h4;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .about {
      padding: 50px 100px;
      gap: 120px;

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

      .top-content {
        display: flex;
        gap: 10px;

        .personal-info {
          width: 100%;
          margin-bottom: 0;

          h3 {
            margin-bottom: 75px;
          }

          .item-container {
            gap: 24px;
          
            .item {
              width: calc(50% - 12px);
              // padding: 0 60px;

              h4 {
                font-size: $fs-sm;
              }

              p {
                font-size: $fs-sm;
              }
            }
          }
        }

        .my-services {
          width: 100%;

          .item-container {
            flex-direction: row;
            gap: 24px;

            .item {
              width: calc(50% - 12px);

              h4 {
                font-size: $fs-sm;
              }

              p {
                font-size: $fs-xs;
              }
            }
          }
        }

      }
      
      .skills {
        .item-container {
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
      }

      .education-experience {

        .wrapper {
          flex-direction: row;
          gap: 40px;
          
          .education, .experience {
            width: calc(100% - 20px);
          }

          .education {
            border-radius: 10px;
            padding: 25px 30px;
            height: fit-content;

            p, h4 {
              font-size: $fs-sm;
            }
          }

          .experience {
            
            .item-container {
              
              .item {
                border-radius: 10px;
                padding: 25px 30px;
                h4, h5 {
                  font-size: $fs-sm;
                }

                h5 {
                  margin-bottom: 5px;
                }
                
                p, span {
                  font-size: $fs-xs;
                }
              }
            }
          }
        }
      }

      .download-cv-btn {
        font-size: $fs-sm;

        ion-icon {
          font-size: $fs-h4;
        }
      }

    }
  }

  @media screen and (min-width: 1920px) {
    .about  {
      padding: 50px 150px;
      
      h3 {
        font-size: 1.3vw;

        &::after {
          width: 100px;
          height: 100px;
        }
      }

      .top-content {
        .personal-info {
          .item-container {
            .item {
              h4 {
                font-size: 1vw;
              }

              p {
                font-size: 1vw;
              }
            }
          }
        }

        .my-services {
          .item-container {
            .item {
              h4 {
                font-size: 1vw;
              }

              p {
                font-size: 0.8vw;
              }

              i {
                font-size: 3vw;
              }
            }
          }
        }

      }
      
      .skills {
        .item-container {
          grid-template-columns: repeat(3, 1fr);

          .item {
            .bar {
              height: .5vw;
            }

            .text {
              h4, p {
                font-size: 1vw;
              }
            }
          }
        }
      }

      .education-experience {
        .wrapper { 
          .education {
            p, h4 {
              font-size: 1vw;
            }
          }

          .experience {
            .item-container {  
              .item {
                h4, h5 {
                  font-size: 1vw;
                }
                
                p, span {
                  font-size: .8vw;
                  line-height: 1.1vw;
                }
              }
            }
          }
        }
      }

      .download-cv-btn {
        font-size: 1vw;

        ion-icon {
          font-size: 2vw;
        }
      }
    }
  }
</style>
