import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import style from "../styles/index.module.css";
const { data } = require("../data/smartphones.json");

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Ecommerce Template</title>
        <meta name="description" content="Ecommerce Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.homeCards}>
        {data.map((e) => {
          return (
            <div
              className="flex justify-center transition-all p-2 cursor-pointer"
              key={e.id}
              onClick={() =>
                router.push({
                  pathname: "[id]",
                  query: { id: e.id },
                })
              }
            >
              <div className="rounded-lg shadow-lg max-w-sm">
                <Image
                  src={e.img}
                  width={400}
                  height={500}
                  objectFit="cover"
                  priority
                  alt="smartphone"
                  className="rounded-t-lg"
                />
                <div className="bg-slate-500 p-6 rounded-b-lg">
                  <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">
                    {e.title}
                  </h5>
                  <p className="text-gray-700 text-base text-center">
                    {Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(e.price)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
