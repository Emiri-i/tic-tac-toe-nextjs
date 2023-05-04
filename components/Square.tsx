import dynamic from "next/dynamic";

type Props = {
  value: string | null;
  winner: string | null;
  onClick: () => void;
};
dynamic(() => import("./Square"), {
  ssr: false,
});

const Square: React.FC<Props> = ({ value, winner, onClick }) => {
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button className={`square square_${value.toLowerCase()}`} disabled>
      {value}
    </button>
  );
};

export default Square;
