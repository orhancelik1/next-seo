import { NextSeo } from "next-seo";

const about = () => {
  const SEO = {
    title: "WebDev News | About",
    description: "this is a basic about page",

    openGraph: {
      title: "WebDev News | About",
      description: "this is a basic about page",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div>about</div>
    </>
  );
};

export default about;
