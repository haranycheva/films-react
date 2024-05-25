import styled from "styled-components";

import { BounceLoader } from "react-spinners";

const LoaderWrapp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Loader = () => {
  return (
    <LoaderWrapp>
      <BounceLoader color="#e71d36" />
    </LoaderWrapp>
  );
};
