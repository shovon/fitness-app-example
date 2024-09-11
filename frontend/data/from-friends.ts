export type FriendItem = Readonly<{
	imageSource: string;
}>;

export const friendItems: Readonly<FriendItem[]> = Object.freeze([
	{
		imageSource: "https://workout-app-example.s3.amazonaws.com/shirtless1.jpg",
	},
	{
		imageSource: "https://workout-app-example.s3.amazonaws.com/shirtless2.jpg",
	},
	{
		imageSource: "https://workout-app-example.s3.amazonaws.com/shirtless7.jpg",
	},
	{
		imageSource: "https://workout-app-example.s3.amazonaws.com/shirtless4.jpg",
	},
	{
		imageSource: "https://workout-app-example.s3.amazonaws.com/shirtless5.jpg",
	},
	{
		imageSource: "https://workout-app-example.s3.amazonaws.com/shirtless6.jpg",
	},
]);
