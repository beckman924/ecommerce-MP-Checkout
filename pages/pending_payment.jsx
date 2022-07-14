import React from "react";
import { useRouter } from "next/router";
import { CreditCard } from "@styled-icons/bootstrap/CreditCard";
import { Exclamation } from "@styled-icons/bootstrap/Exclamation";

function Pending_payment() {
  const router = useRouter();
  const { payment_id, external_reference, payment_type } = router.query;

  return (
    <div className="overflow-hidden grid grid-flow-row grid-rows-2">
      <div className="bg-[#FF7733] h-[35vh]">
        <div className="h-[52vh] grid place-content-center gap-5">
          <div className="flex flex-col items-center gap-2 mt-8">
            <span className="flex relative">
              <div className="bg-white rounded-full">
                <CreditCard className="w-[7rem] p-7 text-[#FF7733]" />
              </div>
              <Exclamation className="absolute p-1 w-10 bottom-0 right-[-0.5rem] text-white bg-[#E6540B] rounded-full" />
            </span>
            <h1 className="font-medium text-white text-2xl text-center">
              {payment_type === "credit_card"
                ? "Estamos procesando tu pago"
                : payment_type === "ticket"
                ? "Estamos esperando la confirmación de pago"
                : payment_type}
            </h1>
            <h3 className="text-[#F2FAF6]">Operación: {payment_id}</h3>
          </div>

          <div className="z-10 grid place-content-center gap-3">
            <div className="shadow-2xl rounded-md ring-1 ring-gray-200 w-[22rem] h-[10rem] bg-[#FFFFFF] flex flex-col justify-center items-center">
              <h2 className="font-bold text-center">
                {payment_type === "credit_card"
                  ? "Te avisaremos en unas horas si se concreta el pago"
                  : payment_type === "ticket"
                  ? "Te avisaremos cuando se apruebe el pago"
                  : payment_type}
              </h2>
              <h2 className="font-medium">Email comprador:</h2>
              <h3 className="font-extralight">{external_reference}</h3>
              <h2 className="font-medium">Intentaste pagar con:</h2>
              <h3 className="font-extralight">
                {payment_type === "credit_card"
                  ? "Tarjeta de crédito"
                  : payment_type === "ticket"
                  ? "Rapipago o Pago Fácil"
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

export default Pending_payment;
