import React from 'react';

/*
this componet will represent project 
while:
backgroundImg : is the project background image 
status: is the project status 
name : is the project name
*/
const Project = ({ index, backgroundImg, status, name }) => {

    // this function will select the class name sutable for the status tag
    function tag_className() {
        switch (status) {
            case "منجز": return 'done_projects';
            case "تحت التنفيذ": return 'prosses_projects';
            case "تحت التخطيط": return 'design_projects';
            default: return ''
        }
    }

    return (
        <div className="project fade" style={{
            backgroundImage: backgroundImg,
            animationDelay: `${index * .5}s`
        }}>
            <h6 className={"status " + tag_className()} >{status}</h6>
            <h3 className="project_name whiteColor">{name}</h3>
        </div>
    );
};

export default Project;