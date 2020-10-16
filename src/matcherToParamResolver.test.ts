import { matcherToParamResolver } from "./matcherToParamResolver";

test("マッチャーを受け取り、URLから変数を抽出もしくはマッチしない場合にnullを返却する", () => {
  expect(matcherToParamResolver("/b")("/a")).toBeNull();
  expect(matcherToParamResolver("/")("/a")).toBeNull();
  expect(matcherToParamResolver("/")("/")).toEqual({});
  expect(matcherToParamResolver("/:id")("/aa")).toEqual({ id: "aa" });
  expect(matcherToParamResolver("/hoge/:id")("/hoge/aaa")).toEqual({
    id: "aaa",
  });
  expect(matcherToParamResolver("/hoge/:locale/:id")("/hoge/ja/15")).toEqual({
    id: "15",
    locale: "ja",
  });
});
