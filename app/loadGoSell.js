const loadGoSell = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://goSellJSLib.b-cdn.net/v2.0.0/js/gosell.js";
    script.async = true;
    script.onload = () => {
      resolve(window.goSell);
    };
    document.body.appendChild(script);
  });
};

export default loadGoSell;
