declare module 'express-async-handler' {
    import { RequestHandler } from 'express';
  
    function expressAsyncHandler(handler: RequestHandler): RequestHandler;
  
    export = expressAsyncHandler;
  }
  