import useData from "./useData";

interface Skirt {
  id: number;
  waist: number;
  hips: number;
  skirt_length: number;
  description: String;
  userId: number;
}

const useSkirt = () =>
  useData<Skirt>(`/skirts`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useSkirt;
