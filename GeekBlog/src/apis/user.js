// 用户相关的请求
import { request } from "@/utils";

// 1. 登录请求
function loginApi(formData) {
  return request({
    url: "/authorizations",
    method: "POST",
    data: formData,
  });
}

// 2. 获取用户信息
function getProfileAPI() {
  return request({
    url: "/user/profile",
    method: "GET",
  });
}

export { loginApi, getProfileAPI };
