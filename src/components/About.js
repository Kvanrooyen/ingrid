import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";

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

  if (!author) return <di>Loading...</di>;

  return (
    <Container>
      <Col>
        <Row>
          <Col xs={6} md={3}>
            <img
              src={urlFor(author.authorImage).url()}
              className='rounded w-32 h-32 lg:w-64 lg:h-64 mt-14'
              alt={author.name}
            />
          </Col>
          <Col xs={12} md={9}>
            <div className='px-3 lg:px-6 py-3 lg:py-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl'>
              <BlockContent
                blocks={author.bio}
                projectId='qddjgdan'
                dataset='production'
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
