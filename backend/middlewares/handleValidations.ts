const { validationResult } = require("express-validator");
import { Request, Response, NextFunction} from 'express';

export const validate = (req: Request, res: Response, next: NextFunction): Response | void => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors: string[] = [];

  errors.array().map((err: any) => extractedErrors.push(err.msg));

  return res.status(422).json({
    errors: extractedErrors,
  });
};