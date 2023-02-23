import React from 'react';
import { Icon } from '@iconify/react';
import "./atom-techIcons.css";


function TechIcons({html, css, javascript, react, angular, vue, python, php, laravel, sql}) {
  const techStack = [];

    if (html) {
        techStack.push(<Icon icon="vscode-icons:file-type-html" color="white"  width="50" height="50" key="html" /> );
    }
  
    if (css) {
        techStack.push(<Icon icon="vscode-icons:file-type-css" color="white"  width="50" height="50" key="css"/> );
    }

    if (javascript) {
        techStack.push(<Icon icon="logos:javascript" color="white"  width="50" height="50" key="javascript" />);
    }

    if (react) {
        techStack.push(<Icon icon="skill-icons:react-light" color="white"  width="50" height="50" key="react"/> );
    }

    if (angular) {
        techStack.push(<Icon icon="skill-icons:angular-light" color="white"  width="50" height="50" key="angular" />);
    }

    if (vue) {
        techStack.push(<Icon icon="skill-icons:vuejs-light" color="white"  width="50" height="50" key="vue" />);
    }

    if (python) {
        techStack.push(<Icon icon="skill-icons:python-light" color="white"  width="50" height="50" key="python" />);
    }

    if (php) {
        techStack.push(<Icon icon="logos:php" color="white"  width="50" height="50" key="php" />);
    }

    if (laravel) {
        techStack.push(<Icon icon="skill-icons:laravel-light" color="white"  width="50" height="50" key="laravel" />);
    }

    if (sql) {
        techStack.push(<Icon icon="vscode-icons:file-type-sql" color="white"  width="50" height="50" key="sql" />);
    }

    return (
    <div className="mystack-container">
        <h2 className="mystack-title"> Mi stack tecnológico</h2>
        <div className="techIcon-container">
            {techStack.map((icon) =>(
                <span key={icon.key} className="techIcon-icon">{icon}</span>
            ))}
        </div>
    </div>
  )
}

export default TechIcons