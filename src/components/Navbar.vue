<template>
    <nav>
        <router-link to="/" :class="{active:$route.name==='home'}">
            <ion-icon name="home"></ion-icon>
            <span class="text">Home</span>
        </router-link>
        <router-link to="/about" :class="{active:$route.name==='about'}">
            <ion-icon name="card"></ion-icon>
            <span class="text">About</span>
        </router-link>
        <router-link to="/portfolio" :class="{active:$route.name==='portfolio'||$route.name==='webDevPortfolio'||$route.name==='wordpressDevPortfolio'}">
            <ion-icon name="briefcase"></ion-icon>
            <span class="text">Portfolio</span>
        </router-link>
        <router-link to="/contact" :class="{active:$route.name==='contact'}">
            <ion-icon name="mail"></ion-icon>
            <span class="text">Contact</span>
        </router-link>
        <div class="indicator"></div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    nav {
        display: flex;
        position: fixed;
        z-index: 9999;
        bottom: 0;
        left: 0;
        width: 100vw;
        transform: translateY(0);
        background-color: $secondaryColor;
        
        a { 
            width: calc(100% / 4);
            height: 60px;

            ion-icon {
                font-size: 24px;
            }

            .text {
                display: none;
            }

            &.active {
                color: $primaryColor;
            }
        }

        .indicator {
            width: calc(100% / 4);
            height: 4px;
            background-color: $primaryColor; 
            position: absolute;
            bottom: 0;
            left: 0;
            transition: .5s;
        }
        
        a:nth-child(1).active ~ .indicator {
            transform: translateX(calc(100% / 4 * 0));
        }

        a:nth-child(2).active ~ .indicator {
            transform: translateX(calc(100% / 4 * 4));
        }

        a:nth-child(3).active ~ .indicator {
            transform: translateX(calc(100% / 4 * 8));
        }

        a:nth-child(4).active ~ .indicator {
            transform: translateX(calc(100% / 4 * 12));
        }
    }

    @media screen and (min-width: 1000px) {
        nav {
            width: inherit;
            height: 370px;
            padding: 25px 0;
            flex-direction: column;
            bottom: 50%;
            transform: translateY(50%);
            border-radius: 0 10px 10px 0;
            
            a { 
                width: 60px;
                height: 80px;
                position: relative;

                ion-icon {
                    position: relative;
                    transition: .5s;
                }

                &.active ion-icon {
                    position: relative;
                    z-index: 1;
                    transform: translateX(31px);
                    color: $blackColor;
                }

                .text {
                    display: inherit;
                    font-size: $fs-xxs;
                    position: absolute;
                    transition: .5s;
                    opacity: 0;
                }

                &.active .text {
                    opacity: 1;
                    transform: translateY(40px);
                }
            }

            .indicator  {
                width: 60px;
                height: 60px;
                background-color: $primaryColor;
                top: 35px;
                bottom: initial;
                left: 50%;
                border-radius: 50%;
                border: 6px solid $blackColor;
                transition: .5s;
            }

            .indicator::before {
                content: '';
                position: absolute;
                top: -18px;
                right: 50%;
                width: 15px;
                height: 15px;
                background-color: transparent;
                border-bottom-right-radius: 15px;
                box-shadow: 5px 1.5px 0 0 $blackColor;
            }
            .indicator::after {
                content: '';
                position: absolute;
                bottom: -18px;
                right: 50%;
                width: 15px;
                height: 15px;
                background-color: transparent;
                border-top-right-radius: 15px;
                box-shadow: 5px -1.5px 0 $blackColor;
            }

            a:nth-child(1).active ~ .indicator {
                transform: translateY(calc(80px * 0));
            }

            a:nth-child(2).active ~ .indicator {
                transform: translateY(calc(80px * 1));
            }

            a:nth-child(3).active ~ .indicator {
                transform: translateY(calc(80px * 2));
            }

            a:nth-child(4).active ~ .indicator {
                transform: translateY(calc(80px * 3));
            }
        }

    }

    @media screen and (min-width: 1920px) {
        nav {
            height: 450px;
            padding: 25px 0;
            flex-direction: column;
            bottom: 50%;
            transform: translateY(50%);
            border-radius: 0 10px 10px 0;
            
            a { 
                width: 80px;
                height: 100px;
                position: relative;

                ion-icon {
                    position: relative;
                    transition: .5s;
                    font-size: 30px;
                }

                &.active ion-icon {
                    position: relative;
                    z-index: 1;
                    transform: translateX(41px);
                    color: $blackColor;
                }

                .text {
                    display: inherit;
                    font-size: $fs-xs;
                    position: absolute;
                    transition: .5s;
                    opacity: 0;
                }

                &.active .text {
                    opacity: 1;
                    transform: translateY(50px);
                }
            }

            .indicator  {
                width: 80px;
                height: 80px;
                background-color: $primaryColor;
                top: 35px;
                bottom: initial;
                left: 50%;
                border-radius: 50%;
                border: 6px solid $blackColor;
                transition: .5s;
            }

            .indicator::before {
                content: '';
                position: absolute;
                top: -18px;
                right: 50%;
                width: 15px;
                height: 15px;
                background-color: transparent;
                border-bottom-right-radius: 15px;
                box-shadow: 5px 1.5px 0 0 $blackColor;
            }
            .indicator::after {
                content: '';
                position: absolute;
                bottom: -18px;
                right: 50%;
                width: 15px;
                height: 15px;
                background-color: transparent;
                border-top-right-radius: 15px;
                box-shadow: 5px -1.5px 0 $blackColor;
            }

            a:nth-child(1).active ~ .indicator {
                transform: translateY(calc(100px * 0));
            }

            a:nth-child(2).active ~ .indicator {
                transform: translateY(calc(100px * 1));
            }

            a:nth-child(3).active ~ .indicator {
                transform: translateY(calc(100px * 2));
            }

            a:nth-child(4).active ~ .indicator {
                transform: translateY(calc(100px * 3));
            }
        }

    }
</style>