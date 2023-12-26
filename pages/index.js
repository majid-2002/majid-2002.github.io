import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Image from "next/image";
import Card from "../components/Card";

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

  const icons = {
    weavedb: (
      <Image
        src="/images/weavedb.png"
        width={20}
        height={20}
        className="pt-1"
      />
    ),
    ipfs: <Image src="/images/ipfs.png" width={20} height={20} />,
    socketio: <i className="devicon-socketio-original colored text-xl"></i>,
    golang: <i className="devicon-go-original-wordmark colored text-xl"></i>,
    git: <i className="devicon-git-plain colored text-xl"></i>,
    typescript: <i className="devicon-typescript-plain colored text-xl"></i>,
    firebase: <i className="devicon-firebase-plain colored text-xl"></i>,
    javascript: <i className="devicon-javascript-plain colored text-xl"></i>,
    tailwind: <i className="devicon-tailwindcss-plain colored text-xl"></i>,
    solidity: <i className="devicon-solidity-plain colored text-xl"></i>,
    golang: <i className="devicon-go-plain colored text-xl"></i>,
    react: <i className="devicon-react-original colored text-xl"></i>,
    next: <i className="devicon-nextjs-original colored text-xl"></i>,
    node: <i className="devicon-nodejs-plain colored text-xl"></i>,
    express: <i className="devicon-express-original colored text-xl"></i>,
    vuejs: <i className="devicon-vuejs-plain colored text-xl"></i>,
    mongodb: <i class="devicon-mongodb-plain colored text-xl"></i>
  };


  const projects = [
    {
      title: "Formify Ai",
      description: "An Ai powered form builder with web3 based validation",
      image: "/images/formify.png",
      techstack: [
        "typescript",
        "solidity",
        "next",
        "node",
        "tailwind",
        "weavedb",
      ].map((tech) => {
        return icons[tech];
      }),
      github: "https://github.com/majid-2002",
      link: "https://formify-ai.vercel.app/",
    },
    {
      title: "ChessArena",
      image: "/images/chess.png",
      description: "A Chess multiplayer game",
      techstack: ["next", "tailwind", "mongodb", "node", "socketio"].map(
        (tech) => {
          return icons[tech];
        }
      ),
      github: "https://github.com/majid-2002/chessarena",
    },
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <section className={"text-lg  flex flex-col"}>
        <p> 
          Hello I am <b>Majid</b>, a software developer, working on Next.JS,
          React.JS and Full Stack Apps Using Node.JS
        </p>
        <div className={utilStyles.socialIconList + " pt-4"}>
          <a href="https://www.github.com/majid-2002">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.instagram.com/majid.127x">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
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

      <section>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className="">
          {projects.map((project) => {
            return <Card {...project} />;
          })}
        </div>
      </section>
    </Layout>
  );
}
