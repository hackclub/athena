import { ReactNode } from "react";

export default function Background({ children }: { children?: ReactNode }) {
  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
}
