//import request from "@/utils/request";
//import SERVER_URL from "@/App.vue";
import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
const USER_BASE_URL = "api";

const request = axios.create({
  baseURL: "http://192.168.132.139",
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});
class TaskAPI {
  static gettasklist(query: object) {
    return request({
      //url: `${SERVER_URL}/user`,
      url: `${USER_BASE_URL}/TaskShow`,
      method: "get",
      params: query,
    });
  }
  static gettestlist(query: object) {
    return request({
      //url: `${SERVER_URL}/user`,
      url: `${USER_BASE_URL}/TestShow`,
      method: "get",
      params: query,
    });
  }
  static gettaskinfo(query: object) {
    return request({
      //url: `${SERVER_URL}/user`,
      url: `${USER_BASE_URL}/TaskInfo`,
      method: "get",
      params: query,
    });
  }
  static TaskResult(query: object) {
    return request({
      url: `${USER_BASE_URL}/TaskResult`,
      method: "get",
      params: query,
    });
  }
  static TaskExec(query: object) {
    return request({
      url: `${USER_BASE_URL}/TaskExec`,
      method: "post",
      data: query,
    });
  }
  static TaskDele(query: object) {
    return request<any, string>({
      url: `${USER_BASE_URL}/TaskDele`,
      method: "post",
      data: query,
    });
  }
  static TaskCreate(query: object) {
    return request<any, string>({
      url: `${USER_BASE_URL}/TaskCreate`,
      method: "post",
      data: query,
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
  name?: string;
  collection?: string;
  model?: string;
  evaluator?: string;
  cate?: string;
  state?: string;
  escapeRate?: string;
}
export interface TestInfo {
  name?: string;
  collection?: string;
  model?: string;
  evaluator?: string;
  cate?: string;
  state?: string;
}
