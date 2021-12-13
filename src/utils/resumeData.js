import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import React from 'react';
import skindicator1 from '../assets/skindicator_images/1.jpg';
import skindicator2 from '../assets/skindicator_images/2.png';
import skindicator3 from '../assets/skindicator_images/3.png';
import skindicator4 from '../assets/skindicator_images/4.png';
import skindicator5 from '../assets/skindicator_images/5.png';
import skindicator6 from '../assets/skindicator_images/6.png';
import skindicator7 from '../assets/skindicator_images/7.png';
import skindicator8 from '../assets/skindicator_images/8.png';
import skindicator9 from '../assets/skindicator_images/9.png';
import skindicator10 from '../assets/skindicator_images/10.png';
import skindicator11 from '../assets/skindicator_images/11.png';
import housing1 from '../assets/Australia_housing_image/1.png';
import housing2 from '../assets/Australia_housing_image/2.png';
import housing3 from '../assets/Australia_housing_image/3.png';
import housing4 from '../assets/Australia_housing_image/4.png';
import housing5 from '../assets/Australia_housing_image/5.png';
import painDiary1 from '../assets/pain_diary_image/1.jpeg';
import painDiary2 from '../assets/pain_diary_image/2.jpeg';
import painDiary3 from '../assets/pain_diary_image/3.jpeg';
import painDiary4 from '../assets/pain_diary_image/4.jpeg';
import painDiary5 from '../assets/pain_diary_image/5.jpeg';
import painDiary6 from '../assets/pain_diary_image/6.jpeg';
import painDiary7 from '../assets/pain_diary_image/7.jpeg';
import painDiary8 from '../assets/pain_diary_image/8.jpeg';
import painDiary9 from '../assets/pain_diary_image/9.jpeg';
import learningbar1 from '../assets/learningBar_image/1.png';
import learningbar2 from '../assets/learningBar_image/2.png';
import tagtag1 from '../assets/tagtag_image/1.png';
import tagtag2 from '../assets/tagtag_image/2.png';

