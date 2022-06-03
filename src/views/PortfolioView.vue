<template>
  <section class="portfolio">
    <div class="wrapper">
        <h3>Portofolio</h3>
        <div class="tab">
            <button class="tablink" :class="{active:tablink.tabDestination===currentTablink}" @click="e => tabHandler(e, tablink.tabDestination)" ref="tablinksRef" v-for="(tablink, index) in tablinks" :key="index">{{ tablink.name }}</button>
            <div class="active-dot"></div>
        </div>
        <div class="tabcontents" ref="tabcontents">
            <TabContent class="webdev" v-show="showWebDevelopment" v-for="(project, index) in portfolio.webDev" :key="index" :project="project"/>
            <TabContent class="webmaintenance" v-show="showWebMaintenance" v-for="(project, index) in portfolio.webMaintenance" :key="index" :project="project"/>
        </div> 
    </div>
    <div class="hero skeleton lazyload" :style="{backgroundImage: `url(${heroImgSrc})`}" ref="hero">
        <article>
            <strong data-aos="fade-up">Tertarik untuk bekerja sama?</strong>
            <router-link to="/contact" class="contact-btn" data-aos="fade-up" data-aos-delay="200">HUBUNGI SAYA <ion-icon name="arrow-forward-circle"></ion-icon></router-link>
        </article>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TabContent from '@/components/TabContent.vue'

export default {
    name: 'PortfolioView',
    components: {
        TabContent
    },
    inject: ['portfolio'],
    data () {
        return {
            heroImgSrc: require('../assets/img/cool-laptop.jpg'),
            tablinks: [
                { name: 'Semua', tabDestination: '#' },
                { name: 'Web Development', tabDestination: '#webdev' },
                { name: 'Web Maintenance', tabDestination: '#webmaintenance' }
            ],
            currentTablink: '#'
        }
    },
    methods: {
        tabHandler(event, tabDestination) {
            this.currentTablink = tabDestination
            
            if (tabDestination === '#') {
                const tabcontents = document.querySelectorAll('.tabcontent')

                tabcontents.forEach((tabcontent, index) => {
                    gsap.from(tabcontent, {duration: 0.5, scale: 0, opacity: 0, delay: (0.1 * index),  ease: 'power2'})
                })
            } else if (tabDestination === '#webdev') {
                const tabcontents = document.querySelectorAll('.tabcontent.webdev')

                tabcontents.forEach((tabcontent, index) => {
                    gsap.from(tabcontent, {duration: 0.5, scale: 0, opacity: 0, delay: (0.1 * index),  ease: 'power2'})
                })
            } else if (tabDestination === '#webmaintenance') {
                const tabcontents = document.querySelectorAll('.tabcontent.webmaintenance')

                tabcontents.forEach((tabcontent, index) => {
                    gsap.from(tabcontent, {duration: 0.5, scale: 0, opacity: 0, delay: (0.1 * index),  ease: 'power2'})
                })
            }

            history.replaceState(undefined, undefined, tabDestination)
        }
    },
    computed: {
        showWebDevelopment() {
            return this.currentTablink === '#' || 
                this.currentTablink === '#webdev'
        },

        showWebMaintenance() {
            return this.currentTablink === '#' || 
                this.currentTablink === '#webmaintenance'
        },
    },
    mounted() {
        AOS.init()
        window.scrollTo({ top: 0, behavior: 'smooth' })

        this.currentTablink = this.$route.hash || '#'
        document.querySelector('.indicator').style.display = 'block'

        window.onscroll = () => {
            const routeName = this.$route.name
            const hero = this.$refs.hero

            function desktopResponsive(x) {
                if (x.matches) {
                    if(routeName === 'portfolio') {
                        let bounds = hero.getBoundingClientRect()

                        if (bounds.top < 432 && bounds.top < window.innerHeight) {
                            gsap.to('nav', {duration: 0.5, x: -100, ease: 'power2'})
                        } else {
                            gsap.to('nav', {duration: 0.5, x: 0, ease: 'power2'})
                        }      
                    } else {
                        gsap.to('nav', {duration: 0.5, x: 0, ease: 'power2'})
                    }
                } else {
                    gsap.to('nav', {duration: 0.5, x: 0, y: 0, ease: 'power2'})
                }
            }
            
            var x = window.matchMedia("(min-width: 1000px)")
            desktopResponsive(x)
            x.addListener(desktopResponsive)
        }

        const tabcontents = document.querySelectorAll('.tabcontent')

        tabcontents.forEach((tabcontent, index) => {
            gsap.from(tabcontent, {duration: 0.5, scale: 0, opacity: 0, delay: (0.1 * index),  ease: 'power2'})
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';

    .portfolio {
        padding-bottom: 60px;
        .wrapper {
            padding: 10px 20px;
        }

        h3 {
            width: fit-content;
            font-size: $fs-sm;
            margin: 0 auto;
            margin-bottom: 25px;
            border-bottom: 1px solid $primaryColor;
        }

        .tab {
            position: relative;
            overflow: auto;
            white-space: nowrap;
            scrollbar-width: none;
            -ms-overflow-style: none; 

            &::-webkit-scrollbar {
                width: 0;
                height: 0;
            }

            button {
                color: $greyColor;
                font-weight: $fwMedium;
                font-size: $fs-xs;
                margin-right: 20px;
                padding: 0 4px;
                cursor: pointer;
            }

            .active {
                color: $whiteColor;

                // &::first-letter {
                //     color: $blackColor;
                // }
            }

            .tablink:nth-child(1).active ~ .active-dot {
                transform: translate(0, -50%);
            }

            .tablink:nth-child(2).active ~ .active-dot {
                transform: translate(82px, -50%);
            }

            .active-dot {
                display: none;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: $primaryColor;
                position: absolute;
                top: 50%;
                z-index: -1;
            }
        }

        .tabcontents{
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }

        .hero {
            width: 100vw;
            height: 40vh;
            background-size: cover;
            margin-top: 40px;

            article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                gap: 15px;
                width: 100%;
                height: 100%;
                padding: 10px 40px;
                background: rgba(25, 25, 25, 0.65);

                strong {
                    font-size: $fs-h4;
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

            
        }
    }

    @media screen and (min-width: 640px) {
        .portfolio {
            .wrapper {
                padding: 10px 50px 60px 50px;
            }

            h3 {
                font-size: $fs-base;
            }

            .tab {
                button {
                    font-size: $fs-sm;
                }
            }

            .tabcontents {
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .portfolio {
            .wrapper {
                padding: 50px 100px;
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

            .tabcontents{
                gap: 30px;
            }

            .hero {
                width: 100%;
                height: 100vh;
                background-size: cover;
                margin-top: 40px;

                article {
                    gap: 15px;
                    padding: 10px 40px;

                    strong {
                        font-size: $fs-h3;
                    }

                    .contact-btn {
                        font-size: $fs-sm;
                        padding: 10px 15px;
                        border-radius: 5px;
                        min-width: 44px;
                        min-height: 44px;
                        
                        ion-icon {
                            font-size: $fs-h4;
                        }
                    }

                }

            }
        }
    }

    @media screen and (min-width: 1920px) {
        .portfolio  {
            .wrapper {
                padding: 50px 150px;
            }

            h3 {
                font-size: 1.3vw;

                &::after {
                    width: 100px;
                    height: 100px;
                }
            }
            
            .tab {
                button {
                    font-size: 1.2vw;
                }
            }

            .hero {
                width: 100%;
                height: 100vh;
                background-size: cover;
                margin-top: 40px;

                article {
                    gap: 15px;
                    padding: 10px 40px;

                    strong {
                        font-size: 2vw;
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
