import Image from "next/image";

import "@/styles/globals.css";

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div
          className="w-screen h-screen absolute"
          style={{
            background: "url(/images/membership-background.jpg)",
            zIndex: -1,
          }}
        ></div>
        <div className="w-screen h-screen z-10 flex items-center justify-center">
          <div className="border-8 bg-white border-gray-100 rounded-sm w-4/12 p-12">
            <div className="flex mb-4 items-center">
              <Image alt="Logo" width={60} height={60} src="/favicon.ico" />
              <h1 className="text-2xl ml-4">QR Menü Yönetim Paneli</h1>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
