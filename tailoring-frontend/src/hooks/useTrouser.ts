import useData from "./useData";
export interface Trouser {
  id: number;
  waist: number;
  hips: number;
  thigh: number;
  Kneel: number;
  leg_opening: number;
  height: number;
  description: string;
  userId: number;
}

const useTrouser = () =>
  useData<Trouser>(`/trousers`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useTrouser;
