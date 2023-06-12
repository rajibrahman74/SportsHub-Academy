import { useQuery } from "@tanstack/react-query";

const useData = () => {
  const {
    data: data = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(
        "https://sports-hub-academy-server.vercel.app/alldata"
      );
      return res.json();
    },
  });

  return [data, loading, refetch];
};

export default useData;
