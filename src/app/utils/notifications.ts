import { toast } from 'sonner';

/**
 * Утилиты для показа уведомлений
 */

export const notifications = {
  /**
   * Показать успешное уведомление
   */
  success: (message: string, description?: string) => {
    toast.success(message, {
      description,
    });
  },

  /**
   * Показать уведомление об ошибке
   */
  error: (message: string, description?: string) => {
    toast.error(message, {
      description,
    });
  },

  /**
   * Показать информационное уведомление
   */
  info: (message: string, description?: string) => {
    toast.info(message, {
      description,
    });
  },

  /**
   * Показать предупреждение
   */
  warning: (message: string, description?: string) => {
    toast.warning(message, {
      description,
    });
  },

  /**
   * Показать уведомление о загрузке с автоматическим обновлением
   */
  loading: (message: string) => {
    return toast.loading(message);
  },

  /**
   * Показать промис-уведомление (автоматически обновляется при успехе/ошибке)
   */
  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: unknown) => string);
    }
  ) => {
    return toast.promise(promise, messages);
  },
};
