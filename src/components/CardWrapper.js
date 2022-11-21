import MemoryCard from "./MemoryCard";

import React from "react";

export default function CardWrapper({ cardNumber }) {
  return (
    <div className="card-wrapper">
      {[...Array(Number(cardNumber))].map((_numb, index) => {
        index += 1;

        return <MemoryCard />;
      })}
    </div>
  );
}
