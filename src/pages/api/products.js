import product from "/product.json";

const products = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ products: product });
  }
};

export default products;
