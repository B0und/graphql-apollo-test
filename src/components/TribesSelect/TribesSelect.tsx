import styled from "styled-components";
import { useFilterActions, useFilterStore, useSelectedTribe } from "../../store";
import { useGetAllTribesQuery } from "./__generated__/getAllTribes";

const TribesSelect = () => {
  const selectedTribe = useSelectedTribe();
  const { setSelectedTribe } = useFilterActions();
  const { data } = useGetAllTribesQuery();

  return (
    <Select
      value={selectedTribe}
      onChange={(e) => {
        setSelectedTribe(e.target.value);
      }}
    >
      {data?.allTribes?.map((tribe) => (
        <option value={tribe?.id} key={tribe?.id}>
          {tribe?.title}
        </option>
      ))}
    </Select>
  );
};

export const Select = styled.select`
  width: 150px;
  height: 32px;
  font-size: 1rem;
`;

export default TribesSelect;
