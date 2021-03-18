import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.justifiedText}>
          Olá, meu nome é Marcos Oliveira. Sou um desenvolvedor Full Stack apaixonado por tecnolgia que está sempre em busca de novas tecnologias e desafios. 
          Nas horas vagas gosto de desenvolver projetos pessoais e escrever sobre tecnologia, desenvolvimento pessoal e finanças. 
          Minhas informações profissionais podem ser encotradas no LinkedIn, meus projetos no GitHub e meus artigos no Medium. 
          Caso queira se manter atualizado sobre meus artigos e projetos siga-me no Twitter.
        </p>        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}