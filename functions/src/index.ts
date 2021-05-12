import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
//const cors = require('cors')({origin: true});

admin.initializeApp();

export const helloWorld = functions.https.onCall(async (data, context) => {
  // cors(request, response, async () => {
  //   const msg = request.query.text;
  //   const writeResult = await admin.firestore().collection('debug').add({message: msg});
  //   response.json({result: `Message with ID: ${writeResult.id} added.`});
  // });
  const text = data.text;
  const writeResult = await admin.firestore().collection('debug').add({message: text, iter: 0, date: new Date()});
  return {result: `Message with ID: ${writeResult.id} added. iter0`};
});
