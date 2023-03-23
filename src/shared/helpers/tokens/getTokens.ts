import { cookies } from "shared/helpers/cookies";
import { COOKIE_NAMES } from "shared/types";

export const getTokens = (): { accessToken: string; refreshToken: string } => ({
  accessToken: cookies.get<string>(COOKIE_NAMES.ACCESS_TOKEN) ?? "",
  refreshToken: cookies.get<string>(COOKIE_NAMES.REFRESH_TOKEN) ?? "",
});
