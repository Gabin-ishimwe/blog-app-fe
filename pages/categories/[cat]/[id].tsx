import React from 'react'
import SinglePage from '../../../src/components/SinglePage';

const ReadArticle = ({category}:{category:any}) => {
  return (
    <SinglePage category={category}/>
  )
}

export default ReadArticle;

const links = [
    {
      link: "politics",
      path: "/categories/politics", 
      id: "1"
    },
    {
      link: "business",
      path: "/categories/business",
      id: "2"
    },
    {
      link: "health",
      path: "/categories/health",
      id: "3"
    },
    {
      link: "design",
      path: "/categories/design",
      id: "4"
    },
    {
      link: "sports",
      path: "/categories/sports",
      id: "5"
    },
  ]

export function getStaticPaths() {

    const allPaths = links.map(link => (
        {
            params: {
                cat: link.link,
                id: link.id
            }
        }
    ))

    return {
      paths: [...allPaths],
      fallback: false 
    }
}

export function getStaticProps(context: { params: { id: string; }; }) {
    const data = links.find(article => article.id == context.params.id)
    return{
        props: {
            category: data?.link
        }
    }
}