export const apiPath = '/api';

// test razorpay key

export const razarpayKey = 'rzp_test_6qBh5nVVZOjFzU';
export const apikey = '3d2826bd-4883-4014-9bd5-6edb9adddf36';
export const keyname = 'JinglebidEventTracker';
export const eventtrackenable = true;
export const errortrackenable = true;
export const eventtrackurl =
  'https://dev-event-tracker.apps.kaaylabs.com/api/v1/event-tracker';
export const errortrackurl =
  'https://dev-event-tracker.apps.kaaylabs.com/api/v1/event-error';
export const errorkeyname = 'JinglebidErrorTracker';
export const socketEndPoint = 'https://dev.jinglebid.com/';
export const googleConversionPurchase = 'AW-299764950/u0SkCM-6p4UDENaZ-I4B';

// prod event tracker and razorpay key
// uncomment below exports for production

// export const apikey = 'bbeb869b-79a2-4af2-b031-37d4f63905dc';
// export const keyname = 'JinglebidEventTracker';
// export const eventtrackenable = true;
// export const errortrackenable = true;
// export const eventtrackurl =
//   'https://event-tracker.apps.kaaylabs.com/api/v1/event-tracker';
// export const errortrackurl =
//   'https://event-tracker.apps.kaaylabs.com/api/v1/event-error';
// export const errorkeyname = 'JinglebidErrorTracker';
// export const razarpayKey = 'rzp_live_F32c28uTHSFpld';
// export const socketEndPoint = 'https://www.jinglebid.com/';
// export const googleConversionPurchase = 'AW-299764950/u0SkCM-6p4UDENaZ-I4B';

export const getAPIUrl = () => {
  // Dev Api
  // return 'https://dev.jinglebid.com/api/v1/';
  // Qa Api
  // return 'https://qa.jinglebid.com/api/v1/';
  // Preprod Api
  return 'https://preprod.jinglebid.com/api/v1/';
  // Prod Api
  // return 'https://www.jinglebid.com/api/v1/';
  // local api
  // return 'http://192.168.3.51:5000/api/v1/';
};

// export const socketEndPoint = 'https://qa.jinglebid.com/';
// export const socketEndPoint = 'https://preprod.jinglebid.com/';
// export const socketEndPoint = 'http://192.168.1.12:5000/';
