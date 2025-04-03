import useData from "./useData";
interface Trouser {
  id: number;
  waist: number;
  hips: number;
  thigh: number;
  Kneel: number;
  leg_opening: number;
  height: number;
  description: String;
  userId: number;
}

const useTrouser = () =>
  useData<Trouser>(`/trousers`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useTrouser;
