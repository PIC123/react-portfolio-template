// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import unityIcon from "./images/unity.svg"
import pythonIcon from "./images/python.svg"
import cSharpIcon from "./images/c-sharp.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// Personal Photos
import selfPortrait from "./images/self.jpg"

// Project Photos
import fetchMlDemo from "./images/fetchMLdemo.gif"
import rpsDemo from "./images/rockPaperScissorsDemo.gif"
import ARtBot from "./images/artbot.png"
import VoTT from "./images/vott.png"
import vrHaptics from "./images/vrHaptics.png"
import orionMRTK from "./images/Orion-MRTK.gif"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Phil",
  headerTagline: [
    //Line 1 For Header
    "Building Digital",
    //Line 2 For Header
    "Experiences And",
    //Line 3 For Header
    "Products That Inspire",
  ],
  //   Header Paragraph
  headerParagraph:
    "Hey there! My name's Phil and I love building new technologies and experiences that inspire in order to develop the future of human/computer interaction.",

  //Contact Email
  contactEmail: "phil@cherner.dev",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "FetchML", //Project Title - Add Your Project Title Here
      para:
        "This little guy is an AI that was trained with Reinforcement Learning using Unity's ML Agents platform. With just 15 minutes of training Bruce was able to learn to play fetch naturally with basic rewards for getting the ball and returning it.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        fetchMlDemo,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/PIC123/FetchML-Quest",
    },
    {
      title: "RockPaperScissors(RPS) VR", //Project Title - Add Your Project Title Here
      para:
        "This demo app combines the Oculus Quest's hand tracking with gesture recognition and MRTK-Quest to play Rock, Paper, Scissors.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        rpsDemo,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/PIC123/RockPaperScissors-Quest",
    },
    {
      title: "Orion-MRTK", //Project Title - Add Your Project Title Here
      para:
        "An adaptation of Leap Motion's Orion tech demo for the Oculus Quest, using hand tracking and leveraging MRTK for menus and interactions", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        orionMRTK,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/PIC123/OrionQuest-MRTK",
    },
    {
      title: "ARtBot:", //Project Title - Add Your Project Title Here
      para:
        "An interactive virtual art gallery with holographic robot curator, developed for NY Creative Tech Week. The user can speak with the ARtBot, which uses speech-to-text and NLP, and ask questions about the art pieces or artists, or change the paintings on display", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        ARtBot,
      //Project URL - Add Your Project Url Here
      url: "https://www.cherner.dev/",
    },
    {
      title: "VoTT", //Project Title - Add Your Project Title Here
      para:
        "Visual Object Tagging Tool is an open source annotation and labeling tool for images and videos. It allows users to quickly label their data and export it in a variety of formats to facilitate training machine learning models", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        VoTT,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/microsoft/VoTT",
    },
    {
      title: "VR Haptics", //Project Title - Add Your Project Title Here
      para:
        " An IoT based armband to be worn while in VR that would simulate haptic feedback using electrical muscle stimulation. The device was activated based on hand position, tracked using a leap motion on the front of an Oculus Rift, and could simulate tapping, as well as recoil through muscle contraction", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        vrHaptics,
      //Project URL - Add Your Project Url Here
      url: "https://www.cherner.dev/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a highly motivated engineer with years of experience working in fast-paced, interdisciplinary environments. I have a very strong background in C#, Javascript/Typescript, Python and Unity. With experience creating applications for a range of AR/VR technologies, I'm passionate about building new technologies and experiences that inspire in order to develop the future of human/computer interaction.",
  aboutParaTwo:
    "I'm currently working at Microsoft on the Commercial Software Engineering team (CSE) where we collaborate with Microsoft’s top partners, ranging from start-ups to fortune 500 companies across many industries. We work alongside their lead engineers develope solutions to solve the company’s toughest technical problems.",
  aboutParaThree:
    "Previously, I was doing research in the Fluid Interfaces group at the MIT MIT Media Lab and worked with the Robot Locomotion Group in MIT CSAIL while studying Electrical Engineering & Computer Science at MIT.",
  aboutImage:
    selfPortrait,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: cSharpIcon,
      para:
        "C#",
    },
    {
      img: unityIcon,
      para:
        "Unity",
    },
    {
      img: jsIcon,
      para:
        "Javascript/Typescript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: designIcon,
      para:
        "Design",
    },
    {
      img: codeIcon,
      para:
        "Prototyping",
    },
    {
      img: pythonIcon,
      para:
        "Python",
    },
    {
      img: htmlIcon,
      para:
        "HTML",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/PIC123" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/pcherner/",
    },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
