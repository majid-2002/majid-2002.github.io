import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I am <b>Majid</b>, I am software developer, working on Next.JS, React.JS and Full Stack Apps Using Node.JS</p>
        <p>
          Checkout My social{' '}
          <Link href="/social">links</Link>.
        </p>
      </section>
    </Layout>
  );
}