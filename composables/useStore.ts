import type { APIError, State } from "~/types";

const state = reactive<State>({
  isLoading: false,
  appError: null,
  isConfirmModalVisible: false,
});

export default () => {
  const { isLoading, appError, isConfirmModalVisible } = toRefs(state);
  const toast = useToast();

  const toggleLoading = (v: boolean) => {
    state.isLoading = v;
  };

  const toggleAlertModal = (v: boolean) => {
    state.isConfirmModalVisible = v;
  };

  const toggleError = (error: null | APIError) => {
    state.appError = error;
  };

  const showMessage = (content: { title: string; description?: string }) => {
    toast.add({
      title: content.title,
      description: content.description,
      color: "primary",
    });
  };

  const showError = (error: APIError) => {
    toast.add({
      title: error.statusCode + "",
      description: error.message ? error.message : error.statusMessage,
      color: "red",
    });
  };

  // เพิ่มฟังก์ชัน fetchApi
  const baseUrl = process.env.NUXT_PUBLIC_API_BASE_URL;

  async function fetchApi(endpoint: string, options?: RequestInit) {
    toggleLoading(true);
    toggleError(null);

    try {
      const res = await fetch(`${baseUrl}${endpoint}`, options);
      if (!res.ok) {
        const errorBody = await res.json();
        const apiError: APIError = {
          statusCode: res.status,
          message: errorBody.message || res.statusText,
          statusMessage: res.statusText,
        };
        toggleError(apiError);
        showError(apiError);
        throw new Error(apiError.message);
      }
      const data = await res.json();
      toggleLoading(false);
      return data;
    } catch (error) {
      toggleLoading(false);
      showError({
        statusCode: 0,
        message: (error as Error).message,
        statusMessage: "Network error",
      });
      throw error;
    }
  }
  return {
    isLoading,
    appError,
    isConfirmModalVisible,
    showError,
    toggleLoading,
    toggleAlertModal,
    toggleError,
    showMessage,
    fetchApi,
  };
};
