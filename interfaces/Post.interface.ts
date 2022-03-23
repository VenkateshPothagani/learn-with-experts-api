import { Schema } from 'mongoose';

interface Post {
	id?: Schema.Types.ObjectId;
	userId: Schema.Types.ObjectId;
	type: 'post' | 'question';
	description: string;
	timestamp: Schema.Types.Date;
}

export default Post;
