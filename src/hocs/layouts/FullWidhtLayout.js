import Navbar from "/components/navigation/Navbar";
import { connect } from "react-redux";
import Footer from "../../components/navigation/Footer";
import Alert from "../../components/navigation/alert";

const FullWidthLayout = ({ children }) => {
  return (
      <div>
        <Navbar/>
        {children}
        <Footer/>
        <Alert/>
  </div>
)

}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {


})(FullWidthLayout);
