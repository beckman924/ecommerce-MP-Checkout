import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
const { data } = require("../data/smartphones.json");
import axios from "axios";
import { ArrowBackCircle } from "@styled-icons/ionicons-sharp/ArrowBackCircle";
import { Spinner5 } from "@styled-icons/icomoon/Spinner5";

function Smartphone() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const { id } = router.query;
  const smartphoneData = data.filter((e) => id == e.id);

  const MercadoPago = async () => {
    const data = await axios.post("/api/payment", {
      id: smartphoneData[0].id,
      title: smartphoneData[0].title,
      uploadedImg: smartphoneData[0].uploadedImg,
      price: smartphoneData[0].price,
    });
    
    router.push(data.data.init_point);
  };

  return (
    <>
      <ArrowBackCircle
        className="w-10 ml-2 mt-2 cursor-pointer"
        onClick={() => router.push("/")}
      />

      <div className="grid place-content-center justify-center">
        {smartphoneData.map((e) => {
          return (
            <div key={e.id}>
              <div className="">
                <Image
                  src={e.img}
                  width={600}
                  height={600}
                  alt="Smartphone"
                  objectFit="contain"
                  priority
                />
              </div>
              <div className="grid place-content-center justify-center">
                <div className="grid place-content-center gap-2 py-4 w-[15rem] text-xl shadow-2xl rounded-lg ring-1 ring-gray-200 bg-gray-400 text-white">
                  <h3 className="font-medium">{e.title}</h3>
                  <h2>
                    {Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(e.price)}
                  </h2>
                  <h2>Cantidad: {e.quantity}</h2>

                  <button
                    className={
                      loader
                        ? "bg-[#009EE3] rounded-md font-medium p-2 transition-all"
                        : "bg-[#009EE3] rounded-md font-medium p-2 transition-all active:scale-90"
                    }
                    onClick={() => {
                      setLoader(true), MercadoPago();
                    }}
                    disabled={loader ? true : false}
                  >
                    {loader ? (
                      <Spinner5 className="animate-spin w-8" />
                    ) : (
                      "Pagar la compra"
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Smartphone;
