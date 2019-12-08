import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";
const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: "Tech deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={onDelete}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {};
TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};
export default connect(null, { deleteTech })(TechItem);
