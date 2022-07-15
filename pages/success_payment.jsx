import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ShoppingBag } from "@styled-icons/heroicons-outline/ShoppingBag";
import { Checkmark } from "@styled-icons/evaicons-solid/Checkmark";

function Success_payment() {
  useEffect(() => {
    const getBuyResponse = async () => {
      const data = await axios.get("/api/notifications");
      console.log(data);
    };
    getBuyResponse();
  }, []);

  const router = useRouter();
  const { payment_id, external_reference, payment_type } = router.query;

  return (
    <div className="overflow-hidden grid grid-flow-row grid-rows-2">
      <div className="bg-[#00A650] h-[35vh]">
        <div className="h-[52vh] grid place-content-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <span className="flex relative">
              <ShoppingBag className="w-[7rem] p-6 text-[#00A650] bg-white rounded-full" />
              <Checkmark className="absolute p-1 w-10 bottom-0 right-[-0.5rem] text-white bg-[#0D895C] rounded-full" />
            </span>
            <h1 className="font-medium text-white text-2xl">
              Se acreditó tu pago
            </h1>
            <h3 className="text-[#F2FAF6]">Operación: {payment_id}</h3>
          </div>

          <div className="z-10 grid place-content-center gap-3">
            <div className="shadow-2xl rounded-md ring-1 ring-gray-200 w-[20rem] h-[7rem] bg-[#FFFFFF] flex flex-col justify-center items-center">
              <h2 className="font-medium">Email comprador:</h2>
              <h3 className="font-extralight">{external_reference}</h3>
              <h2 className="font-medium">Pagaste con:</h2>
              <h3 className="font-extralight">
                {payment_type === "credit_card"
                  ? "Tarjeta de crédito"
                  : payment_type}
              </h3>
            </div>
            <button
              className="bg-[#009EE3] rounded-md text-white font-medium py-2 transition-all active:scale-90"
              onClick={() => router.push("/")}
            >
              Volver al sitio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success_payment;
