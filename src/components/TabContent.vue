<template>
    <div class="tabcontent" :style="{backgroundImage: `url(${project.imgSrc})`}">
        <article>
            <h4>{{ project.name }}</h4>
            <p>{{ project.description }}</p>
            <div class="techs">
                <span v-for="(tech, index) in project.techs" :key="index">{{ tech }}</span>
            </div>
            <a :href="project.githubUrl" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
        </article>
    </div>
</template>

<script>
export default {
    props: ['project'],
    name: 'TabContent'
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

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
                gap: 10px;
                margin-top: 15px;

                span {
                    font-size: $fs-xxs;
                    color: $greyColor;
                }
            }

            a {
                min-width: 24px;
                min-height: 24px;
                margin-top: 25px;

                ion-icon {
                    font-size: $fs-h4;
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

                .techs {
                    span {
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
            width: calc(32% - (20px / 3));

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

                .techs {
                    span {
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
</style>