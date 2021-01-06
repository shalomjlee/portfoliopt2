import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Full Stack Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shalom Lee',
  subtitle: 'Fullstack Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mypicture.jpg',
  paragraphOne: 'I am a fullstack Software Engineer located in Austin, TX ',
  paragraphTwo:
    'I have developed multiple full stack applications with full CRUD functionality using the MERN stack.',
  paragraphThree:
    'I specialize in creating fully functional, dynamic applications, and am passionate about creating and discovering with others.',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vQ47wbxceq1PS_l4RsNoYaAoUD7h0M6fV_dcorEPE7w1uwa8qUWkg3deD_a30GAf12EnaEdmi-Fo7YP/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'foodpicker.png',
    title: 'The Food Picker App',
    info:
      'Created by Shalom Lee, inspired by Mila David, the FoodPicker app allows you to search by category or price for a restaurant that will be randomly chosen for you from a database of restaurants, created using Django.',
    info2: '',
    url: 'https://foodpickerfront.herokuapp.com/',
    repo: 'https://github.com/shalomjlee/foodpicker_front', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gitwrap.png',
    title: 'Gitwrap',
    info:
      'Created using a MERN stack, Gitwrap is an application which allows you to create a wishlist with full CRUD functionality.',
    info2: '',
    url: 'http://git-wrap.herokuapp.com/',
    repo: 'https://github.com/anonymous-animals/gitwrap-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherproject.png',
    title: 'The Weather Project',
    info:
      "Using react and the weatherbit API, this project allows you to use weatherbit's highly functional API to search for the weather in the typed in city and states location. ",
    info2: '',
    url: 'https://weatherproject2.herokuapp.com/',
    repo: 'https://github.com/shalomjlee/weatherProject', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'The Weather Project',
  //   info:
  //     "Using react and the weatherbit API, this project allows you to use weatherbit's highly functional API to search for the weather in the typed in city and states location. ",
  //   info2: '',
  //   url: 'https://weatherproject2.herokuapp.com/',
  //   repo: 'https://github.com/shalomjlee/weatherProject', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'I am open to new opportunities!',
  btn: 'Contact Me',
  email: 'shalomjlee@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/shalomjlee',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/shalomjlee',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shalomjlee/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shalomjlee',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
