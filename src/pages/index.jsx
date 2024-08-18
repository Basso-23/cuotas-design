import React, { useState, useEffect } from "react";
import Card from "@/components/Card";

const Home = () => {
  return (
    <main className="inter">
      {/*//* Header section */}
      <section className="sm:bg-[#1778D9] bg-white h-[450px] w-full text-center text-white">
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/5INhM0k.png)",
          }}
          className="w-full h-full bg-cover bg-top bg-no-repeat flex"
        ></div>
      </section>

      <section className="pageSize sm:bg-white sm:border sm:rounded-tr-[30px] sm:rounded-tl-[30px] -mt-[150px]">
        <div className="all-cards sm:py-10 sm:mx-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <footer className="bg-white border-t mt-4">
        <div className="pageSize text-[#7d7d7d] text-sm py-4">
          Copyright © 2024 por RAENCO | Todos los derechos reservados
        </div>
      </footer>
    </main>
  );
};

export default Home;
