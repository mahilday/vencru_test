import React from "react";
import { last4Nums } from "../../utils";

type Props = {
  item: {
    imgUrl: string;
    name: string;
    expiryDate: string;
    cardNumber: number;
  };
};

export default function BankCard({ item }: Props) {
  return (
    <div className="text-sm flex border border-gray-200 bg-white p-3 rounded-lg mb-2">
      <div className="mr-4">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div>
        <div>
          <h4>
            <span className="capitalize text-gray-700 font-medium">{item.name}</span> ending in{" "}
            {last4Nums(item.cardNumber)}
          </h4>
          <p className="text-gray-500">Expiry {item.expiryDate}</p>
        </div>
        <div className="mt-2">
          <button className="text-gray-500 font-medium mr-5">Set as default</button>
          <button className="text-vencru_purple font-medium text-sm">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
