import React from 'react'
import Categories from '../../src/components/Categories'

const urls = [
    "politics",
    "health",
    "business",
    "design",
    "sports"
]

export const categories = [
    {
        path: "/categories/politics",
        name: "Policics"
    },
    {
        path: "/categories/health",
        name: "Health"
    },
    {
        path: "/categories/business",
        name: "Business"
    },
    {
        path: "/categories/design",
        name: "Design"
    },
    {
        path: "/categories/sports",
        name: "Sport"
    },

]

const CategoriesPage = () => {
  return (
    <Categories categories={categories}/>
  )
}

export default CategoriesPage;

// export function getStaticPaths() {
//     const allPaths = urls.map(url => (
//         {
//             param: {
//                 cat: url
//             }
//         }
//     ))
//     return {
//         paths: [...allPaths],
//         fallback: false
//     }
// }

// export function getStaticProps() {
//     return {

//     }
// }