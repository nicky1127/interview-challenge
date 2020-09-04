import "@testing-library/jest-dom";
import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import renderer from "react-test-renderer";

global.React = React;
global.renderer = renderer;
