import styled from "styled-components";
import { device } from "../../styles/devices";

export const HeaderSite = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--color-white-background);
  box-shadow: 0px 6px 8px -9px rgba(0, 0, 0, 0.6);

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const DivSearch = styled.div`
  display: inline-block;
  margin-top: 1.5rem;
  align-items: center;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const InputSearch = styled.input`
  border-style: none;
  border: 3px solid var(--color-grey-29);
  border-radius: 8px;
  padding: 0.8rem;
  color: var(--color-grey-100);
  outline: none;
  transition: 0.4s;

  &:hover {
    border: 3px solid var(--color-primary);
  }

  &::placeholder {
    color: var(--color-grey-50);
  }
`;

export const ButtonSearch = styled.button`
  border-style: none;
  border-radius: var(--btn-border);
  padding: 0.8rem 0.8rem;
  cursor: pointer;

  margin-top: 10px;
  background-color: var(--color-primary);
  color: var(--color-white);
  transition: 0.4s;

  &:hover {
    background-color: var(--color-primary-50);
    color: var(--color-white);
  }
`;
