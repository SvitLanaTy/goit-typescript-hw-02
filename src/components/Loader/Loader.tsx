import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#26c3dfda"
      ariaLabel="circles-loading"
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
