import MasterContextProvider from "./store/master-context";
import Index from "./Index";

export default function App() {
  return (
    <MasterContextProvider>
      <Index />
    </MasterContextProvider>
  );
}
