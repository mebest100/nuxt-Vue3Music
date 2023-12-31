import request from '@/utils/request'
import type {
  AlbumReq,
  AlbumResp,
  RecommendResp,  
  ApiResponse
} from "@/types/api/recommend";
 
// const baseUrl =  useRuntimeConfig().public.API_BASE_URL;

interface ApiResponse<T> {
  code: string,
  result: T
}

export default class RecommendServer {
  // 获取推荐信息
  static getRecommend(): Promise<RecommendResp> {         
    return useApiFetch<ApiResponse<RecommendResp>>("/getRecommend").then(({ data }) => {
      // console.log("recommend data==>", data.value);
      return Promise.resolve(data.value!.result);
    });
  };

  // 获取专辑
  static getAlbum(params: AlbumReq): Promise<AlbumResp> {
    return request.request({
      url: "/getAlbum",
      params,
    });
  }
}
