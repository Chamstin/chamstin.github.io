import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
   base: '/',
  title: '玲音の部屋',
  description: 'Welcome to CYBERIA.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/index.md' },
      { text: 'Guide', link: '/example.md' }

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          {text:'Embodied-RAG-Reading', link:'/Embodied-RAG-Reading.md'},
          {text:'Vision-and-language Navigation Survey', link:'/Vision-and-language_Navigation_Survey.md'}
          // ...
        ],
      },
    ],
  },
});
