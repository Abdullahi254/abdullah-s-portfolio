import Main from '../components/Main'
import Head from 'next/head'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdullahi | Software Engineerr</title>
        <meta name="description" content="Software Engineer in Kenya" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Main />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
