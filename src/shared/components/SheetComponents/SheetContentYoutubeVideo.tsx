import React, { useState, useCallback, useRef, FC } from "react";
import { Button, View, Alert, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

interface SheetContentYoutubeVideoProps {
    videoId: string;
}

export  const  SheetContentYoutubeVideo: FC<SheetContentYoutubeVideoProps> = ({ videoId = ''}) => {
  const [playing, setPlaying] = useState(false);
  const { width, height } = Dimensions.get("window");

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
      //Alert.alert("video has finished playing!");
    }
  }, []);

  // const togglePlaying = useCallback(() => {
  //   setPlaying((prev) => !prev);
  // }, []);

  return (
    <View className="w-full items-center justify-center m-0 b-red-400">
      <YoutubePlayer
        width={width * 0.95}
        height={250}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        webViewStyle={{margin: 0, padding: 0}}
        
      />
      {
        /*
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        */
      }
    </View>
  );
}