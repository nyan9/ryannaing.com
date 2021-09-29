import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const Meta = ({ title, keywords, description, image }: Props): JSX.Element => {
  title = title.includes("Ryan") ? title : title.concat(" | Ryan Naing");
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta
        property='og:image'
        content={image ? image : "/assets/images/logo.png"}
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ryan Naing - Software Engineer",
  keywords: "web development, programming, web design",
  description: "Software Engineer. Lover of all technologies.",
};

export default Meta;
