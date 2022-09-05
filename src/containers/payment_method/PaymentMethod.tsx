import React from "react";
import BankCard from "../../components/BankCard/BankCard";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";

export default function PaymentMethod() {
  const cards =[
    {
      imgUrl: '/visa.jpg',
      name: "visa",
      expiryDate: "12/2023",
      cardNumber: 123536271827839
    },
    {
      imgUrl: '/mastercard.svg',
      name: "mastercard",
      expiryDate: "10/2025",
      cardNumber: 123536271823560
    }
  ]
  return (
    <div>
      <section className="h-28 flex flex-col justify-center border-b">
        <h3 className="text-gray-900 font-medium text-lg">Payment method</h3>
        <p className="text-gray-500 mt-1 text-sm">
          Update your billing details and address.
        </p>
      </section>
      <section className="flex h-max md:h-40 py-5 border-b">
        <div className="flex h-full xs:flex-col sm:flex-col md:flex-row w-full">
          <div className="w-full md:w-10/12 xl:w-4/12 xs:mb-5 sm:mb-5 md:mb-0">
            <h5 className="text-gray-900 font-medium text-sm">Contact email</h5>
            <p className="text-gray-500 mt-1 text-sm">
              Where should invoices be sent?
            </p>
          </div>
          <div className="w-full md:w-10/12 xl:w-8/12 h-full flex flex-col justify-between">
            <Label styles="flex">
              <Input
                type="radio"
                checkBoxStyles="w-4 h-4 inline-block mr-2 rounded-full flex-no-shrink"
                inputStyles="hidden"
              />
              <div>
                <h5 className="text-sm font-medium  text-gray-700">
                  Send to my account email
                </h5>
                <p className="text-sm text-gray-500">olivia@untitledui.com</p>
              </div>
            </Label>
            <Label styles="flex w-full">
              <Input
                type="radio"
                checkBoxStyles="w-4 h-4 inline-block mr-2 rounded-full flex-no-shrink"
                inputStyles="hidden"
              />
              <div className="w-8/12">
                <h5 className="text-sm font-medium mb-2 text-gray-700">
                  Send to an alternative email
                </h5>
                <Input
                  type="text"
                  placeholder="Email"
                  iconName="mail"
                  styles="bg-white"
                />
              </div>
            </Label>
          </div>
        </div>
      </section>
      <section className="flex py-5">
        <div className="w-full flex xs:flex-col sm:flex-col md:flex-row">
        <div className="mb-5 w-full md:w-10/12 xl:w-4/12 md:mb-0">
          <h5 className="text-gray-900 font-medium text-sm">Card details</h5>
          <p className="text-gray-500 mt-1 text-sm">
            Select default payment method
          </p>
        </div>
        <div className ="w-full md:w-10/12 xl:w-8/12">
          {cards?.map((item: any, index: number)=>(
            <BankCard key={index} item={item} />
          ))}
          <button className="text-gray-500 flex text-sm font-medium items-center"><span className="mr-1"><img className="w-4 h-4" src="/icons/plus.svg" alt="Add"/></span> Add new payment method</button>
        </div>
        </div>
      </section>
    </div>
  );
}
