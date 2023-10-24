import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {
  Home,
  About,
  Blog,
  BlogDetails,
  Career,
  Contact,
  Projects,
  Services,
  Login,
  Register,
  EventFormDevelope,
  EventList,
  EventRequest,
  DashboardLayout,
  Table,
  Users,
  Profile,
  Events
} from "./routes";
import Layout from "../components/Layout";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="career" element={<Career />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<BlogDetails />} />
      <Route path="projects" element={<Projects />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="eventlist" element={<EventList />} />
      <Route path="eventrequest/:id" element={<EventRequest />} />
      <Route path="eventformdevelope" element={<EventFormDevelope />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Table />} />
        <Route path='users' element={<Users />} />
        <Route path='profile' element={<Profile />}/>
        <Route path='events' element={<Events />}/>
      </Route>
    </Route>
  )
)

export default routes