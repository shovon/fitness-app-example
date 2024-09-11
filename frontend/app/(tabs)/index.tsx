import {
	Image,
	StyleSheet,
	Platform,
	FlatList,
	View,
	Text,
	ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { styled } from "nativewind";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedSafeAreaView } from "../../components/ThemedSafeAreaView";
import Carousel from "../../components/carousel/Carousle";
import { workoutItems } from "../../data/workouts";
import FriendsList from "../../components/friendslist/FriendsList";
import { friendItems } from "../../data/from-friends";
import TodaysPlan from "../../components/todays-plan/TodaysPlan";
import { planItems } from "../../data/todays-plan";

export default function HomeScreen() {
	return (
		<ScrollView style={{ backgroundColor: "white" }}>
			<ThemedSafeAreaView>
				<ThemedView style={styles.stepContainer}>
					<ThemedView
						style={{
							padding: 20,
							paddingBottom: 0,
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>Workouts</Text>
					</ThemedView>
					<Carousel data={workoutItems} />
					<ThemedView
						style={{
							padding: 20,
							paddingBottom: 0,
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							From Friends
						</Text>
					</ThemedView>
					<FriendsList data={friendItems} />
					<ThemedView
						style={{
							padding: 20,
							paddingBottom: 0,
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							Today's Plan
						</Text>
					</ThemedView>

					<ThemedView style={{ padding: 20 }}>
						<TodaysPlan plan={planItems} />
					</ThemedView>
				</ThemedView>
			</ThemedSafeAreaView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
