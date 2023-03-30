"use client";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [goSellLoaded, setGoSellLoaded] = useState(false);

  useEffect(() => {
    setGoSellLoaded(false);
    const script = document.createElement("script");
    script.src = "https://goSellJSLib.b-cdn.net/v2.0.0/js/gosell.js";
    script.async = true;
    script.onload = () => {
      setGoSellLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  const handleSave = () => {
    if (goSellLoaded) {
      goSell.config({
        gateway: {
          publicKey: "pk_test_Vlk842B1EA7tDN5QbrfGjYzh",
          merchant_id: "1124340",
          language: "en",
          contactInfo: false,
          supportedCurrencies: "all",
          supportedPaymentMethods: "all",
          saveCardOption: true,
          customerCards: true,
          notifications: "standard",
          callback: (response) => {
            console.log("callback", response);
          },
          onClose: (response) => {
            console.log("onclose hey", response);
          },
          onLoad: (response) => {
            console.log("onLoad", response);
            goSell.openLightBox();
          },
          style: {
            base: {
              color: "red",
              lineHeight: "10px",
              fontFamily: "sans-serif",
              fontSmoothing: "antialiased",
              fontSize: "10px",
              "::placeholder": {
                color: "rgba(0, 0, 0, 0.26)",
                fontSize: "10px",
              },
            },
            invalid: {
              color: "red",
              iconColor: "#fa755a ",
            },
          },
        },
        customer: {
          first_name: "hala",
          middle_name: "",
          last_name: "",
          email: "test@test.com",
          phone: {
            country_code: "+965",
            number: "00000000",
          },
        },
        order: {
          amount: document.getElementById("amount").value,
          currency: "SAR",
          items: [
            {
              id: 0,
              name: "Item ",
              description: "Item Desc 0",
              old_quantity: 1,
              quantity: 1,
              amount_per_unit: 0,
              old_total_amount: 0,
              total_amount: 10,
            },
          ],
        },
        transaction: {
          mode: "charge",
          charge: {
            auto: {
              time: 100,
              type: "VOID",
            },
            saveCard: false,
            threeDSecure: true,
            description: "description",
            statement_descriptor: "statement_descriptor",
            reference: {
              transaction: "txn_0001",
              order: "ord_0001",
            },
            metadata: {},
            receipt: {
              email: false,
              sms: true,
            },
            redirect: "http://localhost:3000/payment",
            post: null,
          },
        },
      });
    }
  };

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://goSellJSLib.b-cdn.net/v2.0.0/imgs/tap-favicon.ico"
          // integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          href="https://goSellJSLib.b-cdn.net/v2.0.0/css/gosell.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div id="root"></div>
      <input type="number" id="amount" name="amount" />
      <button onClick={handleSave}>Checkouts</button>
    </>
  );
}
