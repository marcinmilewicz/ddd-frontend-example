import { loggingInterceptor } from './logging.interceptor';

export const httpInterceptorProviders = [loggingInterceptor];
