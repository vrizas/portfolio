<template>
  <section class="portfolio">
    <div class="wrapper">
        <h3>Portofolio</h3>
        <div class="tab">
            <button class="tablink" :class="{active:tablink.name==='Semua'}" @click="e => tabHandler(e, tablink.tabDestination)" ref="tablinksRef" v-for="(tablink, index) in tablinks" :key="index">{{ tablink.name }}</button>
            <div class="active-dot"></div>
        </div>
        <div class="tabcontents">
            <div class="tabcontent-container" id="web-dev" ref="webDev">
                <div class="tabcontent" :style="{backgroundImage: `url(${project.imgSrc})`}" v-for="(project, index) in portfolio.webDev" :key="index">
                    <article>
                        <h4>{{ project.name }}</h4>
                        <p>{{ project.description }}</p>
                        <div class="techs">
                            <span v-for="(tech, index) in project.techs" :key="index">{{ tech }}</span>
                        </div>
                        <a :href="project.githubUrl"><ion-icon name="logo-github"></ion-icon></a>
                    </article>
                </div>
            </div>
            <div class="tabcontent-container" id="wordpress-dev" ref="wordpressDev">
                <div class="tabcontent" :style="{backgroundImage: `url(${project.imgSrc})`}" v-for="(project, index) in portfolio.wordpressDev" :key="index">
                    <article>
                        <h4>{{ project.name }}</h4>
                        <p>{{ project.description }}</p>
                        <div class="techs">
                            <span v-for="(tech, index) in project.techs" :key="index">{{ tech }}</span>
                        </div>
                        <a :href="project.githubUrl"><ion-icon name="logo-github"></ion-icon></a>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <div class="hero" :style="{backgroundImage: `url(${heroImgSrc})`}">
        <article>
            <strong>Tertarik untuk bekerja sama?</strong>
            <router-link to="/contact" class="contact-btn">HUBUNGI SAYA <ion-icon name="arrow-forward-circle"></ion-icon></router-link>
        </article>
    </div>
  </section>
</template>

<script>
export default {
    name: 'PortfolioView',
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
            ]
        }
    },
    methods: {
        tabHandler(event, tabDestination) {
            if (tabDestination === 'all') {
                this.$refs.webDev.style.display = 'flex'
                this.$refs.wordpressDev.style.display = 'flex'
            } else if (tabDestination === this.$refs.webDev.id) {
                this.$refs.webDev.style.display = 'flex'
                this.$refs.wordpressDev.style.display = 'none'
            } else if (tabDestination === this.$refs.wordpressDev.id) {
                this.$refs.webDev.style.display = 'none'
                this.$refs.wordpressDev.style.display = 'flex'
            }

            this.$refs.tablinksRef.forEach(tablink => {
                tablink.classList.remove('active')
            });

            event.target.classList.add('active')
        }
    },
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    .portfolio {
        padding-bottom: 60px;
        .wrapper {
            padding: 10px $primaryPadX;
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

        .tabcontent-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;

            .tabcontent {
                width: 100%;
                background-size: cover;
                border-radius: 10px;

                article {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(0deg, rgba(43, 42, 42, 0.95), rgba(43, 42, 42, 0.95));
                    border-radius: 10px;
                    padding: 20px 15px;

                    h4 {
                        font-size: $fs-base;
                        font-weight: $fwSemiBold;
                        margin-bottom: 20px;
                    }

                    p {
                        font-size: $fs-xs;
                        font-weight: $fwLight;
                    }

                    .techs {
                        display: flex;
                        gap: 5px;
                        margin-top: 15px;

                        span {
                            font-size: $fs-xxs;
                            color: $greyColor;
                        }
                    }

                    a {
                        min-width: 24px;
                        min-height: 24px;
                        margin-top: 10px;

                        ion-icon {
                            font-size: $fs-h4;
                        }   
                    }
                }
            }
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
</style>
