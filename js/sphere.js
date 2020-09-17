$(document).ready(function () {
  var entries = [
    {
      label: "HTML",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
      tooltip: "90%",
    },
    {
      label: "CSS",
      url: "http://www.flashforum.de/",
      target: "_top",
      tooltip: "90%",
    },
    {
      label: "Java",
      url: "http://www.jqueryscript.net/",
      target: "_top",
      tooltip: "60%",
    },
    {
      label: "ReactJS",
      url: "https://jsfiddle.net/user/NiklasKnaack/fiddles/",
      target: "_top",
      tooltip: "80%",
    },
    {
      label: "NodeJS",
      url: "http://codepen.io/",
      target: "_top",
      tooltip: "At vero",
      tooltip: "80%",
    },
    {
      label: "Bootstrap",
      url: "http://threejs.org/",
      target: "_top",
      tooltip: "90%",
    },
    {
      label: "Unity",
      url: "http://webglstudio.org/",
      target: "_top",
      tooltip: "70%",
    },
    {
      label: "MERN",
      url: "http://jscompress.com/",
      target: "_top",
      tooltip: "75%",
    },
    {
      label: "MongoDB",
      url: "https://tinypng.com/",
      target: "_top",
      tooltip: "80%",
    },
    {
      label: "SQL",
      url: "http://caniuse.com/",
      target: "_top",
      tooltip: "85%",
    },
    {
      label: "Github",
      url: "https://goo.gl/",
      target: "_top",
      tooltip: "80%",
    },
    {
      label: "Augmented Reality",
      url: "http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx",
      target: "_top",
      tooltip: "75%",
    },
    {
      label: "C#",
      url: "http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx",
      target: "_top",
      tooltip: "60%",
    },

    {
      label: "Python",
      url: "http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx",
      target: "_top",
      tooltip: "70%",
    },
    {
      label: "C",
      url: "http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx",
      target: "_top",
      tooltip: "85%",
    },
    {
      label: "Javascript",
      url: "http://forum.jswelt.de/",
      target: "_top",
      tooltip: "80%",
    },

    {
      label: "C++",
      url: "http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx",
      target: "_top",
      tooltip: "85%",
    },
    {
      label: "Adobe XD",
      url: "http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx",
      target: "_top",
      tooltip: "75%",
    },
    {
      label: "UI/UX",
      url: "http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx",
      target: "_top",
      tooltip: "75%",
    },
  ];

  var settings = {
    entries: entries,

    radius: "85%",
    radiusMin: 75,
    width: 300,
    height: 300,
    bgDraw: true,
    bgColor: "#fff",
    opacityOver: 1.0,
    opacityOut: 0.08,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: " Arial, sans-serif",
    fontSize: "18",
    fontColor: "#e40977",
    fontWeight: "normal", //bold
    fontStyle: "normal", //italic
    fontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontFamily: "Oswald, Arial, sans-serif",
    tooltipFontSize: "15",
    tooltipFontColor: "black",
    tooltipFontWeight: "normal", //bold
    tooltipFontStyle: "normal", //italic
    tooltipFontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: "middle",
    tooltipDiffX: 0,
    tooltipDiffY: 20,
  };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $("#holder").svg3DTagCloud(settings);
});
