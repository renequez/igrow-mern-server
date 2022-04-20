import { Request, Response } from 'express';

export const getBase = async (req: Request, res: Response): Promise<Response> => {
	return res.status(200).json({
		message: 'home!',
	});
};
