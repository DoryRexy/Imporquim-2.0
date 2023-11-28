import type { NextApiRequest, NextApiResponse } from "next";
import config from "package.json";

type Data = {
  name: string;
  version: string;
  license: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: config.name,
    version: config.version,
    license: config.license,
  });
}
