const User = require('../src/User');
import {describe, expect, test} from '@jest/globals'

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  
  // test age
})


// test login

// test logout
