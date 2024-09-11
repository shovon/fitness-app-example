export type WorkoutItem = Readonly<{
	title: string;
	imageSource: string;
}>;

export const workoutItems: Readonly<WorkoutItem[]> = Object.freeze([
	{
		title: "Cardio",
		imageSource: "https://workout-app-example.s3.amazonaws.com/cardio.jpg",
	},
	{
		title: "Calisthenics",
		imageSource:
			"https://workout-app-example.s3.amazonaws.com/calisthenics.jpg",
	},
	{
		title: "Cycling",
		imageSource: "https://workout-app-example.s3.amazonaws.com/cycling.png",
	},
	{
		title: "High Intensity Interval Training",
		imageSource: "https://workout-app-example.s3.amazonaws.com/hiit.jpg",
	},
	{
		title: "Kettlebells",
		imageSource: "https://workout-app-example.s3.amazonaws.com/kettlebells.jpg",
	},
	{
		title: "Strength",
		imageSource: "https://workout-app-example.s3.amazonaws.com/strength.jpg",
	},
]);
