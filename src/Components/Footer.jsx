import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl text-zinc-400 mx-auto py-8 flex justify-between gap-3 ">
        <ul className="text-sm flex gap-6">
          <li><a>Privacy Policy</a></li>
          <li><a>Cookie Policy</a></li>
          <li><a>Impressum</a></li>
          <li><a>Terms</a></li>
          <li><a>Webflow Agency</a></li>
        </ul>
        <div>
          <img
            src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
            alt="Enterprise Partner"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
