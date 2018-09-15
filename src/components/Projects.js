import React from "react";

const Projects = () => (

  <div className="projects">

    <h1 className="headline"> My Projects</h1>

    <div className="project-info">

      <div className="project-paragraph">
        <h2>Event Finder</h2>
        <h4 className="github"><a href="github.com/gregorcox/Event-Finder-Project">GitHub</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien ac nisi blandit scelerisque. Sed a ultricies elit, quis iaculis turpis. Vivamus feugiat volutpat fringilla. Praesent eros diam, mollis nec leo in, pharetra mattis libero. Pellentesque sed ex at ante sodales fringilla nec vitae turpis. Nam a euismod ante, ut cursus justo. Proin mattis enim ipsum, sit amet viverra odio facilisis at. Nullam a nisl cursus, porttitor erat eu, posuere metus. Nunc aliquet, nunc eget tincidunt faucibus, neque metus venenatis erat, lacinia imperdiet mauris diam et ipsum. Nullam vitae dui pulvinar, viverra tellus eget, blandit diam. Sed at tincidunt tellus, sit amet viverra elit.</p>
      </div>

      <div className="project-photo">
        <img className="screenshot" src={require('../images/event_finder1.png')} alt="Event Finder" />
        <img className="screenshot" src={require('../images/event_finder2.png')} alt="Event Finder" />
      </div>

    </div>

    <div className="project-info">

      <div className="project-paragraph">
        <h2>Spending Tracker</h2>
        <h4 className="github"><a href="github.com/gregorcox/Spending-Tracker-Project">GitHub</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien ac nisi blandit scelerisque. Sed a ultricies elit, quis iaculis turpis. Vivamus feugiat volutpat fringilla. Praesent eros diam, mollis nec leo in, pharetra mattis libero. Pellentesque sed ex at ante sodales fringilla nec vitae turpis. Nam a euismod ante, ut cursus justo. Proin mattis enim ipsum, sit amet viverra odio facilisis at. Nullam a nisl cursus, porttitor erat eu, posuere metus. Nunc aliquet, nunc eget tincidunt faucibus, neque metus venenatis erat, lacinia imperdiet mauris diam et ipsum. Nullam vitae dui pulvinar, viverra tellus eget, blandit diam. Sed at tincidunt tellus, sit amet viverra elit.</p>
      </div>

      <div className="project-photo">
        <img className="screenshot" src={require('../images/spending1.png')} alt="Spending Tracker" />
        <img className="screenshot" src={require('../images/event_finder2.png')} alt="Event Finder" />
      </div>

    </div>

    <div className="project-info">

      <div className="project-paragraph">
        <h2>News Website</h2>
          <h4 className="github"><a href="github.com/gregorcox/News-Website-Project">GitHub</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien ac nisi blandit scelerisque. Sed a ultricies elit, quis iaculis turpis. Vivamus feugiat volutpat fringilla. Praesent eros diam, mollis nec leo in, pharetra mattis libero. Pellentesque sed ex at ante sodales fringilla nec vitae turpis. Nam a euismod ante, ut cursus justo. Proin mattis enim ipsum, sit amet viverra odio facilisis at. Nullam a nisl cursus, porttitor erat eu, posuere metus. Nunc aliquet, nunc eget tincidunt faucibus, neque metus venenatis erat, lacinia imperdiet mauris diam et ipsum. Nullam vitae dui pulvinar, viverra tellus eget, blandit diam. Sed at tincidunt tellus, sit amet viverra elit.</p>
      </div>

      <div className="project-photo">
        <img className="screenshot" src={require('../images/news1.png')} alt="Spending Tracker" />
        <img className="screenshot" src={require('../images/event_finder2.png')} alt="Event Finder" />
      </div>

    </div>




  </div>
);

export default Projects;
