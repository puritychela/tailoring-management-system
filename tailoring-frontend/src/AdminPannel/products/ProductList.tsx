import { useState } from "react";
import { Product } from "../../shared/hooks/useProduct";
import UpdateProduct from "./UpdateProduct";
import useCategories from "../../shared/hooks/useCategory";

interface Props {
  onSave: (updatedProduct: Product) => void;
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductList = ({ products, onDelete, onSave }: Props) => {
  const { data } = useCategories();
  const [currentProduct, setCurrentProduct] = useState<Product>({
    id: 0,
    price: 0,
    name: "",
    image: "",
    gender: "",
    description: "",
    categoryId: 0,
  });
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);

  const handleSave = (updatedProduct: Product) => {
    onSave(updatedProduct);
  };

  const handleUpdate = (product: Product) => {
    setIsUpdatePopupOpen(true);
    setCurrentProduct(product);
  };

  const closeUpdatePopup = () => {
    setIsUpdatePopupOpen(false);
    setCurrentProduct({
      id: 0,
      price: 0,
      name: "",
      image: "",
      gender: "",
      description: "",
      categoryId: 0,
    });
  };

  const getCategoryName = (categoryId: number) => {
    const category = data.find((category) => category.id === categoryId);
    return category && category.name;
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>name</th>
            <th>image</th>
            <th>Description</th>
            <th>price</th>
            <th>Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <img
                  src={product.image}
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>{product.description}</td>
              <td>{product.price}</td>

              <td>{getCategoryName(product.categoryId)}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleUpdate(product)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isUpdatePopupOpen && (
        <UpdateProduct
          product={currentProduct}
          onClose={closeUpdatePopup}
          onSave={(updatedProduct) => handleSave(updatedProduct)}
        />
      )}
    </>
  );
};

export default ProductList;
