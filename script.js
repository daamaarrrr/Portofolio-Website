const { createApp, ref } = Vue;

createApp({
    setup() {
        const selectedProject = ref(null);

        const projects = ref([
            { 
                id: 1, 
                title: 'Web E-Commerce', 
                fullDesc: 'Sebuah platform e-commerce inovatif yang menggabungkan dua lini bisnis berbeda: Healthy Food (Salad) dan Fashion Accessories. Sistem ini dirancang untuk mempermudah manajemen pesanan agar tercatat secara otomatis dan akurat. Fokus utama proyek ini adalah User Experience yang memudahkan pelanggan memilih topping salad sekaligus melihat katalog aksesoris dalam satu alur transaksi yang mulus.', 
                image: 'projek1.png', // Gambar di kotak depan
                detailImage: 'detail1.png', // Gambar berbeda untuk di dalam detail
                tools: 'HTML, CSS, Vue.js, Laravel', 
                link: 'https://athreeks.my.id' 
            },
            { 
                id: 2, 
                title: 'Data Manager', 
                fullDesc: 'Kumpulan sistem manajemen data berbasis Google Sheets dan Excel yang telah saya garap untuk berbagai keperluan. Proyek ini mencakup otomatisasi laporan keuangan, pelacakan inventaris, hingga dashboard analisis data yang kompleks. Menggunakan rumus tingkat lanjut (Advanced Formula) dan Pivot Tables untuk mengubah data mentah menjadi informasi yang mudah dibaca dan siap digunakan untuk pengambilan keputusan bisnis.', 
                image: 'projek2.png', 
                detailImage: 'detail2.png', // Gambar berbeda
                tools: 'Google Sheets, Data Analysis',
                link: 'https://drive.google.com/drive/folders/1cC__NcnXY_6f-jsGNwOPTiHOrOWt4BZN?usp=sharing' 
            },
            { 
                id: 3, 
                title: 'Porto Music', 
                fullDesc: 'Eksplorasi sisi kreatif di bidang audio yang berawal dari hobi namun berkembang menjadi unit yang menghasilkan profit. Proyek ini mencakup proses produksi musik, kurasi playlist, hingga manajemen lisensi karya. Di sini, saya menunjukkan bagaimana sebuah passion jika dikembangkan dengan manajemen yang benar dapat memiliki nilai komersial di industri kreatif digital.', 
                image: 'projek3.png', 
                detailImage: 'detail3.png', // Gambar berbeda
                tools: 'Vidio di Drive',
                link: 'https://drive.google.com/drive/folders/1FUvjicafUiy_Hw8rvvh0kS2dMY3lEZhX?usp=sharing' 
            },
            { 
                id: 4, 
                title: 'Porto Design', 
                fullDesc: 'Showcase portofolio visual yang mengintegrasikan berbagai proyek desain grafis, mulai dari tugas besar selama masa perkuliahan hingga proyek desain profesional. Berisi eksplorasi branding, layouting, dan UI/UX yang menonjolkan estetika berani. Setiap karya dalam proyek ini merupakan hasil dari riset mendalam untuk memecahkan masalah komunikasi visual secara kreatif.', 
                image: 'projek4.png', 
                detailImage: 'detail4.png', // Gambar berbeda
                tools: 'Figma, Adobe Illustrator',
                link: 'https://drive.google.com/drive/folders/1FxKcVXoZYx8AX7vHWCgs0C5lUFTLW_n_?usp=sharing' 
            }
        ]);

        const openProject = (project) => {
            selectedProject.value = project;
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        };

        return { projects, selectedProject, openProject }
    }
}).mount('#app');