import { cookies, cookiesOptions } from "@src/shared/helpers/cookies";
import { COOKIE_NAMES } from "@src/shared/types";

export const removeTokens = () => {
  cookies.remove(COOKIE_NAMES.ACCESS_TOKEN, { ...cookiesOptions });
  cookies.remove(COOKIE_NAMES.REFRESH_TOKEN, { ...cookiesOptions });
};
