import { Image, Text, View } from "react-native";
import { PlanItem } from "../../data/todays-plan";

export type TodaysPlanProps = {
	plan: Readonly<PlanItem[]>;
};

const borderRadius = 20;

export default function TodaysPlan({ plan }: TodaysPlanProps) {
	return (
		<>
			{plan.map((p) => (
				<View
					style={{
						backgroundColor: "#f5f5f5",
						borderRadius,
						display: "flex",
						flexDirection: "row",
						marginBottom: 20,
					}}
				>
					<Image
						source={{ uri: p.imageSource }}
						style={{
							width: 100,
							height: 100,
							borderTopLeftRadius: borderRadius,
							borderBottomLeftRadius: borderRadius,
						}}
					/>
					<View style={{ padding: 10 }}>
						<Text
							style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
						>
							{p.name}
						</Text>
						<Text>{p.name}</Text>
					</View>
				</View>
			))}
		</>
	);
}
