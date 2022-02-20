import { Welcome , Transaction , Services , Navbar , Footer } from './Components'

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer /> 
    </div>
  );
}

export default App;
