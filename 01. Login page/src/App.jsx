import { LoginForm, CompanyLogo } from "./components"

function App() {
  return (
    <section className=" grid grid-cols-2 ">
      <div className=" ">
        <span className="">devtools.tech</span>
        <LoginForm />
      </div>
      <CompanyLogo />
    </section>
  )
}

export default App
