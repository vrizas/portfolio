<template>
    <div class="tabcontent" :style="{backgroundImage: `url(${project.imgSrc})`}">
        <article>
            <h4>{{ project.name }}</h4>
            <p>{{ project.description }}</p>
            <ul class="techs">
                <li v-for="(tech, index) in project.techs" :key="index">{{ tech }}</li>
            </ul>
            <div class="links">
                <a :href="project.url.github" v-if="project.url.github" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
                <a :href="project.url.website" v-if="project.url.website" target="_blank" rel="noreferrer"><ion-icon name="globe-outline"></ion-icon></a>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    props: ['project'],
    name: 'TabContent'
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';

    .tabcontent {
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
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

            ul.techs {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 15px;

                li {
                    list-style-type: none;
                    font-size: $fs-xxs;
                    color: $greyColor;
                }
            }

            .links {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 25px;

                a {
                    min-width: 24px;
                    min-height: 24px;

                    ion-icon {
                        font-size: $fs-h4;
                    }   
                }
            }
        }
    }

    @media screen and (min-width: 640px) {
        .tabcontent {
            width: calc(50% - 10px);

            article {
                border-radius: 10px;
                padding: 20px 15px;

                h4 {
                    font-size: $fs-h5;
                }

                p {
                    font-size: $fs-sm;
                }

                ul.techs {
                    li {
                        font-size: $fs-xs;
                    }
                }

                a {
                    ion-icon {
                        font-size: $fs-h3;
                    }   
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .tabcontent {
            width: calc(50% - 15px);
            height: 40vh;

            article {
                border-radius: 10px;
                padding: 25px 30px;
                opacity: 0;
                transition: .3s;

                h4 {
                    font-size: $fs-h5;
                }

                p {
                    font-size: $fs-sm;
                }

                ul.techs {
                    li {
                        font-size: $fs-xs;
                    }
                }

                a {
                    ion-icon {
                        font-size: $fs-h3;
                    }   
                }
            }

            &:hover article {
                opacity: 1;
            }

        }
    }

    @media screen and (min-width: 1920px) {
        .tabcontent {
            article {
                padding: 35px 40px;

                h4 {
                    font-size: 1.5vw;
                }

                p {
                    font-size: 1vw;
                }

                ul.techs {
                    li {
                        font-size: .8vw;
                    }
                }

                a {
                    ion-icon {
                        font-size: 2vw;
                    }   
                }
            }
        }
    }
</style>