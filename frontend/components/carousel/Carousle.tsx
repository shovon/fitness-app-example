import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { WorkoutItem } from "../../data/workouts";
import { LinearGradient } from "expo-linear-gradient";

export type CarouselProps = {
	data: Readonly<WorkoutItem[]>;
};

const borderRadius = 20;

const imageWidth = 370;
const imageHeight = 200;
const imageWidthScaling = 0.85;

function CarouselItem({ title, imageSource }: WorkoutItem) {
	return (
		<View style={styles.carouselItem}>
			<Image
				source={{ uri: imageSource }}
				style={{
					width: imageWidth * imageWidthScaling,
					height: imageHeight,
					borderRadius: borderRadius,
				}}
			></Image>
			<LinearGradient
				colors={["transparent", "rgba(0, 0, 0, 0.25)"]}
				style={styles.carouselItemBackground}
			>
				<View></View>
				<Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
			</LinearGradient>
		</View>
	);
}

export default function Carousel({ data }: CarouselProps) {
	return (
		<View style={styles.carousel}>
			<FlatList
				style={{ padding: 10 }}
				data={data}
				renderItem={({ item, index }) => (
					<View>
						<CarouselItem {...item} />
					</View>
				)}
				decelerationRate={"fast"}
				snapToInterval={imageWidth * imageWidthScaling}
				horizontal
				showsHorizontalScrollIndicator={false}
				// pagingEnabled
			/>
		</View>
	);
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
	carousel: {},

	carouselItem: {
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
		width: width * imageWidthScaling,
	},

	carouselItemBackground: {
		justifyContent: "space-between",
		position: "absolute",
		height: imageHeight,
		width: imageWidth * imageWidthScaling,
		padding: 20,
		bottom: 0,
		borderBottomLeftRadius: borderRadius,
		borderBottomRightRadius: borderRadius,
	},
});
