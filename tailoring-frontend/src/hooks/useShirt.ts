import useData from "./useData";

export interface shirt {
  id: number;
  sleeve_length: number;
  collar: number;
  chest: number;
  waist: number;
  front_length: number;
  description: string;
  userId: number;
}

const useShirt = () =>
  useData<shirt>(`/shirts`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export default useShirt;
