import {Customer} from "./customer_model";
import {Task} from "../task/task_model";

export interface Project {
	id?: string,
	identifier?: string,
	name?: string,
	active?: boolean,
	billable?: boolean,
	customer?: Customer,
	tasks?: Task[]
}

export function createProject(): Project {
	return {
		id: '',
		identifier: '',
		name: '',
		active: true,
		billable: false,
		customer: undefined,
		tasks: undefined
	}

}
