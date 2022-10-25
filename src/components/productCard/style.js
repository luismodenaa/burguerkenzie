import styled from "styled-components";

export const Card = styled.li`
  border: 3px solid var(--color-grey-29);
  border-radius: 8px;
  transition: 0.4s;

  &:hover {
    border: 3px solid var(--color-primary);
  }
`;

export const ImgCard = styled.img`
  background-color: var(--color-white-background);
  width: 11rem;
  padding: 0 2rem;
`;

export const DivProducts = styled.div`
  padding: 1rem;
`;

export const TitleProduct = styled.h3`
  font-weight: 700;
  color: var(--color-grey-100);
  margin-bottom: 1rem;
  font-size: 19px;
`;

export const CategoryProduct = styled.p`
  font-weight: 300;
  color: var(--color-grey-50);
  font-size: 14px;
  margin-bottom: 1rem;
`;

export const PriceProduct = styled.p`
  color: var(--color-primary);
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 1rem;
`;

export const ButtonAddCart = styled.button`
  background-color: var(--color-primary);
  border-style: none;
  color: var(--color-white);
  padding: 0.9rem 1.2rem;
  border-radius: var(--btn-border);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-50);
  }
`;
