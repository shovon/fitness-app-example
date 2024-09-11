import React, { useCallback, useRef, useState } from "react";
import { FlatList, Dimensions, View, StyleSheet, Text } from "react-native";
import { videos } from "../../data/videos";
import { useVideoPlayer, VideoView } from "expo-video";
import { ThemedSafeAreaView } from "../../components/ThemedSafeAreaView";
import { useFocusEffect } from "expo-router";

const { height } = Dimensions.get("window");

// const AutoPlayVideos = () => {
// 	const [currentIndex, setCurrentIndex] = useState(0); // Keep track of which video is in view
// 	const onViewableItemsChanged = useRef(
// 		({
// 			viewableItems,
// 		}: {
// 			viewableItems: { item: (typeof videos)[number]; index: number }[];
// 		}) => {
// 			if (viewableItems.length > 0) {
// 				setCurrentIndex(viewableItems[0].index);
// 			}
// 		}
// 	).current;
// 	const player = useVideoPlayer(videos[currentIndex]!.videoUrl, (player) => {
// 		player.loop = true;
// 		player.play();
// 	});

// 	return (
// 		<FlatList
// 			data={videos}
// 			contentContainerStyle={{
// 				flexGrow: 1,
// 			}}
// 			renderItem={({ item, index }) => (
// 				<View style={styles.videoContainer}>
// 					<VideoView
// 						style={styles.video}
// 						player={player}
// 						// resizeMode="cover"
// 						// repeat
// 						// paused={currentIndex !== index} // Only auto-play if the current video is in view
// 					/>
// 				</View>
// 			)}
// 			keyExtractor={(item) => item.id}
// 			pagingEnabled
// 			showsVerticalScrollIndicator={false}
// 			// snapToAlignment="start"
// 			// decelerationRate="fast"
// 			onViewableItemsChanged={onViewableItemsChanged as any}
// 			viewabilityConfig={{
// 				viewAreaCoveragePercentThreshold: 50, // Trigger index change when 50% of video is visible
// 			}}
// 		/>
// 	);
// };

const AutoPlayVideos = () => {
	const [parentHeight, setParentHeight] = useState(0);

	const [currentIndex, setCurrentIndex] = useState(0); // Keep track of which video is in view
	const onViewableItemsChanged = useRef(
		({
			viewableItems,
		}: {
			viewableItems: { item: (typeof videos)[number]; index: number }[];
		}) => {
			if (viewableItems.length > 0) {
				setCurrentIndex(viewableItems[0].index);
			}
		}
	).current;
	const player = useVideoPlayer(videos[currentIndex]!.videoUrl, (player) => {
		player.loop = true;
		player.play();
	});

	useFocusEffect(
		useCallback(() => {
			player.play();
			return () => {
				try {
					player?.pause();
				} catch {}
			};
		}, [player])
	);

	return (
		<ThemedSafeAreaView>
			<View
				onLayout={(event) => {
					const { height } = event.nativeEvent.layout;
					setParentHeight(height);
				}}
			>
				<FlatList
					style={{
						height: "100%",
						backgroundColor: "black",
					}}
					data={videos}
					renderItem={({ item, index }) => (
						<View style={[styles.videoContainer]}>
							<VideoView
								style={[
									{
										width: "100%",
										height: parentHeight,
									},
								]}
								player={player}
							/>
						</View>
					)}
					keyExtractor={(item) => item.id}
					pagingEnabled
					showsVerticalScrollIndicator={false}
					onViewableItemsChanged={onViewableItemsChanged as any}
					viewabilityConfig={{
						viewAreaCoveragePercentThreshold: 50, // Trigger index change when 50% of video is visible
					}}
				/>
			</View>
		</ThemedSafeAreaView>
	);
};

const styles = StyleSheet.create({
	videoContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	video: {
		width: "100%",
		height: "100%",
	},
});

export default AutoPlayVideos;
