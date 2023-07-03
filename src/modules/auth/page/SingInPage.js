import React from "react";

function FormGroup({ signPage, children, onSubmit }) {
  return (
    <div>
      {signPage === "sigin" ? (
        <form action="" onSubmit={onSubmit} className="block mb-5">
          <div>
            <label htmlFor="fullname" className="flex items-start py-2">
              Full name *
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              className="border border-strock rounded-lg outline-none w-full px-6 py-4"
              placeholder="Tran Van A"
            />
          </div>

          <div>
            <label htmlFor="email" className="flex items-start mt-5 py-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="Email"
              className="border w-full px-6 py-4 border border-strock rounded-lg outline-none"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="flex items-start mt-5 py-2">
              Password *
            </label>
            <input
              id="password"
              name="password"
              type="text"
              className="border w-full px-6 py-4 border border-strock rounded-lg outline-none"
              placeholder="create a password"
            />
          </div>

          <div className="inline-flex items-start flex-row gap-2 mt-5">
            <span>
              <input type="checkbox" id="temps" className="text-primary" />
            </span>
            <label className="text-left text-text3">
              I agree to the{" "}
              <span className="underline cursor-pointer">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline cursor-pointer">Privacy policy.</span>
            </label>
          </div>
        </form>
      ) : (
        <form className="block mb-5" onSubmit={onSubmit}>
          <div>
            <label htmlFor="password" className="flex items-start mt-5 py-2">
              Email *
            </label>
            <input
              id="password"
              name="email"
              type="email"
              className="border w-full px-6 py-4"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="flex items-start mt-5 py-2">
              Password *
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border w-full px-6 py-4"
              placeholder="create a password"
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default FormGroup;
