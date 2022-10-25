import styled from "styled-components";
import { device } from "../../styles/devices";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptopL} {
    flex-direction: row;
  }
`;
