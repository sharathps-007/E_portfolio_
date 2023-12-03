import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBg2() {
  const [particlesOptions, setParticlesOptions] = useState({
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 400,
          duration: 10,
        },
        grab: {
          distance: 200,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: false,
  });

  useEffect(() => {
    function handleResize() {
      // Update particle options based on screen size
      setParticlesOptions((prevOptions) => ({
        ...prevOptions,
        interactivity: {
          ...prevOptions.interactivity,
          events: {
            ...prevOptions.interactivity.events,
            onClick: {
              enable: window.innerWidth >=430, // Adjust the condition based on your screen size threshold
              mode: "repulse",
            },
            onHover: {
              enable: window.innerWidth >=430, // Adjust the condition based on your screen size threshold
              mode: "grab",
            }
          },
        },
      }));
    }

    // Set initial configuration
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return <Particles className="tsparticles" id="tsparticles" init={loadFull} options={particlesOptions} />;
}

export default ParticleBg2;
