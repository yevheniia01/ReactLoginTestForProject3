import React, { Component } from "react";
import { translate } from "react-i18next";
import Row from 'react-bootstrap/Row';
// or less ideally
import Col from 'react-bootstrap/Col';


class Landing extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="container">
        <h1 className="text-center">{t("WELCOME")} Friend Finder </h1>
    <div className="row firstRow">
      <div className="col col-sm-12 col-md-12 col-lg-12 sighnIn">
        <div class="jumbotron jumbotron-fluid firstCont">
          <div class="container">
             <h1 class="display-4">SignIn to place</h1>
             <span class="title">2004 Roll</span><span class="info">Salmon tempura roll spicy may with tempura flakes, scallops  spicy special sauce on top.</span>
          </div>
        </div>
      </div>
    </div>
        <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-12 findFriend">
        <div class="jumbotron jumbotron-fluid secondCont">
  <div class="container">
    <h1 class="display-4">See people around you</h1>
  </div>
</div>
        </div>
      </div>
      </div>
    );
  }
}

export default translate("translations")(Landing);
