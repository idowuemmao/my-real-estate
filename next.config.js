/** @type {import('next').NextConfig} */
const nextConfig = {
  // used to customize the configuration file
  images: {
    domains: [
      "fakestoreapi.com/products",
      "links.papareact.com",
      "jsonkeeper.com",
    ],
  },
  //This is a public key that's why its here
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZW1teWdyZWF0IiwiYSI6ImNsbGR0aGYxbzBqMW0zZXAxN2tkOTZrb3oifQ.rHmnNMD5UYJa0P6vrEK1pw",
  },
};

module.exports = nextConfig;
