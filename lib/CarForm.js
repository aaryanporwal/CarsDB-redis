export default function CarForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target);
    // let myForm = document.getElementById(e.target);
    const form = new FormData(e.target);
    // console.log(form);

    const formData = Object.fromEntries(form.entries());
    console.log("formdata->", formData);

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-fuchsia-500 py-8 px-6 shadow rounded-lg sm:px-10 ">
        <form id="car-form" className="mb-0 space-y-1" onSubmit={handleSubmit}>
          <div>
            <label forhtml="make" className="block font-medium text-gray-700">
              Make
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              name="make"
              type="text"
            />
          </div>
          <div>
            <label forhtml="model" className="block font-medium text-gray-700">
              Model
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              name="model"
              type="text"
            />
          </div>
          <div>
            <label forhtml="image" className="block font-medium text-gray-700">
              Image
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              name="image"
              type="url"
            />
          </div>
          <div>
            <label
              forhtml="description"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              name="description"
            ></textarea>
          </div>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:bg-indigo-500"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
