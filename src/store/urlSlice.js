import { createSlice } from '@reduxjs/toolkit';

const urlSlice = createSlice({
  name: 'url',
  initialState: { links: [] },
  reducers: {
    createShortLink(state, action) {
      const { url, customShortcode } = action.payload;
      const shortcode = customShortcode || Math.random().toString(36).substring(2, 8);
      state.links.push({ originalUrl: url, shortcode });
    },
  },
});

export const { createShortLink } = urlSlice.actions;
export default urlSlice.reducer;
