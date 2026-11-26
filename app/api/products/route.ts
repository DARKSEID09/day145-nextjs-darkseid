const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
  },
];

export async function GET() {
  return Response.json(products);
}
export async function POST(request: Request) {
  const data = await request.json();

  if (!data.name || typeof data.price !== "number") {
    return Response.json(
      { message: "Product name and valid price are required." },
      { status: 400 }
    );
  }

  const newProduct = {
    id: products.length + 1,
    name: data.name,
    price: data.price,
  };

  products.push(newProduct);

  return Response.json(
    {
      message: "Product created successfully!",
      product: newProduct,
    },
    { status: 201 }
  );
}