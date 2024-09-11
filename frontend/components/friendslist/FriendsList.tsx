import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { FriendItem } from "../../data/from-friends";

export type CarouselProps = {
	data: Readonly<FriendItem[]>;
};

const borderRadius = 100;
const circleWidth = 80;

function Friend({ imageSource }: FriendItem) {
	return (
		<View style={styles.carouselItem}>
			<Image
				source={{ uri: imageSource }}
				style={{
					borderColor: "#999999",
					borderWidth: 5,
					width: circleWidth,
					height: circleWidth,
					borderRadius: borderRadius,
				}}
			></Image>
		</View>
	);
}

export default function FriendsList({ data }: CarouselProps) {
	return (
		<View style={styles.carousel}>
			<FlatList
				style={{ padding: 10 }}
				data={data}
				renderItem={({ item, index }) => (
					<View>
						<Friend {...item} />
					</View>
				)}
				horizontal
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
		width: circleWidth * 1.2,
	},
});
