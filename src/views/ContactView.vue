<template>
  <section class="contact">
    <h3>Hubungi Saya</h3>
    <p data-aos="fade-down">Silahkan hubungi saya dengan memberikan informasi yang jelas dan secara mendetail, agar saya dapat mendapatkan pemahaman yang baik pada project atau kebutuhan Anda.</p>
    <div class="contact-list" data-aos="fade-down" data-aos-delay="200">
        <div class="item"> 
            <h4><ion-icon name="mail"></ion-icon> Email</h4>
            <p>vrizasizza@gmail.com</p>
        </div>
    </div>
    <div class="socials" data-aos="fade-down" data-aos-delay="400">
        <a href="https://github.com/vrizas" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
        <a href="https://www.linkedin.com/in/vrizasizza/" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
    </div>
    <form ref="form" @submit.prevent="sendEmail">
        <div data-aos="zoom-in-up" data-aos-offset="-10">
            <label for="from_name">Nama Anda:</label>
            <input type="text" name="from_name" id="from_name" ref="from_name">
        </div>
        <div data-aos="zoom-in-up">
            <label for="from_email">Email Anda:</label>
            <input type="email" name="from_email" id="from_email" ref="from_email">
        </div>
        <div data-aos="zoom-in-up">
            <label for="subject">Subjek Anda:</label>
            <input type="text" name="subject" id="subject" ref="subject">
        </div>
        <div data-aos="zoom-in-up">
            <label for="message">Pesan Anda:</label>
            <textarea name="message" id="message" ref="message" rows="5" cols="50"></textarea>
        </div>
        <div class="action">
            <button class="send-btn" data-aos="fade-up-right">Kirim <ion-icon name="send"></ion-icon></button>
            <span class="flash-message" ref="flashMessage" v-show="flashMessage">{{ flashMessageText }}</span>
        </div>
    </form>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';
import { gsap } from "gsap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'ContactView',
  data() {
    return {
      flashMessage: false,
      flashMessageText: '',
    }
  },
  mounted() {
    AOS.init()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_1qcv1f9', 'template_h9r7oxp', this.$refs.form, '17U8-VxV5XX-GAP37')
        .then((result) => {
            this.flashMessage = true
            this.flashMessageText = 'Pesan terkirim'

            gsap.from(this.$refs.flashMessage, {duration: 0.5, x: 200, opacity: 0, ease: 'back.inOut(3)'})
            
            setTimeout(() => {
                gsap.to(this.$refs.flashMessage, {duration: 0.5, x: 200, opacity: 0, ease: 'back.inOut(3)'})
                setTimeout(() => {
                    this.flashMessage = false
                    this.flashMessage = false
                }, 500)
            }, 5000)

            this.$refs.from_name.value = ''
            this.$refs.from_email.value = ''
            this.$refs.subject.value = ''
            this.$refs.message.value = ''
        }, (error) => {
            this.flashMessage = true
            this.flashMessageText = `Gagal. ${error.text}`

            gsap.from(this.$refs.flashMessage, {duration: 0.5, x: 200, opacity: 0, ease: 'back.inOut(3)'})
            
            setTimeout(() => {
                gsap.to(this.$refs.flashMessage, {duration: 0.5, x: 200, opacity: 0, ease: 'back.inOut(3)'})
                setTimeout(() => {
                    this.flashMessage = false
                    this.flashMessage = false
                }, 500)
            }, 5000)

            this.$refs.from_name.value = ''
            this.$refs.from_email.value = ''
            this.$refs.subject.value = ''
            this.$refs.message.value = ''
        });
    }
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

            textarea {
                resize: vertical;
            }

            .action {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 20px;
                margin-top: 15px;
            }

            .flash-message {
                width: fit-content;
                background-color: $successColor;
                font-size: $fs-xs;
                padding: 10px 15px;
                border-radius: 5px;
            }

            .send-btn {
                display: flex;
                align-items: center;
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
                
                label, input, textarea{
                    font-size: $fs-sm;
                }

                .flash-message {
                    padding: 11.5px 15px;
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
