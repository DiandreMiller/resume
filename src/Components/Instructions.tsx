import React from "react";

interface InstructionProps {
  directions: string[];
}

const Instructions: React.FC<InstructionProps> = ({ directions }) => {
  return (
    <div className="relative overflow-hidden inline-block border-r-2 border-black whitespace-nowrap">
      {directions.map((direction, index) => {
        const lengthOfDirection = direction.length;
        const typingStyle: React.CSSProperties = {
          width: `${lengthOfDirection}ch`,
          animation: `typing 3s steps(${lengthOfDirection}) forwards`,
        };

        return (
          <h5 key={index} className="inline-block" style={typingStyle}>
            {direction}
          </h5>
        );
      })}
    </div>
  );
};

// export { Instructions };

export default Instructions;

