import React, { useRef, useState } from "react";
import { FlatList, Dimensions, View, StyleSheet } from "react-native";
import { videos } from "../../data/videos";
import { useVideoPlayer, VideoView } from "expo-video";

const { height } = Dimensions.get("window");

const AutoPlayVideos = () => {
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

	return (
		<FlatList
			data={videos}
			renderItem={({ item, index }) => (
				<View style={styles.videoContainer}>
					<VideoView
						style={styles.video}
						player={player}
						// resizeMode="cover"
						// repeat
						// paused={currentIndex !== index} // Only auto-play if the current video is in view
					/>
				</View>
			)}
			keyExtractor={(item) => item.id}
			pagingEnabled
			showsVerticalScrollIndicator={false}
			snapToAlignment="start"
			decelerationRate="fast"
			onViewableItemsChanged={onViewableItemsChanged as any}
			viewabilityConfig={{
				viewAreaCoveragePercentThreshold: 50, // Trigger index change when 50% of video is visible
			}}
		/>
	);
};

const styles = StyleSheet.create({
	videoContainer: {
		height, // Each video takes up the full screen
		justifyContent: "center",
		alignItems: "center",
	},
	video: {
		width: "100%",
		height: "100%",
	},
});

export default AutoPlayVideos;
