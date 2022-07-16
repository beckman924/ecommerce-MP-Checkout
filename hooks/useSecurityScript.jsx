import { useEffect } from "react";

const useSecurityScript = (view) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.mercadopago.com/v2/security.js";
    script.view = view;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [view]);
};

export default useSecurityScript;
