import StoreProvider from "@/Providers/StoreProvider";



const Providers = ({ children }) => { 
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
