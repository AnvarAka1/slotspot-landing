import { MS_IN_SECOND } from "@src/shared/helpers/constants";
import jwtDecode from "jwt-decode";

export const extractExpiresInFromToken = (
  token: string,
  defaultExpiresIn: number
) => {
  const { exp: expiresIn } = jwtDecode<{ exp: number }>(token);

  return expiresIn ? expiresIn * MS_IN_SECOND - Date.now() : defaultExpiresIn;
};
