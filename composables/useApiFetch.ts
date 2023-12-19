export function useApiFetch<T>(requestUrl: string, options?: any) {
  const config = useRuntimeConfig();

  return useFetch<T>(requestUrl, {
    baseURL: config.public.API_BASE_URL,
    ...options,
  });
}
