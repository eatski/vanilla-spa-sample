export type Params = Record<string, string | undefined>;

const EXTRACT = /\/:[^/]+/g;
const OPTIONAL_SYMBOL = /\?$/;
const OPTIONAL_MATCHER_STRING = "(?:/([^/]+?))?";
const REQUIRED_MATCHER_STRING = "/([^/]+?)";

type ParamResolver = (path: string) => Params | null;

export const matcherToParamResolver = (matcher: string): ParamResolver => {
  const extracted = matcher.match(EXTRACT);
  const keys =
    extracted &&
    extracted
      .map((e) => e.replace(OPTIONAL_SYMBOL, ""))
      .map((e) => e.replace(/^\/:/, ""));
  const exp = matcher.replace(EXTRACT, (e) =>
    OPTIONAL_SYMBOL.test(e) ? OPTIONAL_MATCHER_STRING : REQUIRED_MATCHER_STRING
  );
  const reg = new RegExp(`^${exp}(?:/)?$`);
  return (path) => {
    const res = reg.exec(path);
    if (res) {
      if (keys) {
        const params: Params = {};
        res.slice(1).forEach((e, i) => {
          params[keys[i]] = e;
        });
        return params;
      }
      return {};
    } else {
      return null;
    }
  };
};
