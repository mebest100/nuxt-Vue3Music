import { UseFetchOptions } from "nuxt/app";
import { KeysOf } from "nuxt/dist/app/composables/asyncData";

export  const useApiFetch  = (
  request: any,
  options?: UseFetchOptions<any, any, KeysOf<any>, null, any, "get"> | undefined
) => {
  const config = useRuntimeConfig();

  return useFetch(request, {
    baseURL: config.public.API_BASE_URL,
    ...options,
  });
};
