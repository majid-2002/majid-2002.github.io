import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';


//? getStaticPaths is required for dynamic routes.
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

//? getStaticProps is used for external data fetching by static site generation. here the params object is the object returned by getStaticPaths
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

//? postData here is the props object that is returned by getStaticProps
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="space-y-2">
        <h1 className={"text-3xl font-bold"}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="text-justify space-y-4"/>
      </article>
    </Layout>
  );
}