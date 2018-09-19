import React from "react";

const Projects = () => (

  <div className="projects">

    <h1 className="headline"> My Projects</h1>

    <div className="project-info">

      <div className="project-paragraph">
        <h2>Event Finder - JavaScript</h2>
        <h4 className="github"><a href="https://www.github.com/gregorcox/Event-Finder-Project">GitHub</a></h4>
        <p>At CodeClan, my final project involved collaborating as an agile team of four to create an single-page informational web application using vanilla JavaScript. Together we built Eventfull, a full-stack JavaScript app that allows users to search for events based on category, dates and location. <br/><br/>
        The app uses two APIs (<a href="https://www.skiddle.com/api/">Skiddle</a> and <a href="https://geocode.xyz/">GeoCode</a>) to fetch event and geographical data. Search results are presented on an interactive Leaflet map where users can click through to see more information and buy tickets. The user can also save their favourite events through the use of a MongoDB NoSQL database. JavaScript is used heavily on the front-end to create a modern looking, responsive and dynamic UI.<br/><br/>
        In addition to learning a huge amount about JavaScript, we also had the opportunity to practise agile methodologies to plan and coordinate as a team. Stand ups, sprints, scrum boards and pair programming were all used to deliver a fully functional MVP with additional features before the deadline.</p>

      </div>

      <div className="project-photo">
        <img className="screenshot" src={require('../images/event_finder1.png')} alt="Event Finder" />
        <img className="screenshot" src={require('../images/event_finder2.png')} alt="Event Finder" />
      </div>

    </div>

    <div className="project-info">

      <div className="project-paragraph">
        <h2>Spending Tracker - Ruby</h2>
        <h4 className="github"><a href="https://www.github.com/gregorcox/Spending-Tracker-Project">GitHub</a></h4>
        <p>My first solo project at CodeClan involved building a full-stack web application to allow users to track their financial transactions. Users are able to create, update, and delete transactions containing a date, and amount, a merchant and a tag, and view their transactions in a table.<br/><br/>
        The project was created using Ruby with the Sinatra web framework. A postgreSQL database was also used to store transaction, merchant and tag data from the user. This meant users could also filter their transactions by merchant or tag. The app uses a sleak, minimalist front-end with a subtle colour pallette that results in a user friendly UI.</p>
      </div>



      <div className="project-photo">
        <img className="screenshot" src={require('../images/spending1.png')} alt="Spending Tracker" />
        <img className="screenshot" src={require('../images/spending2.png')} alt="Event Finder" />
      </div>

    </div>

    <div className="project-info">

      <div className="project-paragraph">
        <h2>News Website - Java</h2>
          <h4 className="github"><a href="https://github.com/gregorcox/News-Website-Project">GitHub</a></h4>
        <p>A paired project completed during my time at CodeClan. We were tasked with creating a full-stack web application using Java for a magazine eager to go digital. The app has an editor side, that allows the creation, update, and deletion of articles and journalists. It also has a user side, where users can browse and read articles, view journalists, and share stories on social media.<br/><br/>
        The app was built using Java and made use of the Spark web framework. A simple database using the Hibernate framework means creating, editing and deleting articles/journalists is quick and easy. New articles appear on the homepage where users can view the latest stories or use the navigation bar to browse articles based on their respective category. Test driven development was used throughout the project to ensure a reliable backend. The front-end uses a clean and user friendly UI that encourages users to make use of all areas of the app.</p>
      </div>

      <div className="project-photo">
        <img className="screenshot" src={require('../images/news1.png')} alt="Spending Tracker" />
        <img className="screenshot" src={require('../images/news2.png')} alt="Event Finder" />
      </div>

    </div>




  </div>
);

export default Projects;
