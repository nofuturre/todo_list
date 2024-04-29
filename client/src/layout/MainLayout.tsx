import { Navbar } from "../components/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="mt-4 container mx-auto">{children}</div>
    </div>
  );
};
