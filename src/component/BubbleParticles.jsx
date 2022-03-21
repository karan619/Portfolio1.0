import React from "react";
import { Particles } from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "absolute",
    opacity: "0.3",
    zIndex: "-1",
  },
}));
const BubbleParticles = () => {
  const classes = useStyles();
  return (
    <>
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0,
                sync: true,
              },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      />
    </>
  );
};

export default BubbleParticles;
