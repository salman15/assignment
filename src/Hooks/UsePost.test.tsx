import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { UsePost } from "./UsePost";
import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";

const mock = new MockAdapter(axios, { delayResponse: 0 });

describe("Test UsePost hook", () => {
  it("mock an test UsePost", async () => {
    // arrange
    mock
      .onPost("http://localhost:3004/mock_call")
      .reply(200, { postData: "I'm some post data" });
    const { result, waitForNextUpdate } = renderHook(() =>
      UsePost("mock_call", {})
    );

    // act
    act(() => {
      result.current.sendPost(true);
    });

    // assert
    expect(result.current.postError).toBeFalsy();
    expect(result.current.postLoading).toBeTruthy();
    await waitForNextUpdate();
    expect(result.current.postLoading).toBeFalsy();
  });
});
