import { Logo } from "../logo";
import { ButtonSearch, DivSearch, HeaderSite, InputSearch } from "./style.js";

export const Header = ({ setFilter }) => {
  return (
    <HeaderSite>
      <Logo />
      <DivSearch>
        <InputSearch
          placeholder="Pesquise..."
          onChange={(event) => setFilter(event.target.value)}
        />
        <ButtonSearch>Pesquisar</ButtonSearch>
      </DivSearch>
    </HeaderSite>
  );
};
