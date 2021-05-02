import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
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
            productData.map((product) => (
              <Card>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Link href={product.link} target='_blank'>
                    Download
                  </Card.Link>
                </Card.Body>
              </Card>
            ))}
        </div>
      </section>
    </main>
  );
}
