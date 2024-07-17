import { BackpackContents, BackpackListItem } from "./BackpackTypes";

export interface ExploreState {
    backpackList: BackpackListItem[],
    backpackContents: BackpackContents[],
    isLoadingExplore: boolean,
    isUserAdmin: boolean
}