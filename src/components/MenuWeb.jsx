import React, { useState, useEffect } from "react";

const MenuWeb = () => {

  const [showDiv, setShowDiv] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }

    // if (window.scrollY >= window.innerHeight && window.scrollY <= 2 * window.innerHeight) {
    //   setActiveSection("mempelai");
    // } 
    // else if (window.scrollY > 2 * window.innerHeight && window.scrollY <= 3 * window.innerHeight) {
    //   setActiveSection("alamat");
    // } 
    // else if (window.scrollY > 3 * window.innerHeight && window.scrollY <= 4 * window.innerHeight) {
    //   setActiveSection("doa");
    // } else if (window.scrollY > 4 * window.innerHeight) {
    //   setActiveSection("thanks");
    // }
    const mempelaiPos = document.getElementById("mempelai").getBoundingClientRect();
    const alamatPos = document.getElementById("alamat").getBoundingClientRect();
    const doaPos = document.getElementById("doa").getBoundingClientRect();
    const thanksPos = document.getElementById("thanks").getBoundingClientRect();

    if (mempelaiPos.top >= 0 && mempelaiPos.bottom <= window.innerHeight) {
      setActiveSection("mempelai");
    } else if (alamatPos.top >= 0 && alamatPos.bottom <= window.innerHeight) {
      setActiveSection("alamat");
    } else if (doaPos.top >= 0 && doaPos.bottom <= window.innerHeight) {
      setActiveSection("doa");
    } else if (thanksPos.top >= 0 && thanksPos.bottom <= window.innerHeight) {
      setActiveSection("thanks");
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-3 box-border">
      {showDiv && (
        <div className="hidden-div flex justify-center mx-3 px-3 box-border" >
          <div className="max-xs:w-screen w-[500px] z-20 fixed bg-menu bottom-2 py-1 mx-2  h-[56px] grid-cols-4 grid gap-2 p-2" style={{ fontSize: "12pt" }}>
            <button onClick={() => scrollToSection("mempelai")} className={activeSection === "mempelai" ? "active-menu" : ""}>
              <div className="flex justify-center items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[11px]">Mempelai</span>
              </div>
            </button>
            <button onClick={() => scrollToSection("alamat")} className={activeSection === "alamat" ? "active-menu" : ""}>
              <div className="flex justify-center items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-[11px]">Alamat</span>
              </div>
            </button>
            <button onClick={() => scrollToSection("doa")} className={activeSection === "doa" ? "active-menu" : ""}>
              <div className="flex justify-center items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <span className="text-[11px]">Doa</span>
              </div>
            </button>
            <button onClick={() => scrollToSection("thanks")} className={activeSection === "thanks" ? "active-menu" : ""}>
              <div className="flex justify-center items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span className="text-[11px]">Terima Kasih</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuWeb;
