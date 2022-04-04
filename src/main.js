// dev init
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const portfolio = {
    webDev: [
        { 
            name: 'REST', 
            description: 'Aplikasi web yang bertujuan untuk memungkinkan pelanggan mencari restoran dan memberikan ulasan mereka.',
            imgSrc: require('./assets/img/rest.jpg'),
            techs: ['Webpack', 'JavaScript', 'Firebase', 'Service Worker'],
            url: {
                github: 'https://github.com/vrizas/restaurant-apps',
                website: 'https://rest-9a575.web.app/' 
            }
        },
        { 
            name: 'Yulibu', 
            description: 'Membuat template HTML untuk web ecommerce yang dapat digunakan untuk membuat website ecommerce.',
            imgSrc: require('./assets/img/yulibu.jpg'),
            techs: ['HTML', 'JavaScript', 'Bootstrap'],
            url: {
                website: 'https://project.rumahcyber.com' 
            }
        },
        { 
            name: 'Movixx', 
            description: 'Aplikasi web yang bertujuan untuk mempermudah pengguna dalam memberikan rating dan mencari film.',
            imgSrc: require('./assets/img/movixx.jpg'),
            techs: ['Webpack', 'JavaScript', 'Bootstrap', 'Web Storage'],
            url: {
                github: 'https://github.com/vrizas/movixx',
                website: 'https://movixx.vercel.app' 
            }
        },
        { 
            name: 'Masyuk', 
            description: 'Aplikasi web yang ditujukan untuk mahasiswa agar dapat lebih mudah dalam mencari resep makanan yang dibutuhkan.',
            imgSrc: require('./assets/img/masyuk.jpg'),
            techs: ['Laravel', 'JavaScript', 'Livewire'],
            url: {
                github: 'https://github.com/vrizas/masyuk' 
            }
        },
        { 
            name: 'Njawi', 
            description: 'Aplikasi mobile yang bertujuan untuk mempermudah anak-anak dalam mempelajari bahasa Jawa.',
            imgSrc: require('./assets/img/njawi.jpg'),
            techs: ['Android', 'Kotlin', 'Firebase'],
            url: {
                github: 'https://github.com/ekotyoo/njawi' 
            }
        },
        { 
            name: 'Butuh Surat', 
            description: 'Aplikasi web untuk memfasilitasi aparat RT dan RW di Kelurahan Lowokwaru Kota Malang dalam pembuatan surat untuk keperluan pengurusan warga disana.',
            imgSrc: require('./assets/img/butuh-surat.jpg'),
            techs: ['Laravel', 'JavaScript', 'Livewire'],
            url: {
                github: 'https://github.com/vrizas/surat-menyurat' 
            }
        }  
    ],
    webMaintenance: [
        { 
            name: 'Management Competition 2022', 
            description: 'Memelihara dan menambahkan fitur untuk website event yang diadakan oleh FBE UAJY yaitu "Management Competition 2022".',
            imgSrc: require('./assets/img/uajy.jpg'),
            techs: ['Laravel', 'Bootstrap'],
            url: {
                github: 'https://github.com/hendrawanap/uajy_mc' ,
                website: 'https://ma.hmpsmfbeuajy.com'
            }
        },
    ]
}

app.use(router).mount('#app')
app.provide('portfolio', portfolio)
