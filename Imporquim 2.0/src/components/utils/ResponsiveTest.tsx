import React from "react";

type Props = {};

export default function ResponsiveTest({ }: Props) {
  return (
    <div className="my-12 border-2 border-green-500 bg-white dark:bg-neutral-700 w-full  text-red-900 dark:text-white grid text-center font-bold text-2xl">
      <div className="visible sm:invisible">XS</div>
      <div className="collapse sm:visible md:invisible">SM</div>
      <div className="collapse md:visible lg:invisible">MD</div>
      <div className="collapse lg:visible xl:invisible">LG</div>
      <div className="collapse xl:visible 2xl:invisible">XL</div>
      <div className="collapse 2xl:visible">2XL</div>
    </div>)
}
