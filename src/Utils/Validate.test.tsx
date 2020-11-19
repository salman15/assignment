import "@testing-library/react";
import {
  validateSignUp,
  validEmail,
  validName,
  validPassword,
} from "./Validate";

describe("Test is validations work as intended", () => {
  it("Test if name validation works as intended", () => {
    // Act
    const correctName = validName("John");
    const inCorrectName = validName("John1");

    // Assert
    expect(correctName).toBeTruthy();
    expect(inCorrectName).toBeFalsy();
  });

  it("Test if email validation works as intended", () => {
    // Act
    const correctEmail = validEmail("john@mail.com");
    const inCorrectEmail = validEmail("john@mail");

    // Assert
    expect(correctEmail).toBeTruthy();
    expect(inCorrectEmail).toBeFalsy();
  });

  it("Test if password validation works as intended", () => {
    // Act
    const correctPassword = validPassword("MyPassword");
    const inCorrectPassword = validPassword("mypassword");

    // Assert
    expect(correctPassword).toBeTruthy();
    expect(inCorrectPassword).toBeFalsy();
  });

  it("Test if sign up validation works as intended", () => {
    //Arrange
    const signupDataCorrect = {
      firstName: "John",
      lastName: "Wick",
      email: "john@mail.com",
      password: "MyPassword",
    };
    const signupDataInCorrect = {
      firstName: "John1",
      lastName: "Wick2",
      email: "john@mail.",
      password: "mypassword",
    };

    // Act
    const correctSignupData = validateSignUp(signupDataCorrect);
    const inCorrectSignupData = validateSignUp(signupDataInCorrect);

    // Assert
    expect(correctSignupData).toBeTruthy();
    expect(inCorrectSignupData).toBeFalsy();
  });
});
