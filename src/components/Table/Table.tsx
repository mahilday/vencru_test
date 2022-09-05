import React from "react";
import Input from "../Input/Input";
import styles from "./Table.module.css";

type Props = {
  tableHeader: { name: string; icon: string | boolean }[];
};
export default function Table({ tableHeader }: Props) {
  const tableBody = [
    {
      invoice: "Basic plan - Dec 2022",
      amount: 10.0,
      date: "dec 1, 2022",
      status: "paid",
      usersOnPlan: [
        {
          imgUrl: "/avatars/Avatar wrap-1.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap-2.svg",
          name: "Mathilda Imadojiemu",
        },
      ],
    },
    {
      invoice: "Basic plan - Dec 2022",
      amount: 10.0,
      date: "dec 1, 2022",
      status: "paid",
      usersOnPlan: [
        {
          imgUrl: "/avatars/Avatar wrap-2.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap-3.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap-2.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap.svg",
          name: "Mathilda Imadojiemu",
        },
      ],
    },
    {
      invoice: "Basic plan - Dec 2022",
      amount: 10.0,
      date: "dec 1, 2022",
      status: "paid",
      usersOnPlan: [
        {
          imgUrl: "/avatars/Avatar wrap-2.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap-3.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap-2.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap-2.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap.svg",
          name: "Mathilda Imadojiemu",
        },
        {
          imgUrl: "/avatars/Avatar wrap-2.svg",
          name: "Mathilda Imadojiemu",
        },
      ],
    },
  ];
  const sliceAndCount = (array: any[], startIndex: number) => {
    let data = array.slice(startIndex, array.length - 1);
    return data.length;
  };
  return (
    <div className="overflow-auto xl:relative z-0  tiny_scrollbar">
      <table className="w-full text-sm text-left text-gray-500 border border-gray-200 shadow-md bg-white rounded-lg ">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="py-6 px-3">
              <Input type="checkbox" />
            </th>
            {tableHeader?.map(
              (
                item: { name: string; icon: string | boolean },
                index: number
              ) => (
                <th
                  key={index + item.name}
                  scope="col"
                  className="capitalize text-xs py-6 px-3 font-medium text-gray-500"
                >
                  <div className="flex items-center">
                    {item.name}
                    {item.icon !== false ? (
                      <img
                        src={`/icons/${item.icon}.svg`}
                        alt={item.name}
                        className="w-3 h-3"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {tableBody?.map((item: any, index: number) => (
            <tr key={index} className="bg-white border-b">
              <th
                scope="row"
                className="py-6 px-3 font-medium text-gray-900 whitespace-nowrap"
              >
                <Input type="checkbox" />
              </th>
              <td className="py-6 px-3">{item.invoice}</td>
              <td className="py-6 px-3">USD ${item.amount}</td>
              <td className="py-6 px-3 capitalize">{item.date}</td>
              <td
                className={`py-6 px-3 capitalize`}
              >
                <div className={`${
                  item.status === "paid" ? styles.success : styles.fail
                } flex justify-center items-center`}>
                    <span className="mr-1"><img src="/icons/check.svg" alt="check" /></span>{item.status}</div>
              </td>
              <td className="py-6 px-3">
                <div className="flex">
                  {item.usersOnPlan?.map(
                    (item: { imgUrl: string; name: string }, index: number) => (
                      <span
                        key={item.name + index}
                        className={`${index !== 0 ? "-ml-2" : ""} ${
                          index >= 4 ? "hidden" : ""
                        }`}
                      >
                        <img src={item.imgUrl} alt={item.name} />
                      </span>
                    )
                  )}
                  <span
                    className={`${
                      item.usersOnPlan.length > 4
                        ? "bg-white w-6 h-6 rounded-full -ml-2 flex items-center justify-center " +
                          styles.extraAvatar
                        : "hidden"
                    }`}
                  >
                    +{sliceAndCount(item.usersOnPlan, 4)}
                  </span>
                </div>
              </td>
              <td className="py-6 px-3">
                <img src="/icons/download-cloud.svg" alt="download" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
