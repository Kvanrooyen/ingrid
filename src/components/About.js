import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className='relative'>
      <div className='container mx-auto'>
        <section className='lg:flex p-8'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mt-14 mr-8'
            alt={author.name}
          />

          <div className='px-3 lg:px-6 py-3 lg:py-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl'>
            <BlockContent
              blocks={author.bio}
              projectId='qddjgdan'
              dataset='production'
            />
          </div>
        </section>
      </div>
    </main>
  );
}
