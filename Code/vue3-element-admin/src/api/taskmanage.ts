import request from "@/utils/request";
//import SERVER_URL from "@/App.vue";
const USER_BASE_URL = "/api/v1/users";
class TaskAPI {
  static gettasklist(query: object) {
    return request<any, Tasklist[]>({
      //url: `${SERVER_URL}/user`,
      url: `${USER_BASE_URL}/TaskShow`,
      method: "get",
      params: query,
    });
  }
  static gettaskinfo(query: object) {
    return request<any, TaskInfo[]>({
      //url: `${SERVER_URL}/user`,
      url: `${USER_BASE_URL}/TaskInfo`,
      method: "get",
      params: query,
    });
  }
}
export default TaskAPI;
export interface Tasklist {
  // 任务名称
  name?: string;
  // 任务状态
  state?: string;
}
export interface TaskInfo {
  // 任务状态
  state?: string;
  // 越狱率
  escapeRate?: string;
}
