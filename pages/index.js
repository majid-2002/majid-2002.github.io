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
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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
    mongodb: <i className="devicon-mongodb-plain colored text-xl"></i>,
  };

  const projects = [
    {
      title: "Formify Ai",
      description: "An Ai powered form builder with web3 based validation",
      image: "/images/formify.png",
      gradient: "2",
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
      gradient: "2",
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
        <p>Hello, 👋</p>
        <br />
        <p>
          I'm <span className="font-semibold">Majid</span>, a passionate
          Fullstack Developer and student based in India. Currently pursuing my
          Bachelor's in Computer Science, I thrive on crafting innovative
          solutions and building impactful applications. My project portfolio
          includes <span className="font-semibold">ChessArena</span>,{" "}
          <span className="font-semibold">Postify</span> and various other
          projects, where I've leveraged my skills in frontend and backend
          development to create engaging user experiences.
        </p>
        <br></br>
        <p>
          I've actively participated and won in various hackathons. I'm actively exploring new technologies and contributing to
          meaningful projects that make a difference.
        </p>
        <div className={utilStyles.socialIconList + " pt-4 flex"}>
          <a href="https://www.github.com/majid-2002">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.instagram.com/majid.127x">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="mailto:majid616365@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a href="https://leetcode.com/u/majid_127x/">
            <FontAwesomeIcon icon={faCode} size="lg" />
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
          {projects.map((project, index) => {
            return <Card {...project} key={index} />;
          })}
        </div>
      </section>
    </Layout>
  );
}
