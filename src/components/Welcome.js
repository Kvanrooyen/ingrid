import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function Welcome() {
  const [welcomeData, setWelcome] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "welcome"]{
            name,
            welcomeMessage,
        }`
      )
      .then((data) => setWelcome(data))
      .catch(console.error);
  }, []);

  return (
    <main className='min-h-screen py-4'>
      <section className='container mx-auto'>
        <div>
          {welcomeData &&
            welcomeData.map((welcome) => (
              <div className='px-3 lg:px-6 py-3 lg:py-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl'>
                <BlockContent
                  blocks={welcome.welcomeMessage}
                  projectId='qddjgdan'
                  dataset='production'
                />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