const resumeData = {
  name: 'Charles Yeh',
  title: 'Web Developer',
  phone: '(61)423-105-719',
  email: 'charlesyehtw@gmail.com',
  location: 'Melbourne',
  address: '23 Longbourne Ave, Notting Hill',

  socials: {
    Facebook: {
      link: 'https://www.facebook.com/charlesyehtw/',
      text: 'Charles Yeh',
      icon: <FacebookIcon />,
    },
    Linkedin: {
      link: 'https://www.linkedin.com/in/charles-yeh-1b5950202/',
      text: 'Charles_Yeh',
      icon: <LinkedInIcon />,
    },
    Github: {
      link: 'https://github.com/zyeh0001',
      text: 'MyGitHub',
      icon: <GitHubIcon />,
    },
    Instagram: {
      link: 'https://www.instagram.com/charles.gaga_/',
      text: 'charles.gaga_',
      icon: <InstagramIcon />,
    },
  },
  about:
    'I’m an information technology master graduate from Monash University, with over 6 years of experience in operations, web development, project management, data analysis skills. Besides with a previous 1 year of experience as an FAE engineer. I have received training in providing effective solutions to customers, and developed strong interpersonal and oral communication skills. \n\nI have excellent problem-solving skills and transform complex analysis into clear and practical steps, providing meaningful and relevant insights. I am also adept at designing, developing, analyzing, and reviewing reports, metrics, and data sets to support performance results. \n\nI would like to apply my knowledge about Information technology to help companies to improve their performance. My specialty includes knowledge about  React js, AWS services, Javascript, CSS, HTML, Java, Python, Android studio, SQL, R, and Tableau. I am also a go-getter and quick learner that can help me face challenges during my work. I am now seeking to gain full-time employment as a web developer or any IT-related opportunities in different industries.',
  work: [
    {
      title: 'Freelance Web Developer',
      date: 'Sep2021 – PRESENT',
      description:
        'Ø Establish and maintain a multi-lingual website Taiwan-Japan exchange platform.',
    },
    {
      title: 'Greata International Corp-FAE ENGINEER',
      date: 'Apr2019 - Oct 2019',
      description:
        'Ø Work with Delta Electronics to support the Government intelligent street lamp system in Taoyuan city.\n Ø Assist customers to determined product requirements and provide pre-sales and after-sales technical support including problem solving and training.\nØ Examine failure Microchip IC testing using C programming and oscilloscope',
    },
    {
      title: 'Workforce Development Agency (WDA)-TEACHING ASSISTANT',
      date: 'Aug 2018 - Oct 2020',
      description:
        'Ø Assist students in solving IT related problems for various certificates, including different computer C-level Technician certificates.',
    },
  ],
  education: [
    {
      name: 'Monash University',
      date: 'Mar2020 - Dec2021 - Melbourne, Australia',
      major: 'Master of Information Technology',
    },
    {
      name: 'National Dong Hwa University',
      date: 'Sep2014 - June2018 - Taipei, Taiwan',
      major: 'Bachelor of Computer Science',
    },
    {
      name: 'California State University of Monterey Bay',
      date: 'Aug2017 - Jan2018 - California, USA',
      major: 'ExchangeStudent',
      award:
        'Ø Awarded International exchange scholarship from Ministry of Education, Taiwan',
    },
  ],
  services: [
    {
      title: 'Web Dev',
      description:
        'I have over six years of experience in operations, web development, project management, data analysis skills.',
      icon: '',
    },
    {
      title: 'Cloud Computing',
      description:
        'I have over six years of experience in operations, web development, project management, data analysis skills.',
      icon: '',
    },
    {
      title: 'Software development',
      description:
        'I have over six years of experience in operations, web development, project management, data analysis skills.',
      icon: '',
    },
  ],

  skills: [
    {
      title: 'Web-Dev',
      description: [
        'ReactJS',
        'JavaScript',
        'Bootstrap',
        'Material UI',
        'AWS services',
      ],
    },
    {
      title: 'Database',
      description: ['SQL', 'MongoDB', 'Cassandra', 'Firebase'],
    },
    {
      title: 'Sourse Control',
      description: ['GIT', 'Agile/Scrum'],
    },
    {
      title: 'Visual',
      description: ['Tableau', 'R', 'D3.js'],
    },
  ],
  projects: [
    {
      tag: 'React',
      images: [
        skindicator1,
        skindicator2,
        skindicator3,
        skindicator4,
        skindicator5,
        skindicator6,
        skindicator7,
        skindicator8,
        skindicator9,
        skindicator10,
        skindicator11,
      ],
      title: 'Skindicator-x',
      description:
        'Ø Australia has one of the highest rates of skin cancer in the world; Each year, nearly 80% of all cancer cases in Australia are skin cancer cases. Left undetected skin cancer can even lead to death. The problem is that some Australians dont realise how serious skin cancer is and how important regular skin check-ups can be. Furthermore, Information about skin cancer is difficult to find and hard to understand \n\n Ø Our solutions involve providing basic preventive measures for skin cancer and analyzing the data based on the pictures of their skin uploaded by users (Classification of data is based on AI). At the end of the analysis, the user is given a prediction report along with a disclaimer. Please note that this is not a diagnosis report, we are just predicting the probability that the user has or may have skin cancer.',
      caption:
        'A free service website designed to raise skin health awareness allows users to check their moles and find the nearest dermatologist.',
      links: [
        {
          type: 'project',
          link: 'https://www.skindicator.ga/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/Skindicator-x',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'ASP.NET',
      images: [learningbar1, learningbar2],
      title: 'Learnong Bar',
      caption:
        'An framework of online language learning platform. This platform is designed for people who want to learn new languages and make friends from different countries.',
      description:
        'The platform allowed users to select the what languages they want to learn. \nUsers can also view an event list to go to that the Admin announced. Furthermore, there is also a forum to support students’ learning experience. It provides students with places to discuss course material, gives feedback, or chat with each other.',
      links: [
        // {
        //   type: 'project',
        //   link: 'https://www.skindicator.ga/',
        //   icon: <WebIcon />,
        // },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/LearningBar',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'Data Visual',
      images: [housing1, housing2, housing3, housing4, housing5],
      title: 'Australia housing asalysis website',
      caption:
        'A narrative visualisation website designed to show the average housing price and focus on the impact of population and top universities location.',
      description:
        'Ø Collect open data from Australian Bureau of Statistics and Kaggle, use Python for data wrangling (deal with null, invalidate value to realize data normalize and standard).\n Ø Use D3.js to realize data visualization including Choropleth map to show the geo-distribution and animation barchart to show housing price through timeline.',
      links: [
        {
          type: 'project',
          link: 'https://zyeh0001.github.io/Australia-Housing-Analysis-D3/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/Australia-Housing-Analysis-D3',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'Android App',
      images: [
        painDiary1,
        painDiary2,
        painDiary3,
        painDiary4,
        painDiary5,
        painDiary6,
        painDiary7,
        painDiary8,
        painDiary9,
      ],
      title: 'Personalised Mobile Pain Diary',
      caption:
        'A health care Android application that allows users to keep record of their pain experience and present monthly report of the pain level.',
      description:
        'Ø A mobile and distributed, personalised pain diary application that enables individuals to record their pain experience and related factors such as their pain intensity level, pain location, physical activities (or number of steps taken daily) and mood. It allows users to view daily, weekly and monthly reports and monitor their health and progress. These reports can help the individual as well as their doctor to better understand their condition and the relationships between the environmental variables such as their pain intensity and weather.\n Ø The mobile app  was implemented in Android Studio 11 and interact with the public web APIs (e.g. weather public APIs) to retrieve relevant and useful information. \n Ø This project also utilise firebase as database to manage the users.',
      links: [
        // {
        //   type: 'project',
        //   link: 'https://zyeh0001.github.io/Australia-Housing-Analysis-D3/',
        //   icon: <WebIcon />,
        // },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/Pain-Diary',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'AWS Serverless',
      images: [tagtag1, tagtag2],
      title: 'Tag Tag',
      caption:
        'A Modern Image Storage on the Cloud that utilise AWS services allow users to upload images and detect the objects inside the image',
      description:
        'Ø An AWS Cloud-based solution that exploits services such as S3, Lambda, APIGateway and database service (e.g. DynamoDB) to build a system for automated object-detection tagging and query handling. \n Ø The system allows end-users to upload their images into an S3 bucket, and handling  queries using API  gateway totrigger corresponding Lambda functions. The object detection feature was developed using Yolo.',
      links: [
        // {
        //   type: 'project',
        //   link: 'https://zyeh0001.github.io/Australia-Housing-Analysis-D3/',
        //   icon: <WebIcon />,
        // },
        {
          type: 'source',
          link: 'https://github.com/ElvisLzw/fit5225_ass2',
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};

export default resumeData;
