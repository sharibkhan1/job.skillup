import * as contentstack from 'contentstack';
import * as Utils from '@contentstack/utils';

const Stack = contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY
    ? process.env.CONTENTSTACK_API_KEY
    : process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
  region: process.env.CONTENTSTACK_REGION ? process.env.CONTENTSTACK_REGION : 'us',
});

// Optional: Custom API host (e.g., for staging)
if (process.env.CONTENTSTACK_API_HOST) {
  Stack.setHost(process.env.CONTENTSTACK_API_HOST);
}

const renderOption = {
  span: (node, next) => next(node.children),
};

export default {
  /**
   * Fetches all entries from a specific content-type
   */
  getEntry({ contentTypeUid, referenceFieldPath, jsonRtePath }) {
    return new Promise((resolve, reject) => {
      const query = Stack.ContentType(contentTypeUid).Query();

      if (referenceFieldPath) query.includeReference(referenceFieldPath);

      query
        .includeOwner()
        .toJSON()
        .find()
        .then(
          (result) => {
            if (jsonRtePath) {
              Utils.jsonToHTML({
                entry: result,
                paths: jsonRtePath,
                renderOption,
              });
            }
            resolve(result);
          },
          (error) => reject(error),
        );
    });
  },

  /**
   * Fetches a specific entry by URL from a content-type
   */
  getEntryByUrl({ contentTypeUid, entryUrl, referenceFieldPath, jsonRtePath }) {
    return new Promise((resolve, reject) => {
      const query = Stack.ContentType(contentTypeUid).Query();

      if (referenceFieldPath) query.includeReference(referenceFieldPath);

      query.includeOwner().toJSON();

      query.where('url', entryUrl).find().then(
        (result) => {
          if (jsonRtePath) {
            Utils.jsonToHTML({
              entry: result,
              paths: jsonRtePath,
              renderOption,
            });
          }
          resolve(result[0]);
        },
        (error) => {
          console.error(error);
          reject(error);
        },
      );
    });
  },
};
