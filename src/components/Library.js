import React, { useState, useEffect } from "react";
import sanityClient from "../client";
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
        <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-7'>
          {productData &&
            productData.map((product, index) => (
              <article>
                <a
                  href={product.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span
                    className='block h-16 relative rounded shadow leading-snug bg-white border-l-4 border-yellow-700'
                    key={index}
                  >
                    <span className='block relative h-full flex jsutify-end items-end pr-4 pb-4'>
                      <h3 className='text-gray-800 textlg font-blog px-3 py-3 bg-white rounded'>
                        {product.title}
                      </h3>
                    </span>
                  </span>
                </a>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
