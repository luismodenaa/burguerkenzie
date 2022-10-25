import styled from "styled-components";
import { device } from "../../styles/devices";

export const CartDiv = styled.div`
  background-color: var(--color-primary);
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  border-radius: 6px;
  height: 20px;
  display: flex;
  flex-direction: column;

  @media ${device.laptopL} {
    max-width: 30%;
    margin-right: 1rem;
    margin-top: 2rem;
  }
`;

export const CartTitle = styled.h3`
  color: var(--color-white);
  font-weight: 500;
  font-size: 14px;
  margin-left: 1rem;
  margin-top: 0.3rem;
`;

export const CartProductsDiv = styled.div`
  background-color: var(--color-white-background);
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const CartEmpty = styled.h3`
  text-align: center;
  font-weight: 700;
  color: var(--color-grey-100);
`;

export const CartEmptyAdd = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: var(--color-grey-50);
  font-size: 13px;
`;

export const CartTotalValue = styled.div`
  border-top: 1px solid var(--color-grey-50);
`;

export const DivTotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const TotalH3 = styled.h3`
  font-weight: 600;
  color: var(--color-grey-100);
`;

export const Value = styled.p`
  color: var(--color-grey-50);
  font-weight: 700;
`;

export const ButtonRemoveAll = styled.button`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  border-style: none;
  background-color: var(--color-grey-29);
  border-radius: var(--btn-border);
  color: var(--color-grey-50);
  font-weight: 700;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;
