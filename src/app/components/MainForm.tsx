const radio_options = [
  { id: "instant", label: "Instant Online Estimate", value: "instant" },
  { id: "inhome", label: "In-Home Move Estimate", value: "inhome" },
  { id: "callback", label: "Request a call back", value: "callback" },
];

export default function Mainform() {
  return (
    <div
      className="z-10 max-w-[600px] min-w-[200px] w-[300px] 
    lg:w-[550px]
    xl:w-[400px]
    mx-auto lg:mx-0 xl:mx-auto bg-white rounded-2xl p-6 shadow-md"
    >
      <h2 className="text-center text-xl font-semibold mb-4 lg:hidden xl:block">
        <span>Get a Moving </span>
        <span className="text-primary">Quote</span>
      </h2>

      <form action="#" className="flex min-w-[200px]  flex-col gap-4">
        <div>
          <label htmlFor="fullname" className="block text-sm mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="w-full border border-[--color-primary] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[--color-primary]"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[--color-primary]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[--color-primary]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[--color-primary]"
          />
        </div>

        <div className="mt-2 flex flex-col gap-3">
          {radio_options.map((opt) => (
            <label
              key={opt.id}
              htmlFor={opt.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="estimate"
                id={opt.id}
                value={opt.value}
                className="accent-primary focus:ring-blue-500"
                defaultChecked={opt.id === "instant"}
              />
              <span className="text-black">{opt.label}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md mt-4 hover:opacity-90 transition"
        >
          Proceed
        </button>
      </form>
    </div>
  );
}
