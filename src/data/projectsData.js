import honyomi from '../assets/svg/projects/honyomi.jpg';
import prototype from '../assets/png/govuk prototype.png';

export const projectsData = [
  {
    id: 1,
    projectName: 'English Second Language Learning Application',
    projectDesc:
      'Utilizing NLP Techniques to help ESL learners efficiently transition to reading novels such as; A Christmas Carol, Pride and Prejudice, Frankenstein & The Strange Case Of Dr. Jekyll And Mr.Hyde',
    tags: ['Java', 'Mavern', 'Stanford Core NLP', 'Web Scraping'],
    code: 'https://github.com/LuBailey/BookTFIDFAnalysis',
    image: honyomi,
  },
  {
    id: 2,
    projectName: 'Prototype of Digital Service for DBS Checks',
    projectDesc:
      'Developed the frontend for a UK government service to move from a paper based criminal record check to an online viewable check',
    tags: ['NodeJS', 'Express', 'Javascript', 'HTML', 'CSS'],
    code: 'https://github.com/LBaileyIBM/DBS_Online_Results',
    image: prototype,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
