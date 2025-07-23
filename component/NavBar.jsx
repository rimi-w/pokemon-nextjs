import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-screen h-[100px] fixed flex flex-col justify-center items-center">
      <Link href={`/`}>
        <div className="w-screen h-[50px] bg-[#ff3434da] flex justify-center text-[30px] font-extrabold border-b-2 p-2 ">
          Pokemon
        </div>
      </Link>
      <div className="size-5 border-2 rounded-2xl absolute top-[40px]"></div>
      <div className="w-[100vw] h-[50px] flex justify-center items-center text-[20px] border-t-2 font-semibold">
        <Link href={`/favorites`}>Favorites</Link>
        {/* <div className="flex items-center gap-3">
            <input
              className="w-[150px] h-[20px] border-b-2 pl-2 text-[18px]"
              type="text"
              onChange={(e) => navigate(`/search?poke=${e.target.value}`)}
            />
            <span>🔎</span>
          </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
