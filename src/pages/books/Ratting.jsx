import { FaStar } from "react-icons/fa6";

const Ratting = ({ value }) => {
  return (
    <>
      {Array.from({ length: value }).map((_, idx) => (
        <FaStar key={idx} className="text-primary" />
      ))}
    </>
  );
};

export default Ratting;
