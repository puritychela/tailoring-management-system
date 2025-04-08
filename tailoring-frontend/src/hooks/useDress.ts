import useData from "./useData";
export interface dress {
  id: number;
  hips: number;
  waist: number;
  bust: number;
  full_length: number;
  shoulder: number;
  sleeve_length: number;
  description: string;
  userId: number;
}

const useDress = () =>
  useData<dress>(`/dresses`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useDress;
