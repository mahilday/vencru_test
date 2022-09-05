import React from "react";

export default function Card() {
  return (
    <div className="bg-vencru_bg_dark pl-3 pr-2 py-2 rounded-xl">
      <section>
        <div className="my-2">
          <h4 className="font-semibold text-sm">New features available!</h4>
          <p className="text-sm mt-2 text-gray-500">Check out the new dashboard, pages load faster</p>
        </div>
        <img src="/images/g_image.jpg" alt="ad"  className=" w-full"/>
        <div className="flex justify-between text-sm w-10/12 mt-2 font-medium">
            <button className="text-gray-500">Dismiss</button>
            <button className="text-vencru_purple">What's new?</button>
        </div>
      </section>
    </div>
  );
}
