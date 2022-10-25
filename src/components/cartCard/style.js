import styled from "styled-components";
import { device } from "../../styles/devices";

export const Card = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 8px;
  transition: 0.4s;
  border: 2px solid var(--color-grey-29);

  &:hover {
    border: 2px solid var(--color-primary);
  }
`;

export const ImgCard = styled.img`
  width: 4rem;
  background-color: var(--color-white-background);
  border-radius: 8px;
`;

export const TitleProduct = styled.h3`
  font-weight: 700;
  font-size: 15px;
  color: var(--color-grey-100);
`;

export const DivNameDelCat = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  .icon-delete {
    position: absolute;
    left: 85%;
    font-size: 18px;
    color: var(--color-grey-100);
    transition: 0.4s;
    cursor: pointer;

    @media ${device.laptopL} {
      left: 95%;
    }

    &:hover {
      color: var(--color-negative);
    }
  }
`;

export const Category = styled.p`
  color: var(--color-grey-50);
  font-size: 11px;
`;

export const DivNameDel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 0.5rem;
`;
