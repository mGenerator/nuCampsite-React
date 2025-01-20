import DisplayList from "../features/display/DisplayList";
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
const HomePage =()=>{
  return(
      <Container>
        <SubHeader current='Home' />
       <DisplayList />
      </Container>
  )
};
export default HomePage;