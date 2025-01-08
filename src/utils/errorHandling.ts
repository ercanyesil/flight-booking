export enum ErrorType {
  NETWORK = 'NETWORK',
  SERVER = 'SERVER',
  VALIDATION = 'VALIDATION',
  NOT_FOUND = 'NOT_FOUND',
  UNKNOWN = 'UNKNOWN'
}

interface ErrorMessages {
  [ErrorType.NETWORK]: string;
  [ErrorType.SERVER]: string;
  [ErrorType.VALIDATION]: string;
  [ErrorType.NOT_FOUND]: string;
  [ErrorType.UNKNOWN]: string;
}

const errorMessages: ErrorMessages = {
  [ErrorType.NETWORK]: 'İnternet bağlantınızı kontrol edin ve tekrar deneyin.',
  [ErrorType.SERVER]: 'Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.',
  [ErrorType.VALIDATION]: 'Girdiğiniz bilgileri kontrol edin.',
  [ErrorType.NOT_FOUND]: 'İstek yapılan kaynak bulunamadı.',
  [ErrorType.UNKNOWN]: 'Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
};

interface ApiError {
  response?: {
    status: number;
  };
}

export const getErrorMessage = (error: unknown): { type: ErrorType; message: string } => {
  if (!navigator.onLine) {
    return { type: ErrorType.NETWORK, message: errorMessages[ErrorType.NETWORK] };
  }

  if (error && typeof error === 'object' && 'response' in error) {
    const apiError = error as ApiError;
    switch (apiError.response?.status) {
      case 404:
        return { type: ErrorType.NOT_FOUND, message: errorMessages[ErrorType.NOT_FOUND] };
      case 400:
        return { type: ErrorType.VALIDATION, message: errorMessages[ErrorType.VALIDATION] };
      case 500:
        return { type: ErrorType.SERVER, message: errorMessages[ErrorType.SERVER] };
      default:
        return { type: ErrorType.UNKNOWN, message: errorMessages[ErrorType.UNKNOWN] };
    }
  }

  return { type: ErrorType.UNKNOWN, message: errorMessages[ErrorType.UNKNOWN] };
}; 