// @ts-check
import React from "react";
import { COVER_IMAGE } from "../constants/constant";

const NotFound = () => {
  return (
    <>
      <div className="min-h-full pt-32 sm:pt-60 pb-12 flex flex-col bg-light-50">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">Solana Sharks</span>
              <img className="h-36 w-auto" src={COVER_IMAGE} alt="" />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                404 error
              </p>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn't find the page you're looking for.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Home<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFound;
