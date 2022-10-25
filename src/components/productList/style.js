import styled from "styled-components";
import { device } from "../../styles/devices";

export const List = styled.div`
  margin-top: 2rem;

  .ul-list {
    display: inline-flex;
    gap: 20px;
    margin-left: 1rem;
    width: 90%;
    overflow-x: auto;
    padding-bottom: 1rem;
    margin-right: 1rem;

    @media ${device.laptop} {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    @media ${device.laptopL} {
      justify-content: flex-start;
      max-width: 90%;
    }
  }
`;
