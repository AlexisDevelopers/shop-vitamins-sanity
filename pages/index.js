import React from 'react';

import { client } from '../lib/client';
import { Product, HeroBanner } from '../components';
// import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Shop Top-Selling Men's Health Vitamins</h2>
      <p>Learn More About the Puritan’s Pride Manufacturing Process
          Our scientifically formulated vitamins, supplements, and minerals are tested or inspected multiple times throughout the manufacturing process. </p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;