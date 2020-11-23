const request = require('request');
API_KEY = 'AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ';
outputFormat = 'json';
var Api = 'https://maps.googleapis.com/maps/api/distancematrix/'+ outputFormat;
// Api = 'https://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters';

const getDistanceFromJson = (json) =>{
console.log( json);
}

const getDistanceFromGoogle =(origin,destination) => {
  Api = Api+ '?origins='+ origin +
  '&destinations='+ destination +
  '&key='+API_KEY;
console.log(Api);
request(Api,function(error,response,body)
{
  if (!error && response.statusCode == 200) {
    console.log(response.statusCode) // Show the HTML for the Google homepage.
   return  getDistanceFromJson(response);
  }
})
}

getDistanceFromGoogle ('Niss','Jerusalem');

module.exports ={
  getDistanceFromGoogle
}

// {
//   "status": "OK",
//   "origin_addresses": [
//     "Vancouver, BC, Canada",
//     "Seattle, État de Washington, États-Unis"
//   ],
//   "destination_addresses": [
//     "San Francisco, Californie, États-Unis",
//     "Victoria, BC, Canada"
//   ],
//   "rows": [
//     {
//       "elements": [
//         {
//           "status": "OK",
//           "duration": {
//             "value": 340110,
//             "text": "3 jours 22 heures"
//           },
//           "distance": {
//             "value": 1734542,
//             "text": "1 735 km"
//           }
//         },
//         {
//           "status": "OK",
//           "duration": {
//             "value": 24487,
//             "text": "6 heures 48 minutes"
//           },
//           "distance": {
//             "value": 129324,
//             "text": "129 km"
//           }
//         }
//       ]
//     },
//     {
//       "elements": [
//         {
//           "status": "OK",
//           "duration": {
//             "value": 288834,
//             "text": "3 jours 8 heures"
//           },
//           "distance": {
//             "value": 1489604,
//             "text": "1 490 km"
//           }
//         },
//         {
//           "status": "OK",
//           "duration": {
//             "value": 14388,
//             "text": "4 heures 0 minutes"
//           },
//           "distance": {
//             "value": 135822,
//             "text": "136 km"
//           }
//         }
//       ]
//     }
//   ]
// }
