<template>
  <section class="contact">
    <h3>Hubungi Saya</h3>
    <p>Silahkan hubungi saya dengan memberikan informasi yang jelas dan secara mendetail, agar saya dapat mendapatkan pemahaman yang baik pada project Anda.</p>
    <div class="contact-list">
        <div class="item">
            <h4><ion-icon name="mail"></ion-icon> Email</h4>
            <p>vrizasizza@gmail.com</p>
        </div>
    </div>
    <div class="socials">
        <a href="#"><ion-icon name="logo-github"></ion-icon></a>
        <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
    </div>
    <form>
        <label for="name">Nama Anda:</label>
        <input type="text" id="name">
        <label for="email">Email Anda:</label>
        <input type="text" id="email">
        <label for="subject">Subjek Anda:</label>
        <input type="text" id="subject">
        <label for="message">Pesan Anda:</label>
        <textarea id="message" cols="30" rows="10"></textarea>
        <button class="send-btn">Kirim <ion-icon name="send"></ion-icon></button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
  components: {
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

            label {
                font-family: $ff-inter;
                font-size: $fs-xs;
            }
            
            input, textarea {
                color: $whiteColor;
                font-family: $ff-inter;
                border: none;
                background-color: transparent;
                border-bottom: 1px solid $primaryColor;
                padding: 10px 15px;
                margin-top: 3px;
                margin-bottom: 10px;
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
                box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
                filter: drop-shadow(.5px .5px 3px rgba(0, 0, 0, 0.25)) drop-shadow(-.5px -.5px 3px rgba(255, 255, 255, 0.25));
                
                ion-icon {
                    font-size: $fs-h5;
                    margin-left: 7px;
                }
            }
        }
    }
</style>
