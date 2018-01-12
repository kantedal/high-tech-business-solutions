import * as React from "react";
import { CSSProperties } from "react";
import IconButton from "material-ui/IconButton";
import { Grid, Row, Col } from "react-flexbox-grid";
import * as style from "./style.css";
import { PresentationBox } from "../PresentationBox/index";

export namespace Header {
  export interface Props {}
}

export const Header: React.SFC<Header.Props> = () => {
  return (
    <div className={style.headerContent}>
      <div className={style.top} />
      <Grid fluid>
        <Row center="xs" className={style.presentationRow}>
          <Col xs={12} sm={12} md={12} lg={9}>
            <Row>
              <Col xs={0} sm={6}>
                <p className={style.presentation}>
                  We are two friends who enjoy coding and creativity. Currently
                  we are looking for work. If you like what you see here in our
                  portfolio and are looking for two programmers, please contact
                  us.
                </p>
              </Col>
              <Col xs={6} sm={3}>
                <PresentationBox
                  name={"Simon Hedlund"}
                  imgUrl={"./images/simon.jpg"}
                  linkedInUrl={"https://www.linkedin.com/in/simon-hedlund-a1a656128/"}
                  emailUrl={"sermonhedlund@gmail.com"}
                  githubUrl={"https://github.com/Hedlundaren"}
                  websiteUrl={"http://simonhedlund.github.io"}
                />
              </Col>
              <Col xs={6} sm={3}>
                <PresentationBox
                  name={"Filip Kantedal"}
                  imgUrl={"./images/filip.jpg"}
                  linkedInUrl={"https://www.linkedin.com/in/filip-kantedal-33b84240/"}
                  emailUrl={"kantedal@gmail.com"}
                  githubUrl={"https://github.com/kantedal"}
                  websiteUrl={"http://kantedal.se"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
