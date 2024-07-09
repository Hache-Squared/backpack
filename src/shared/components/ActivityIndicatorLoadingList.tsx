import { ActivityIndicator, View } from "react-native"
import { useAppTheme } from "../hooks"
import { FC } from "react";
import { NoItemsInList } from "../views";


interface ActivityIndicatorLoadingListProps {
  isLoading: boolean
}
export const ActivityIndicatorLoadingList: FC<ActivityIndicatorLoadingListProps> = ({isLoading}) => {
  const { primaryColor } = useAppTheme();
  return (
    <>
    {
      isLoading ? (
        <View className="flex-1 items-center, justify-center">
          <ActivityIndicator color={primaryColor} size={"large"} className="my-10"/>
        </View>
      ) : <NoItemsInList/>
    }
    </>
    
  )
}
