import Link from "next/link";

function page() {
  return (
    <>
      <h1 className=" text-center m-1 text-4xl font-bold">TaskShift</h1>
      <p className="font-semibold text-2xl m-2">
        The easiest way to <span className="bg-blue-800">manage tasks.</span>
      </p>
      <Link href="/manage">
        <button className="p-1 w-35 h-18 hover:bg-green-700 m-2 text-center rounded-lg bg-green-600">
          Manage Tasks
        </button>
      </Link>
    </>
  );
}

export default page;
