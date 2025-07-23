import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="w-[100vw] h-[calc(100vh-150px)] flex flex-col justify-center items-center">
          <h1 className="text-[30px] text-[#ff4646] pb-12">
            404 | 페이지가 없습니다.
          </h1>
          <div className="flex justify-center items-center relative">
            <Link
              href={`/`}
              className="w-72 h-10 rounded-md text-[20px] bg-[#989898] shadow-[inset_0_0_20px_#000000] flex justify-center items-center"
            >
              {`<=`} 메인 페이지로 돌아가기
            </Link>
            <div className="w-[270px] h-[28px] bg-[#ffffff4d] absolute top-[6px]"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
