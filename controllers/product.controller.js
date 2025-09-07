let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

function getAllProducts(req, res) {
  try {
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

function getSinglProduct(req, res) {
  try {
    const { id } = req.params;
    const singleProduct = products.find((item) => item.id === Number(id));

    if (singleProduct) {
      res.status(200).json(singleProduct);
    } else {
      res
        .status(404)
        .json({ msg: `The product with id: ${id} was not found!` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

function newProduct(req, res) {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ msg: "name and price are required!" });
    }

    const newProduct = {
      id: products.length + 1,
      name,
      price,
    };

    products.push(newProduct);

    res.status(201).json({
      msg: "The new product was created successfully!",
      product: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

function updateProduct(req, res) {
  try {
  } catch (error) {
    res.status(404).send(error);
  }
}

function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const findProduct = products.find((item) => item.id === Number(id));

    if (!findProduct) {
      return res
        .status(404)
        .json({ msg: `The product with id: ${id} was NOT FOUND` });
    }

    const fileteredProduct = products.filter((item) => item.id !== Number(id));

    products = fileteredProduct;

    res.status(200).json({ msg: "The product was deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

module.exports = {
  getAllProducts,
  getSinglProduct,
  newProduct,
  updateProduct,
  deleteProduct,
};
