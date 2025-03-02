import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

type PageProps = {
  title: string;
  content: string;
};

export default function Page({ title, content }: PageProps) {
  return (
    <>
      <Head>
        <title>{title} | Mon Site SEO</title>
        <meta name="description" content={content.substring(0, 150)} />
        <link rel="canonical" href={`https://mon-site.com/${title}`} />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{content}</p>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const title = params?.slug as string;
  return {
    props: {
      title,
      content: `Ceci est le contenu de la page ${title}.`,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'article-exemple' } }],
    fallback: 'blocking',
  };
};
