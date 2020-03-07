import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="">
        <h1 className="text-6xl font-bold my-8">Stop spreading</h1>

        <h2 className="bg-black text-5xl font-bold my-8 p-2 ml-64 text-white text-right">
          the virus
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold no-underline text-gray-900"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
