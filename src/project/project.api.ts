import {Api} from "../api_service/api_service";

export class ProjectApi {
	public static ACTIVEPROJECTS(param: any) {
		return Api.build('projects', param);
	}
}
