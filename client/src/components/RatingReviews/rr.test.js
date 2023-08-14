const request = require("supertest");
const assert = require("assert");
require("dotenv").config();

// import {screen, mount} from '@testing-library/react';
// import React from 'react';
// import SingleReview from './SingleReview.jsx';
const request = require("supertest");
const assert = require("assert");
require("dotenv").config();

// import {screen, mount} from '@testing-library/react';
// import React from 'react';
// import SingleReview from './SingleReview.jsx';

describe('API calls', () => {
  // var testfunc = function() { return 'Hello'; };
  // var testfunc = function() { return 'Hello'; };
  it ('Should fetch correct reviews data based on product ID', () => {
    const expectedData = [
      {
        "review_id": 1280180,
        "rating": 5,
        "summary": "squidward test review",
        "recommend": true,
        "response": null,
        "body": "just a test haha",
        "date": "2023-06-26T00:00:00.000Z",
        "reviewer_name": "squid",
        "helpfulness": 29,
        "photos": [
        "review_id": 1280180,
        "rating": 5,
        "summary": "squidward test review",
        "recommend": true,
        "response": null,
        "body": "just a test haha",
        "date": "2023-06-26T00:00:00.000Z",
        "reviewer_name": "squid",
        "helpfulness": 29,
        "photos": [
          {
            "id": 2459025,
            "url": "https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png"
            "id": 2459025,
            "url": "https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png"
          },
          {
            "id": 2459026,
            "url": "https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png"
            "id": 2459026,
            "url": "https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png"
          }
        ]
      },
      {
        "review_id": 1135534,
        "rating": 2,
        "summary": "is this working??",
        "recommend": true,
        "response": null,
        "body": "test 111111",
        "date": "2022-02-11T00:00:00.000Z",
        "reviewer_name": "oliver6666",
        "helpfulness": 17,
        "photos": []
        "review_id": 1135534,
        "rating": 2,
        "summary": "is this working??",
        "recommend": true,
        "response": null,
        "body": "test 111111",
        "date": "2022-02-11T00:00:00.000Z",
        "reviewer_name": "oliver6666",
        "helpfulness": 17,
        "photos": []
      },
      {
        "review_id": 1135535,
        "rating": 2,
        "summary": "is this working??",
        "recommend": true,
        "response": null,
        "body": "test 111111",
        "date": "2022-02-11T00:00:00.000Z",
        "reviewer_name": "oliver7777",
        "helpfulness": 4,
        "photos": []
        "review_id": 1135535,
        "rating": 2,
        "summary": "is this working??",
        "recommend": true,
        "response": null,
        "body": "test 111111",
        "date": "2022-02-11T00:00:00.000Z",
        "reviewer_name": "oliver7777",
        "helpfulness": 4,
        "photos": []
      },
      {
        "review_id": 1280179,
        "rating": 5,
        "summary": "squidward test review",
        "recommend": true,
        "response": null,
        "body": "just a test haha",
        "date": "2023-06-26T00:00:00.000Z",
        "reviewer_name": "squid",
        "helpfulness": 2,
        "photos": [
        "review_id": 1280179,
        "rating": 5,
        "summary": "squidward test review",
        "recommend": true,
        "response": null,
        "body": "just a test haha",
        "date": "2023-06-26T00:00:00.000Z",
        "reviewer_name": "squid",
        "helpfulness": 2,
        "photos": [
          {
            "id": 2459023,
            "url": "https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png"
            "id": 2459023,
            "url": "https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png"
          },
          {
            "id": 2459024,
            "url": "https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png"
            "id": 2459024,
            "url": "https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png"
          }
        ]
      },
      {
        "review_id": 1275436,
        "rating": 5,
        "summary": "Chester B Arthur",
        "recommend": true,
        "response": null,
        "body": " let boom = characteristicCreater(); let boom = characteristicCreater();",
        "date": "2022-07-15T00:00:00.000Z",
        "reviewer_name": "johnbarleycorn",
        "helpfulness": 0,
        "photos": []
        "review_id": 1275436,
        "rating": 5,
        "summary": "Chester B Arthur",
        "recommend": true,
        "response": null,
        "body": " let boom = characteristicCreater(); let boom = characteristicCreater();",
        "date": "2022-07-15T00:00:00.000Z",
        "reviewer_name": "johnbarleycorn",
        "helpfulness": 0,
        "photos": []
      }
    ]
    ]

    request('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe')
      .get('/reviews/?product_id=37312')
      .expect(200)
      .expect(res => {
        assert(res.body.results, expectedData);
      })
      .set('Authorization', `${process.env.TOKEN}`)
      .end((err, res) => {
        if (err) {
          throw err;
        }
      })
      })
  });
});

// describe('DOM Testing', () => {
// describe('DOM Testing', () => {

//   it ('Helpful amount should increment when clicked', () => {
//     const setState = jest.fn();
//     const handleClick = jest.spyOn(React, 'useState');
//     const wrapper = mount(<SingleReview />);
//   it ('Helpful amount should increment when clicked', () => {
//     const setState = jest.fn();
//     const handleClick = jest.spyOn(React, 'useState');
//     const wrapper = mount(<SingleReview />);

//     handleClick.mockImplentation(count => [count, changeCount]);
//     const button = screen.getByTestId('helpful');
//     userEvent.click(button);
//     handleClick.mockImplentation(count => [count, changeCount]);
//     const button = screen.getByTestId('helpful');
//     userEvent.click(button);

//     expect(changeCount).toBeCalled();
//   });
// });