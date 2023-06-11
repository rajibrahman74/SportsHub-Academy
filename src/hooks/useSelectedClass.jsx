import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: selectedclass = [], refetch } = useQuery({
    queryKey: ["selectedclass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/selectedclass?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedclass, refetch];
};

export default useSelectedClass;