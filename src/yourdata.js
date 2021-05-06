// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import unity from "./images/unity.svg"

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

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Phil",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "experiences and",
    //Line 3 For Header
    "products that Inspire",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "pcherner4@gmail.com",

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
        "This demo app combines the Oculus Quest's handtracking with guesture recognition and MRTK-Quest to play Rock, Paper, Scossors.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        rpsDemo,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/PIC123/RockPaperScissors-Quest",
    },
    {
      title: "Orion-MRTK", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
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
      url: "http://chetanverma.com/",
    },
    {
      title: "VoTT", //Project Title - Add Your Project Title Here
      para:
        "Visual Object Tagging Tool is an open source annotation and labeling tool for images and videos. It allows users to quickly label their data and export it in a variety of formats to facilitate training machine learning models", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        VoTT,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "VR Haptics", //Project Title - Add Your Project Title Here
      para:
        " An IoT based armband to be worn while in VR that would simulate haptic feedback using electrical muscle stimulation. The device was activated based on hand position, tracked using a leap motion on the front of an Oculus Rift, and could simulate tapping, as well as recoil through muscle contraction", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
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
    "I'm a highly motivated engineer with years of experience working in fast-paced, interdisciplinary environments. Very strong background in C#, Javascript/Typecript, Python and Unity. Experience creating applications for a range of AR/VR technologies. Passionate about building new technologies and experiences that inspire in order to develop the future of human/computer interaction.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    selfPortrait,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: unity,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
