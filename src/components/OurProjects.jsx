import React, { Component } from 'react';
import { getProjects } from "../fakeProjects";
import Button from "./common/Button";
import Project from "./common/Project";
import PageHeader from "./common/PageHeader";


export class OurProjects extends Component {
    state = {
        projects: getProjects()
    }

    // this function will fillter the projects based on which tag( project status ) user click
    handleClick = ({ currentTarget: element }) => {
        const projects = getProjects();
        let tag = element.textContent;
        if (tag === 'كل المشاريع') {
            this.setState({ projects: projects })
        } else {
            let fillter_Projects = projects.filter(p => p.status === tag);
            this.setState({ projects: fillter_Projects })
        }
    }

    render() {
        const projects = this.state.projects;

        return (
            <div className="text-right" style={{ backgroundColor: 'white', padding: '10px', paddingTop: '0', direction: 'rtl' }}>
                <div className="container">
                    <PageHeader />
                    <div id="tags_contanier">

                        {/* tags */}
                        <h3 id="tags_title">يمكنك تصفية  المشاريع باختيار حالتها </h3>
                        <Button classname="tag whiteColor all_projects" label='كل المشاريع' handleClick={this.handleClick}></Button>
                        <Button classname="tag whiteColor done_projects" label='منجز' handleClick={this.handleClick}></Button>
                        <Button classname="tag whiteColor prosses_projects" label='تحت التنفيذ' handleClick={this.handleClick}></Button>
                        <Button classname="tag whiteColor design_projects" label='تحت التخطيط' handleClick={this.handleClick}></Button>
                    </div>
                    {/* projects */}
                    <div className="row">
                        {projects.map((project, index) => (
                            <div className="col-md-6 col-lg-4 service_continer" key={project + index}>
                                <Project
                                    index={index}
                                    backgroundImg={project.backgroundImg}
                                    status={project.status}
                                    name={project.name} />
                            </div>
                        ))}</div>

                </div>
            </div>
        )
    }
}

export default OurProjects;