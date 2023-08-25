import PropTypes from "prop-types";
import "./styles.css";

const Layout = ({ children }) => {
  return (
    <div className="scroll-bar flex flex-col items-center mt-10">{children}</div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
