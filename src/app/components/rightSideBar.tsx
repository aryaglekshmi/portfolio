"use client";
import React from "react";
import Socials from "./socials";

function RightSideBar() {

  return (
    <div className="fixed right-1 flex flex-col justify-between items-center h-full p-2">
        <div className="flex-1 flex items-end pb-20">
          <Socials column={true} />
        </div>
    </div>
  );
}

export default RightSideBar;
