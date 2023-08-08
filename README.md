# Apollo Client issue 

See https://github.com/apollographql/apollo-client/issues/11132

1. Run
   ```shell
   yarn && ./node_modules/.bin/tsc
   ```
2. See unexpected error:
   ```
   node_modules/@apollo/client/utilities/common/responseIterator.d.ts:2:47 - error TS2307: Cannot find module 'node-fetch' or its corresponding type declarations.
   
   2 import type { Response as NodeResponse } from "node-fetch";
   ~~~~~~~~~~~~
   
   
   Found 1 error in node_modules/@apollo/client/utilities/common/responseIterator.d.ts:2
   ```
