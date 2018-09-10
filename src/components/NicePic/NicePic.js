import React from "react";
import "./NicePic.css";
import { Section } from "../Modules";

const NicePic = () => (
  <Section id="scrollTopTarget">
    <img className="nicePic" src={require("../images/Background1.jpg")} alt="nicePic" />
  </Section>
);

export default NicePic;
