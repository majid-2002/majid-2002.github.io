import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

//? static site generation external data rendered at build time
export async function getStaticProps() {
  const allPostsData = getSortedPostsData(); //? get data from external api or file system
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I am <b>Majid</b>, a software developer, working on Next.JS,
          React.JS and Full Stack Apps Using Node.JS
        </p>
        <div className={utilStyles.socialIconList}>
          <a href="https://www.github.com/majid-2002">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a href="https://www.instgram.com/majid.127x">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
