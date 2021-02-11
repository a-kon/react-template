type AnalyticsPayload = Record<string|number, any>;

const analyticsTrack = (evName: string, payload?: AnalyticsPayload) => {
    // eslint-disable-next-line
    console.log(evName, payload);
};

export const analytics = {
    track: analyticsTrack,
};

export type Analytics = typeof analytics;
