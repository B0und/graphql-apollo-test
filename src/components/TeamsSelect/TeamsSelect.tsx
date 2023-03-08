import { useFilterActions, useSelectedTeam, useSelectedTribe } from "../../store";
import { Select } from "../TribesSelect/TribesSelect";
import { useGetTeamsByTribeIdQuery } from "./__generated__/getTeam";

const TeamsSelect = () => {
  const selectedTribe = useSelectedTribe();
  const selectedTeam = useSelectedTeam();
  const { setSelectedTeam } = useFilterActions();

  const { data } = useGetTeamsByTribeIdQuery({ variables: { tribe_id: selectedTribe } });

  return (
    <Select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
      <option value="">Select team</option>
      {data?.Tribe?.Teams?.map((team) => (
        <option value={team?.id} key={team?.id}>
          {team?.title}
        </option>
      ))}
    </Select>
  );
};

export default TeamsSelect;
