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
  static gettestlist(query: object) {
    return request<any, TestInfo[]>({
      //url: `${SERVER_URL}/user`,
      url: `${USER_BASE_URL}/TestShow`,
      method: "get",
      params: query,
    });
  }
  static gettaskinfo(query: object) {
    return request<any, TaskInfo>({
      //url: `${SERVER_URL}/user`,
      url: `${USER_BASE_URL}/TaskInfo`,
      method: "get",
      params: query,
    });
  }
  static TaskResult(query: object) {
    return request<any, { Task_Result?: string }>({
      url: `${USER_BASE_URL}/TaskResult`,
      method: "get",
      params: query,
    });
  }
  static TaskExec(query: object) {
    return request<any, string>({
      url: `${USER_BASE_URL}/TaskExec`,
      method: "post",
      params: query,
    });
  }
  static TaskDele(query: object) {
    return request<any, string>({
      url: `${USER_BASE_URL}/TaskDele`,
      method: "post",
      params: query,
    });
  }
  static TaskCreate(query: object) {
    return request<any, string>({
      url: `${USER_BASE_URL}/TaskCreate`,
      method: "post",
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
export interface TestInfo {
  name?: string;
  collection?: string;
  model?: string;
  evaluator?: string;
}
