import { ErrorCode } from './types';

const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.STORAGE_NOT_ENOUGH_SPACE]: 'Brak wolnego miejsca',
  [ErrorCode.SCREEN_ROLE_EXISTS]: 'Taka rola już istnieje',
  [ErrorCode.SCREEN_WRONG_KEY]: 'Błędny klucz wyświetlacza',
  [ErrorCode.ORGANIZATION_LAST_ADMIN_ROLE]: 'Organizacja musi posiadać minimum jednego administratora',
  [ErrorCode.ORGANIZATION_NOT_ADMIN]: 'Brak uprawnień administratora',
  [ErrorCode.ORGANIZATION_NOT_AUTHORIZED]: 'Brak uprawnień organizacji',
  [ErrorCode.USER_EMAIL_NOT_VERIFIED]: 'Niezweryfikowany adres email',
  [ErrorCode.USER_EXISTS]: 'Taki użytkownik już istnieje',
  [ErrorCode.USER_NOT_EXISTS]: 'Użytkownik nie istnieje',
  [ErrorCode.USER_WRONG_CREDENTIALS]: 'Błędne dane logowania',
  [ErrorCode.USER_WRONG_DATA]: 'Błędne dane użytkownika',
  [ErrorCode.FILE_NOT_EXISTS]: 'Plik nie istnieje',
  [ErrorCode.FILE_NOT_OWNER]: 'Brak uprawnień do pliku',
  [ErrorCode.FILE_KEY_NOT_EXISTS]: 'Taki klucz pliku nie istnieje',
  [ErrorCode.CAPTCHA_INVALID]: 'Błędna captcha',
  [ErrorCode.TOKEN_INVALID]: 'Błędny token',
  [ErrorCode.AUTH_COOKIE_NOT_EXISTS]: 'Brak ciasteczka autoryzacji',
  [ErrorCode.ROLE_NOT_AUTHORIZED]: 'Brak uprawnień do edycji roli',
  [ErrorCode.SLIDE_WRONG_SCREEN]: 'Wystąpił błąd przy łączeniu wyświetlacza i slajdu',
  [ErrorCode.APP_INSTANCE_NOT_AUTHORIZED]: 'Brak uprawnień do edycji instancji',
  [ErrorCode.NOT_FOUND]: 'Nie znaleziono zasobu',
  [ErrorCode.NOT_AUTHORIZED]: 'Brak uprawnień do zasobu',
};

export default ErrorMessages;
