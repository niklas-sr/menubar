import urlcat, { ParamMap } from 'urlcat';

export class Api {
	public static readonly BASE_PATH: string =
		'https://respektive1.mocoapp.com/api/v1/';

	public static build = (pathTemplate: string, params: ParamMap): string => {
		console.log(urlcat(Api.BASE_PATH, pathTemplate, params));
		return urlcat(Api.BASE_PATH, pathTemplate, params);
	};

	public static buildWithoutParams = (pathTemplate: string): string => {
		console.log(urlcat(Api.BASE_PATH, pathTemplate));
		return urlcat(Api.BASE_PATH, pathTemplate);
	};
}
