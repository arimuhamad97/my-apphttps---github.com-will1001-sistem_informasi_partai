import React from "react";

function Button({ icon, title, w, h }) {
  return (
    <button>
      <div className={`flex bg-slate-700 justify-center items-center rounded-sm gap-2 w-${w} h-${h}`}>
        <span>{icon}</span>
        <p className="font-semibold text-[26px] text-white">{title}</p>
      </div>
    </button>
  );
}

export default Button;
