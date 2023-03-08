import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useGetAllTribesQuery } from "./__generated__/getAllTribes";

function App() {
  const { data } = useGetAllTribesQuery();

  return <div>{JSON.stringify(data?.allTribes)}</div>;
}

export default App;
