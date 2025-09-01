import TypeWriter from "./Typewriter";

interface InstructionProps {
  directions: string[];
}

const Instructions = ({ directions }: InstructionProps) => {
  return (
    <div>
      {directions.map((direction, index) => (
        <h5 key={index}>
          <TypeWriter instructions={direction} />
        </h5>
      ))}
    </div>
  );
};

export default Instructions;