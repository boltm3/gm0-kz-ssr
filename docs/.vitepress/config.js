import sidebarEn from './sidebar-en.json';
import sidebarKk from './sidebar-kz.json';
import sidebarRu from './sidebar-ru.json';

export default { 
    lang: 'en-US',
    title: 'Game Manual 0 Kazakhstan',
    base: '/',
    lastUpdated: true,
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.svg',
                type: 'image/svg+xml'
            }
        ]
    ],
    themeConfig: {
        i18nRouting: true,
        sidebar: {
            '/en/docs/ftc/': sidebarEn['/en/docs/ftc/'],
            '/kk/docs/ftc/': sidebarKk['/kk/docs/ftc/'],
            '/ru/docs/ftc/': sidebarRu['/ru/docs/ftc/']
        },
        nav: [
            { text: '📂 GitHub', link: 'https://github.com/Boltm3' },
            { text: '🌐 First Kz', link: 'https://yourwebsite.com' }
        ],
        outline: { level: [2, 6] },
        search: { provider: 'local' },
        footer: {
            message: {
                '/en/': 'Released under the MIT License.',
                '/kk/': 'MIT лицензиясы бойынша шығарылды.',
                '/ru/': 'Выпущено по лицензии MIT.'
            },
            copyright: {
                '/en/': 'Copyright © 2024 KraXen72',
                '/kk/': 'Авторлық құқық © 2024 KraXen72',
                '/ru/': 'Авторские права © 2024 KraXen72'
            }
        },
        socialLinks: [
            { icon: 'instagram', link: 'https://www.instagram.com/bolt.m3/' },
            { icon: 'tiktok', link: 'https://www.tiktok.com/@bolt.m3_ftc' },
            { icon: 'youtube', link: 'https://www.youtube.com/channel/UCuSTuLznWnVQ2FV-f8L-xHA' }
        ],
        localeLinks: {
            text: '🌍 Language',
            items: [
                { text: 'English', link: '/en/docs/ftc/' },
                { text: 'Қазақша', link: '/kk/docs/ftc/' },
                { text: 'Русский', link: '/ru/docs/ftc/' }
            ]
        }
    }
};
