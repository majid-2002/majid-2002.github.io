import Link from "next/link";
import Head from "next/head";
import Layout , {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Social() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Socials</h1>
      <h2 className={utilStyles.headingMd}>
        <Link href="https://www.github.com/majid-2002">
          Github
        </Link>
        <br />
        <Link href="https://www.instagram.com/majid.127x">
          Instagram
        </Link>
      </h2>
    </Layout>
  );
}
