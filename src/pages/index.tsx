import { Button } from "@/components/ui/button";
import { PageConfig, PageProps, useAuth } from "@atsnek/jaen";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import logo from "../images/logo.svg";

const IndexPage: React.FC<PageProps> = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="space-y-4">
      <div className="m-2 flex flex-col space-y-4 overflow-hidden xl:m-0 xl:h-dvh xl:flex-row xl:space-y-0">
        <a
          href="https://ferlach.agt-guntrade.at"
          className="relative isolate order-2 flex h-96 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl transition-all duration-300 ease-in-out xl:order-1 xl:m-4 xl:mr-auto xl:h-auto xl:w-2/5 xl:hover:scale-110"
        >
          <StaticImage
            src="../images/ferlach.jpg"
            alt="Left Image"
            className="h-full max-w-full object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gray-700 opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h2 className="mb-2 scale-100 transform text-3xl font-bold text-white transition-transform">
              Filiale <span className="text-red-500">Ferlach</span>
            </h2>
            <h2 className="mb-2 scale-100 transform text-center text-2xl font-bold text-white transition-transform">
              (Ehemalig Waffenhandel Türk)
            </h2>

            <p className="mb-4 text-white">Reßnig 20, 9170 Ferlach</p>
            <Button className="bg-red-500" size="lg">
              Zur Filiale
            </Button>
          </div>
        </a>
        <div className="z-10 order-1 flex w-full flex-1 flex-col items-center justify-center bg-white xl:order-2 xl:p-8">
          <img
            src={logo}
            alt="AGT Guntrade Logo"
            className="mb-4 h-auto object-contain sm:max-w-xs"
          />
          <div className="bottom-0 hidden p-4 xl:absolute xl:block">
            <a
              href="https://firmen.wko.at/agt-gun-trade-gmbh/k%C3%A4rnten/?firmaid=81376d08-4dbd-49e3-ade0-adb6684ef336"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 underline"
            >
              Impressum
            </a>
          </div>
        </div>
        <a
          //href="https://ried.agt-guntrade.at"
          href="#"
          className="pointer-event-none relative isolate order-3 flex h-96 w-full cursor-not-allowed items-center justify-center overflow-hidden rounded-xl transition-all duration-300 ease-in-out xl:order-3 xl:m-4 xl:ml-auto xl:h-auto xl:w-2/5 xl:hover:scale-110"
        >
          <StaticImage
            src="../images/ried.jpg"
            alt="Right Image"
            className="h-full max-w-full object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gray-700 opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h2 className="mb-2 scale-100 transform text-3xl font-bold text-white transition-transform">
              Filiale <span className="text-red-500">Ried</span>
            </h2>
            <h2 className="mb-2 scale-100 transform text-center text-2xl font-bold text-white transition-transform">
              (Ab dem 10. April 2024 auch online verfügbar)
            </h2>
            <p className="mb-4 text-white">
              Wildfellnerstraße 22, 4910 Ried im Innkreis
            </p>
            <Button className="cursor-not-allowed bg-red-500" size="lg">
              Zur Filiale
            </Button>
          </div>
        </a>
      </div>
      <div className="order-4 w-full p-4 text-left xl:hidden">
        <a
          href="https://firmen.wko.at/agt-gun-trade-gmbh/k%C3%A4rnten/?firmaid=81376d08-4dbd-49e3-ade0-adb6684ef336"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-blue-500 underline"
        >
          Impressum
        </a>
      </div>
    </div>
  );
};

export default IndexPage;

export { Head } from "@atsnek/jaen";

export const pageConfig: PageConfig = {
  label: "AGT Gun Trade",
};
