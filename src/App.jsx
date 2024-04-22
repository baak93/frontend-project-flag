import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import AddLocationView from "./views/AddLocationView";
import NotFoundView from "./views/NotFoundView";
import CardDetailView from "./views/CardDetailView";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" component={HomeView} />
        <Route path="/newlocation" component={AddLocationView} />
        <Route path="/aboutme" component={AboutView} />
        <Route path="/tripdetail/:id">
          {(params) => <CardDetailView id={params.id} />}
        </Route>
        <Route component={NotFoundView} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
