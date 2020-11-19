import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { UseGet } from "./UseGet";
import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";

const mock = new MockAdapter(axios, { delayResponse: 4000 });

describe("Test UseGet hook", () => {
  it("mock an test UseGet", async () => {
    // arrange
    mock
      .onGet("http://localhost:3004/delay/4")
      .reply(200, { postData: "I'm some post data" });
    const { result, waitForNextUpdate } = renderHook(() => UseGet("delay/4"));

    // act
    act(() => {
      result.current.getData(true);
    });

    // assert
    expect(result.current.getError).toBeFalsy();
    expect(result.current.getLoading).toBeTruthy();
    await waitForNextUpdate();
    expect(result.current.getLoading).toBeFalsy();
  });
});
