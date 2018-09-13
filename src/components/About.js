import React from "react";

const About = () => (
  <div className="about">
    <h1>About Me</h1>
    <div className="about-paragraph">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien ac nisi blandit scelerisque. Sed a ultricies elit, quis iaculis turpis. Vivamus feugiat volutpat fringilla. Praesent eros diam, mollis nec leo in, pharetra mattis libero. Pellentesque sed ex at ante sodales fringilla nec vitae turpis. Nam a euismod ante, ut cursus justo. Proin mattis enim ipsum, sit amet viverra odio facilisis at. Nullam a nisl cursus, porttitor erat eu, posuere metus. Nunc aliquet, nunc eget tincidunt faucibus, neque metus venenatis erat, lacinia imperdiet mauris diam et ipsum. Nullam vitae dui pulvinar, viverra tellus eget, blandit diam. Sed at tincidunt tellus, sit amet viverra elit.Nulla at rutrum justo. Pellentesque viverra interdum sapien vel semper. Phasellus vitae tempor ex. Proin ac ipsum non elit euismod rhoncus at sed dolor. Nunc at auctor orci, eu accumsan mi. Aliquam auctor id massa vitae facilisis. Donec aliquam, lectus vel blandit commodo, sem risus maximus ex, maximus vulputate sapien leo non leo. Aenean justo orci, lobortis non ultrices vitae, porttitor eu neque. Morbi sit amet velit auctor, iaculis quam ac, tristique felis.<br/><br/>

        Mauris nisl turpis, elementum ut purus a, mattis finibus tellus. Nam ultrices arcu faucibus tortor ullamcorper suscipit. Suspendisse ac facilisis risus. Curabitur hendrerit turpis libero, vel fringilla leo efficitur non. Mauris at arcu quis felis viverra vehicula nec non justo. Sed aliquet rutrum turpis, id tristique risus dapibus in. Vivamus viverra turpis eu dui vestibulum vehicula.</p>
    </div>
    <div className="about-photo">
      <img className="profile" src={require('../images/profile.jpg')} />
      <button className="cv" type="button">View my CV</button>
    </div>
  </div>
);

export default About;
