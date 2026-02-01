import { redirect } from "next/navigation";
import { MdSearch } from "react-icons/md";


export default function SearchBar() {
  async function searchAction(formData) {
    "use server";
    const q = (formData.get("q") || "").toString().trim();
    redirect(q ? `/shop?q=${encodeURIComponent(q)}` : "/shop");
  }

  return (
   
    <form
      action={searchAction}
      className="flex w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
    >
      <input
        name="q"
        placeholder="Search items"
        className="bg-white h-10 w-full px-4 outline-none"
      />

      <button
        type="submit"
        className="h-10 px-4 w-12 max-w-12 bg-gray-200 hover:bg-gray-300"
      >
        <MdSearch/>
      </button>
    </form>
   
  );
}
