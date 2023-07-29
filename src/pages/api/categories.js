const mycategories = [
  "CPU / Processor",
  "Motherboard",
  "RAM",
  "Power Supply Unit",
  "Storage Device",
  "Monitor",
  "Others",
];

const categories = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ categories: mycategories });
  }
};

export default categories;
