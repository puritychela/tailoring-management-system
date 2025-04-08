import useData from "./useData";

export interface skirt {
  id: number;
  waist: number;
  hips: number;
  skirt_length: number;
  description: string;
  userId: number;
}

const useSkirt = () =>
  useData<skirt>(`/skirts`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useSkirt;
