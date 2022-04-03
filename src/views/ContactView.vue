<template>
  <section class="contact">
    <h3>Hubungi Saya</h3>
    <p data-aos="fade-down">Silahkan hubungi saya dengan memberikan informasi yang jelas dan secara mendetail, agar saya dapat mendapatkan pemahaman yang baik pada project Anda.</p>
    <div class="contact-list" data-aos="fade-down" data-aos-delay="200">
        <div class="item"> 
            <h4><ion-icon name="mail"></ion-icon> Email</h4>
            <p>vrizasizza@gmail.com</p>
        </div>
    </div>
    <div class="socials" data-aos="fade-down" data-aos-delay="400">
        <a href="#"><ion-icon name="logo-github"></ion-icon></a>
        <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
    </div>
    <form>
        <div data-aos="zoom-in-up">
            <label for="name">Nama Anda:</label>
            <input type="text" id="name">
        </div>
        <div data-aos="zoom-in-up">
            <label for="email">Email Anda:</label>
            <input type="email" id="email">
        </div>
        <div data-aos="zoom-in-up">
            <label for="subject">Subjek Anda:</label>
            <input type="text" id="subject">
        </div>
        <div data-aos="zoom-in-up">
            <label for="message">Pesan Anda:</label>
            <textarea id="message"></textarea>
        </div>
        <button class="send-btn" data-aos="fade-up-right">Kirim <ion-icon name="send"></ion-icon></button>
    </form>
  </section>
</template>

<script>
import { gsap } from "gsap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'ContactView',
  mounted() {
    AOS.init()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    gsap.to('nav', {duration: 0.5, x: 0, ease: 'power2'})
  }
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    .contact {
        padding: 10px 20px 60px 20px;

        h3 {
            width: fit-content;
            font-size: $fs-sm;
            margin: 0 auto;
            margin-bottom: 25px;
            border-bottom: 1px solid $primaryColor;
        }

        p {
            font-family: $ff-poppins;
            font-size: $fs-xs;
            font-weight: $fwLight;
            text-align: center;
        }

        .contact-list {
            margin-top: 20px;

            h4 {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 7px;
                font-size: $fs-sm;
                font-weight: $fwSemiBold;
                margin-bottom: 5px;

                ion-icon {
                    color: $primaryColor;
                    font-size: $fs-h5; 
                }
            }
        }

        .socials {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;

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

        form {
            display: flex;
            flex-direction: column;
            margin-top: 70px;

            div {
                display: flex;
                flex-direction: column;
            }

            label {
                font-family: $ff-inter;
                font-size: $fs-xs;
            }
            
            input, textarea {
                color: $whiteColor;
                font-family: $ff-inter;
                font-size: $fs-xs;
                border: none;
                background-color: transparent;
                border-bottom: 1px solid $primaryColor;
                padding: 10px 15px;
                margin-top: 3px;
                margin-bottom: 15px;
            }

            .send-btn {
                display: flex;
                align-items: center;
                margin-top: 15px;
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
                    margin-left: 7px;
                }
            }
        }
    }

    @media screen and (min-width: 640px) {
        .contact {
            padding: 10px 50px 60px 50px;

            h3 {
                font-size: $fs-base;
            }

            p {
                font-size: $fs-sm;
            }

            .contact-list {
                margin-top: 20px;

                h4 {
                    gap: 7px;
                    font-size: $fs-base;

                    ion-icon {
                        font-size: $fs-h4; 
                    }
                }
            }

            .socials {
                gap: 15px;
                margin-top: 30px;

                a {
                    min-width: 44px;
                    min-height: 44px;
                   
                    ion-icon {
                        font-size: $fs-h4;
                    }
                }
            }

            form {
                margin-top: 70px;

                label {
                    font-size: $fs-sm;
                }
                
                input, textarea {
                    font-size: $fs-sm;
                }

                .send-btn {
                    font-size: $fs-sm;
                    min-width: 44px;
                    min-height: 44px;
                    
                    ion-icon {
                        font-size: $fs-h5;
                    }
                }
            }
        }
        
    }

    @media screen and (min-width: 1000px) {
        .contact {
            padding: 50px 100px;

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
                padding: 0 20%;
            }

            .contact-list {
                margin-top: 40px;
            }

            .socials {
                gap: 15px;
            }

            form {
                width: 50%;
                margin: 0 auto;
                margin-top: 100px;
            }
        }
        
    }
</style>
