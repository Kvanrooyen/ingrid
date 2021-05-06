import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import "../index.css";

export default function Product() {
  const [productData, setProduct] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
            title,
            slug,
            link
        }`
      )
      .then((data) => setProduct(data))
      .catch(console.error);
  }, []);
  return (
    <main className='min-h-screen p-12'>
      <section className='container mx-auto'>
        <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {productData &&
            productData.map((product, index) => (
              <article
                className='shadow-lg rounded-md px-3 py-3 leading-snug border-l-8 border-yellow-700'
                key={index}
              >
                <h3 className='text-gray-800 text-2xl font-bold mb-2'>
                  {product.title}
                </h3>
                <div className='text-gray-500 text-xs space-x-4'>
                  <a
                    href={product.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-bold hover:unerLin'
                  >
                    Download
                  </a>
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
