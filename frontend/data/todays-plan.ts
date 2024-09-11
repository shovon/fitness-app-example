export type PlanItem = Readonly<{
	name: string;
	imageSource: string;
}>;

export const planItems: Readonly<PlanItem[]> = Object.freeze([
	{
		name: "Pushups",
		imageSource: "https://workout-app-example.s3.amazonaws.com/pushup.jpg",
	},
	{
		name: "Pullups",
		imageSource: "https://workout-app-example.s3.amazonaws.com/pullups.jpg",
	},
]);
