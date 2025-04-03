import useData from "./useData";
interface Dress {
  id: number;
  hips: number;
  waist: number;
  bust: number;
  full_length: number;
  shoulder: number;
  sleeve_length: number;
  description: String;
  userId: number;
}

const useDress = () =>
  useData<Dress>(`/dresses`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useDress;
