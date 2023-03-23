import { DEFAULTS_FOR_COOKIES_MAX_AGE } from "shared/helpers/constants";
import { cookies, cookiesOptions } from "shared/helpers/cookies";
import { COOKIE_NAMES } from "shared/types";

import { extractExpiresInFromToken } from "./extractExpiresInFromToken";

export const saveTokens = ({
  accessToken,
  refreshToken,
}: {
  refreshToken: string;
  accessToken: string;
}) => {
  if (refreshToken) {
    cookies.set(COOKIE_NAMES.REFRESH_TOKEN, refreshToken, {
      maxAge: extractExpiresInFromToken(
        refreshToken,
        DEFAULTS_FOR_COOKIES_MAX_AGE.REFRESH_TOKEN
      ),
      ...cookiesOptions,
    });
  }

  if (accessToken) {
    cookies.set(COOKIE_NAMES.ACCESS_TOKEN, accessToken, {
      maxAge: extractExpiresInFromToken(
        accessToken,
        DEFAULTS_FOR_COOKIES_MAX_AGE.ACCESS_TOKEN
      ),
      ...cookiesOptions,
    });
  }
};
