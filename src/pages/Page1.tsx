import styled from "styled-components";
import Filter from "../components/Filter";
import TeamsSelect from "../components/TeamsSelect/TeamsSelect";
import TribesSelect from "../components/TribesSelect/TribesSelect";

const Page1 = () => {
  return (
    <Wrapper>
      Page1
    <Filter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Page1;
