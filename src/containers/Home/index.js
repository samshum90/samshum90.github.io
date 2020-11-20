import React from "react";

import { Section } from '../../components';
import { About, Header, Projects, Skills } from "../../sections";
 
const sections = [
  { name: 'home', Component: Header, title: 'Home' },
  { name: 'skills', Component: Skills, title: 'What I know' },
  { name: 'projects', Component: Projects, title: 'Projects' },
  { name: 'about', Component: About, title: 'About me' },
];

const Home = () => {
    return (
    <>
        <Header />
            <main>
            {sections.map(({ Component, name, title }) => {
            return (
              name !== 'home' && (
                <Section id={name} title={title} key={name}>
                  <Component />
                </Section>
              )
            );
          })}
             </main>
    </>
)
}

export default Home;