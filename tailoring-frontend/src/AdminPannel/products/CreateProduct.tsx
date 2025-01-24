import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import useCategories from "../../shared/hooks/useCategory";
import "../popup.css";

const schema = z.object({
  price: z.number({ invalid_type_error: "price field is required" }),
  name: z.string().min(3, { message: "Name must be atleast 3 characters." }),
  imageUrl: z
    .string()
    .min(10, { message: "image url must be atleaast 10 characters" }),
  gender: z.string().min(4, { message: "Gender must be atleast 4 characters" }),
  description: z
    .string()
    .min(10, { message: "description must be atleast 10 characters" }),
  categoryId: z.number({ invalid_type_error: "category id field is required" }),
});

export type formData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onSave: (data: formData) => void;
}

const CreateProduct = ({ onClose, onSave }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });
  const { data } = useCategories();

  const handleSave: SubmitHandler<formData> = (data) => {
    onSave(data);
    onClose();
  };

  return (
    <div className="popup-overlay ">
      <div className="popup-content">
        <form onSubmit={handleSubmit(handleSave)}>
          <h2>Create products</h2>

          <div className="mb-3">
            <label htmlFor="name" className="from-label">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="form-control"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="from-label">
              Price
            </label>
            <input
              {...register("price", { valueAsNumber: true })}
              id="price"
              type="number"
              className="form-control"
            />
            {errors.price && (
              <p className="text-danger">{errors.price.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="from-label">
              Image Url
            </label>
            <input
              {...register("imageUrl")}
              id="imageUrl"
              type="text"
              className="form-control"
            />
            {errors.imageUrl && (
              <p className="text-danger">{errors.imageUrl.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="categoryId" className="from-label">
              Category Id
            </label>
            <select
              className="form-select"
              {...register("categoryId", { valueAsNumber: true })}
            >
              <option value="">Select category</option>
              {data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <p className="text-danger">{errors.categoryId.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="from-label">
              Description
            </label>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="from-label">
              Gender
            </label>
            <select className="form-select" {...register("gender")}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-danger">{errors.gender.message}</p>
            )}
          </div>

          <div className="d-flex justify-content-between">
            <Button
              marginRight="40x"
              fontSize="xl"
              colorScheme="blue"
              type="submit"
            >
              save
            </Button>
            <Button
              fontSize="xl"
              colorScheme="blue"
              className="close-button"
              onClick={() => onClose()}
            >
              close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
