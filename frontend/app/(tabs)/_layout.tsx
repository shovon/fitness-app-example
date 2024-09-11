import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const [currentTab, setCurrentTab] = React.useState("index");

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Workouts",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "barbell" : "barbell-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Shorts",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "videocam" : "videocam-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
