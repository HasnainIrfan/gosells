"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://goSellJSLib.b-cdn.net/v2.0.0/js/gosell.js";
    script.async = true;
    script.onload = () => {
      console.log("goSell script loaded");
      goSell.showResult({
        callback: (response) => {
          console.log("redirect 201", response);
        },
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return <div>I am Your Page</div>;
};

export default page;
