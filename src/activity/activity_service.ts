import ClientRequest = Electron.ClientRequest;
import request from 'electron-request'
import { Activity } from './activity.model'



export class ActivityService {

	getActivity(): Promise<Activity>

}
