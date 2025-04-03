import useData from "./useData";

interface Shirt {
  id: number;
  sleeve_length: number;
  collar: number;
  chest: number;
  front_length: number;
  description: String;
  userId: number;
}

const useShirt = () =>
  useData<Shirt>(`/shirts`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export default useShirt;
