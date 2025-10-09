import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 한 번만 재시도
      refetchOnWindowFocus: false, // 앱이 포커스될 때 refetch 안 함
      staleTime: 1000 * 60, // 1분 동안 fresh
      gcTime: 1000 * 60 * 5, // 5분간 캐시 유지
    },
    mutations: {
      retry: 0, // mutation은 실패 시 재시도 안 함
    },
  },
});
