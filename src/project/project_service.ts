import http from 'http'
import {createProject, Project} from './project_model'
import {ProjectApi} from "./project.api";



export class ActivityService {

	getActivePorjects = async(): Promise<Project> => {
		let project = createProject()
		await fetch(ProjectApi.ACTIVEPROJECTS({active: true}))
			.then(res => res.json())
			.then(data => {
				project.id = data.id;
				project.name = data.name;
				project.identifier = data.identifier;
				project.active = data.active;
				project.tasks = data.task;
				project.billable = data.billable;
				project.customer = data.customer;
			})
		return project
	}

}
