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
            backgroundImage: `url('https://images.unsplash.com/photo-1619883758740-410caf79a63e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')`,
            animationDelay: `${index * .5}s`
        }}>
            <h6 className={"status " + tag_className()} >{status}</h6>
            <h3 className="project_name whiteColor">{name}</h3>
        </div>
    );
};

export default Project;