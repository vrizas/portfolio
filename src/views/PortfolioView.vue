<template>
  <section class="portfolio">
    <div class="wrapper">
        <h3>Portofolio</h3>
        <div class="tab">
            <button class="tablink" :class="{active:tablink.name==='Semua'}" @click="e => tabHandler(e, tablink.tabDestination)" ref="tablinksRef" v-for="(tablink, index) in tablinks" :key="index">{{ tablink.name }}</button>
            <div class="active-dot"></div>
        </div>
        <div class="tabcontents" ref="tabcontents">
            <TabContent v-show="showWebDevelopment" v-for="(project, index) in portfolio.webDev" :key="index" :project="project" />
            <TabContent v-show="showWordpressDevelopment" v-for="(project, index) in portfolio.wordpressDev" :key="index" :project="project" />
        </div> 
    </div>
    <div class="hero" :style="{backgroundImage: `url(${heroImgSrc})`}" ref="hero">
        <article>
            <strong>Tertarik untuk bekerja sama?</strong>
            <router-link to="/contact" class="contact-btn">HUBUNGI SAYA <ion-icon name="arrow-forward-circle"></ion-icon></router-link>
        </article>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import TabContent from '@/components/TabContent.vue'

export default {
    name: 'PortfolioView',
    components: {
        TabContent
    },
    data () {
        return {
            portfolio: {
                webDev: [
                    { 
                        name: 'Masyuk', 
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores quidem! Id in quaerat pariatur debitis expedita aut voluptatum maiores.',
                        imgSrc: require('../assets/img/snow-village.jpg'),
                        techs: ['Laravel', 'Tailwind', 'Livewire'],
                        githubUrl: 'github.com' 
                    },
                    { 
                        name: 'Masyuk', 
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores quidem! Id in quaerat pariatur debitis expedita aut voluptatum maiores.',
                        imgSrc: require('../assets/img/snow-village.jpg'),
                        techs: ['Laravel', 'Tailwind', 'Livewire'],
                        githubUrl: 'github.com' 
                    },
                    { 
                        name: 'Masyuk', 
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores quidem! Id in quaerat pariatur debitis expedita aut voluptatum maiores.',
                        imgSrc: require('../assets/img/snow-village.jpg'),
                        techs: ['Laravel', 'Tailwind', 'Livewire'],
                        githubUrl: 'github.com' 
                    }   
                ],
                wordpressDev: [
                    { 
                        name: 'Wordpress', 
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores quidem! Id in quaerat pariatur debitis expedita aut voluptatum maiores.',
                        imgSrc: require('../assets/img/snow-village.jpg'),
                        techs: ['Laravel', 'Tailwind', 'Livewire'],
                        githubUrl: 'github.com' 
                    },
                    { 
                        name: 'Wordpress', 
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores quidem! Id in quaerat pariatur debitis expedita aut voluptatum maiores.',
                        imgSrc: require('../assets/img/snow-village.jpg'),
                        techs: ['Laravel', 'Tailwind', 'Livewire'],
                        githubUrl: 'github.com' 
                    },
                    { 
                        name: 'Wordpress', 
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores quidem! Id in quaerat pariatur debitis expedita aut voluptatum maiores.',
                        imgSrc: require('../assets/img/snow-village.jpg'),
                        techs: ['Laravel', 'Tailwind', 'Livewire'],
                        githubUrl: 'github.com' 
                    }   
                ]
            },
            heroImgSrc: require('../assets/img/cool-laptop.jpg'),
            tablinks: [
                { name: 'Semua', tabDestination: 'all' },
                { name: 'Web Development', tabDestination: 'web-dev' },
                { name: 'Wordpress Development', tabDestination: 'wordpress-dev' }
            ],
            currentTablink: 'all'
        }
    },
    methods: {
        tabHandler(event, tabDestination) {
            this.currentTablink = tabDestination

            this.$refs.tablinksRef.forEach(tablink => {
                tablink.classList.remove('active')
            });

            event.target.classList.add('active')
        }
    },
    computed: {
        showWebDevelopment() {
            return this.currentTablink === 'all' || this.currentTablink === 'web-dev'
        },

        showWordpressDevelopment() {
            return this.currentTablink === 'all' || this.currentTablink === 'wordpress-dev'
        }
    },
    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        window.onscroll = () => {
            if(this.$route.name === 'portfolio') {
                const hero = this.$refs.hero
                const navbar = document.querySelector('nav')

                function desktopResponsive(x) {
                    if (x.matches) {
                        let bounds = hero.getBoundingClientRect()

                        if (bounds.top < 432 && bounds.top < window.innerHeight) {
                            gsap.to(navbar, {duration: 0.5, x: -100, ease: 'power2'})
                        } else {
                            gsap.to(navbar, {duration: 0.5, x: 0, ease: 'power2'})
                        }      
                    }
                }

                var x = window.matchMedia("(min-width: 1000px)")
                desktopResponsive(x)
                x.addListener(desktopResponsive)

            }
        }
    }
}
</script>

<style lang="scss">
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
            width: 100%;
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
                    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
                    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.25)) drop-shadow(-1px -1px 3px rgba(255, 255, 255, 0.25));
                    
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
</style>
