declare function createPageItemsInfo(
    currentPage: number,
    pageCount: number,
    pageSlot: number
): {
    hasFastBackward: boolean;
    hasFastForward: boolean;
    fastBackwardTo: number;
    fastForwardTo: number;
    items: PageItem[];
};
export type PageItem =
    | {
          type: 'fast-backward' | 'fast-forward';
          label: undefined;
          active: false;
          options: Array<{
              label: string;
              value: number;
          }>;
      }
    | {
          type: 'page';
          label: number;
          active: boolean;
          mayBeFastForward: boolean;
          mayBeFastBackward: boolean;
      };
export { createPageItemsInfo };
