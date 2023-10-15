// const store = {

//     _state: {
//         categorySelect: 0,
//         categories: [
//             {
//                 id: 0,
//                 toPath: 'all',
//                 name: 'all',
//                 title: 'All news in this catigory',
//                 description: 'You will find out everything that happens on the planet',
//                 articles: [
//                     {
//                         id: 1,
//                         title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                         description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                         content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                         url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                         image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                         publishedAt: "2022-09-28T08:14:24Z",
//                         source: {
//                             name: "PhoneArena",
//                             url: "https://www.phonearena.com"
//                         }
//                     },
//                     {
//                         id: 2,
//                         title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                         description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                         content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                         url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                         image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                         publishedAt: "2022-09-28T08:14:24Z",
//                         source: {
//                             name: "PhoneArena",
//                             url: "https://www.phonearena.com"
//                         }
//                     },
//                     {
//                         id: 3,
//                         title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                         description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                         content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                         url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                         image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                         publishedAt: "2022-09-28T08:14:24Z",
//                         source: {
//                             name: "PhoneArena",
//                             url: "https://www.phonearena.com"
//                         }
//                     },
//                 ]
//             },
//             {
//                 id: 1,
//                 toPath: 'sport',
//                 name: 'sport',
//                 title: 'Sport',
//                 description: 'Football? Golf? Tennis? Ping pong.',
//                 articles: [],
//             },
//             {
//                 id: 2,
//                 toPath: 'world',
//                 name: 'world',
//                 title: 'World. What is happening in the world?',
//                 description: 'News from all countries in this topic',
//                 articles: [],
//             },
//             {
//                 id: 3,
//                 toPath: 'technology',
//                 name: 'technology',
//                 title: 'Technologies',
//                 description: 'From electric toothbrushes to bionic prostheses',
//                 articles: [],
//             },
//         ],
//     },

//     categories: [
//         {
//             id: 0,
//             toPath: 'all',
//             name: 'all',
//             title: 'All news in this catigory',
//             description: 'You will find out everything that happens on the planet',
//             articles: [
//                 {
//                     id: 1,
//                     title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                     description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                     content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                     url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                     image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                     publishedAt: "2022-09-28T08:14:24Z",
//                     source: {
//                         name: "PhoneArena",
//                         url: "https://www.phonearena.com"
//                     }
//                 },
//                 {
//                     id: 2,
//                     title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                     description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                     content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                     url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                     image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                     publishedAt: "2022-09-28T08:14:24Z",
//                     source: {
//                         name: "PhoneArena",
//                         url: "https://www.phonearena.com"
//                     }
//                 },
//                 {
//                     id: 3,
//                     title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                     description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                     content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                     url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                     image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                     publishedAt: "2022-09-28T08:14:24Z",
//                     source: {
//                         name: "PhoneArena",
//                         url: "https://www.phonearena.com"
//                     }
//                 },
//             ]
//         },
//         {
//             id: 1,
//             toPath: 'sport',
//             name: 'sport',
//             title: 'Sport',
//             description: 'Football? Golf? Tennis? Ping pong.',
//             articles: [],
//         },
//         {
//             id: 2,
//             toPath: 'world',
//             name: 'world',
//             title: 'World. What is happening in the world?',
//             description: 'News from all countries in this topic',
//             articles: [],
//         },
//         {
//             id: 3,
//             toPath: 'technology',
//             name: 'technology',
//             title: 'Technologies',
//             description: 'From electric toothbrushes to bionic prostheses',
//             articles: [],
//         },
//     ],

//     dispatch(action) {

//     }
// }

// export const getMoreArticles = () => {
//     return {
//         articles: [
//             {
//                 id: 1,
//                 title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                 description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                 content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                 url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                 image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                 publishedAt: "2022-09-28T08:14:24Z",
//                 source: {
//                     name: "PhoneArena",
//                     url: "https://www.phonearena.com"
//                 }
//             },
//             {
//                 id: 2,
//                 title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                 description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                 content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                 url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                 image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                 publishedAt: "2022-09-28T08:14:24Z",
//                 source: {
//                     name: "PhoneArena",
//                     url: "https://www.phonearena.com"
//                 }
//             },
//             {
//                 id: 3,
//                 title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                 description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                 content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                 url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                 image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                 publishedAt: "2022-09-28T08:14:24Z",
//                 source: {
//                     name: "PhoneArena",
//                     url: "https://www.phonearena.com"
//                 }
//             },
//             {
//                 id: 1,
//                 title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                 description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                 content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                 url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                 image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                 publishedAt: "2022-09-28T08:14:24Z",
//                 source: {
//                     name: "PhoneArena",
//                     url: "https://www.phonearena.com"
//                 }
//             },
//             {
//                 id: 2,
//                 title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                 description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                 content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                 url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                 image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                 publishedAt: "2022-09-28T08:14:24Z",
//                 source: {
//                     name: "PhoneArena",
//                     url: "https://www.phonearena.com"
//                 }
//             },
//             {
//                 id: 3,
//                 title: "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//                 description: "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//                 content: "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//                 url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//                 image: "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//                 publishedAt: "2022-09-28T08:14:24Z",
//                 source: {
//                     name: "PhoneArena",
//                     url: "https://www.phonearena.com"
//                 }
//             },
//         ]
//     }
// }

// export default store;

// // const store = ;

// // export default store
