import { Request, Response } from 'express';

import httpCode from '../utils/httpcodes';
import Vote, { VoteCounter } from '../interfaces/Vote.interface';
import VoteModel from '../models/Vote.model';

class VoteController {
	/**
	 *
	 * @param req express.Request
	 * @param res express.Response
	 * @description Add or remove votes of a specific comment or post.
	 */
	static addVote = (req: Request, res: Response) => {
		try {
			const body: Vote = { ...req.body };

			VoteModel.create({ ...body })
				.then((result) => {
					return res.status(httpCode.ACCEPTED).json(result);
				})
				.catch((error) => {
					return res.status(httpCode.BAD_REQUEST).json(error);
				});
		} catch (error) {
			return res.status(httpCode.INTERNAL_SERVER_ERROR).json(error);
		}
	};

	/**
	 *
	 * @param parentId string
	 * @returns VoteCounter
	 * @description Count votes of a specific comment or post and returns both upvote and downvote number.
	 */
	static countVotes = (parentId: string): VoteCounter => {
		try {
			throw new Error('Method not implemented.');
		} catch (error: any) {
			return error;
		}
	};
}

export default VoteController;