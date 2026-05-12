import threadedPhoto from '../assets/threaded-picture.png';
import routecastPhoto from '../assets/routecast-picture.png';

export const projects = [

{   
    id:1,
    title: "Threaded",
    category: "Full Stack Web App",
    description:"A full-stack needlepoint project tracker and inspiration board built with React, Vite, Supabase, and AWS Amplify. Users can create and manage projects, upload images, track thread palettes, add searchable tags, \
    filter by project status, and mark projects as public or private.",
    tech: ["React", "AWS Amplify", "Vite"],
    github: "https://github.com/claireweber12/threaded",
    demo: "https://main.d3bty356y6d0wb.amplifyapp.com/",
    caseStudy:'#',
    featured: true,
    img: threadedPhoto,
},
{   
    id:2,
    title: "RouteCast",
    category: "API + Web App",
    description: "A weather application using OpenWeatherMap that \
    helps travelers check weather conditions along their route",
    tech: ["Javascript", "Node.js", "CSS/HTML", "API Integration"],
    github:"https://github.com/claireweber12/routecase",
    demo: "https://routecastweather.netlify.app/",
    featured:false,
    img: routecastPhoto,
},
{
    title: "AquaGuard",
    category: "AI + Product Design",
    description: "A pool safety system concept developed as part of a capstone course through Auburn University. AquaGuard uses \
    underwater cameras and computer vision technology to help lifeguards identify potential drowning events faster.",
    tech: ["Computer Vision", "Product Design", "Market Research"],
    github: "#",
    caseStudy:'#',
    featured:false,
    img:'',
},


]