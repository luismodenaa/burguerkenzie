import loading from "../../assets/loading.svg";
import { DivLoading, ImgLoader } from "./style";

export const Loading = () => {
  return (
    <DivLoading>
      <ImgLoader src={loading} />
    </DivLoading>
  );
};
